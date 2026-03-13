<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Page\StorePageRequest;
use App\Http\Requests\Page\UpdatePageRequest;
use App\Models\Page;
use App\Models\PageCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pages = Page::with('category')->latest()->paginate(9);
        return Inertia::render('Admin/Page/Items/Index', [
            'pages' => $pages
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pageCategories = PageCategory::where('status', 1)->latest()->get();
        return Inertia::render('Admin/Page/Items/Create', [
            'pageCategories' => $pageCategories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePageRequest $request)
    {
        Page::create($request->validated());
        return to_route('admin.page.index')->with('success', 'Page created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        $page->load('category');
        return Inertia::render('Admin/Page/Items/Show', [
            'page' => $page
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Page $page)
    {
        $page->load('category');
        $pageCategories = PageCategory::where('status', 1)->latest()->get();
        return Inertia::render('Admin/Page/Items/Edit', [
            'page' => $page,
            'pageCategories' => $pageCategories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePageRequest $request, Page $page)
    {
        $page->update($request->validated());
        return to_route('admin.page.index')->with('success', 'Page updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {

        $imagePath = $page->getRawOriginal('images');
        if ($imagePath && Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        }
        $page->delete();
        return back()->with('success', 'Page deleted successfully');
    }

    public function status(Page $page)
    {
        $page->update([
            'status' => !$page->status
        ]);
        return back()->with('success', 'Page status updated successfully');
    }
}
