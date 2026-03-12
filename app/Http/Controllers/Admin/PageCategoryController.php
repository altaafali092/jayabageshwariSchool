<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PageCategory\StorePageCategoryRequest;
use App\Http\Requests\PageCategory\UpdatePageCategoryRequest;
use App\Models\PageCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pageCategories = PageCategory::latest()->paginate(9);
        return Inertia::render('Admin/Page/Category/Index', [
            'pageCategories' => $pageCategories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Page/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePageCategoryRequest $request)
    {
        PageCategory::create($request->validated());
        return to_route('admin.page-category.index')->with('success', 'Page Category created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(PageCategory $pageCategory)
    {
        return Inertia::render('Admin/Page/Category/Show', [
            'pageCategory' => $pageCategory,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PageCategory $pageCategory)
    {
        return Inertia::render('Admin/Page/Category/Edit', [
            'pageCategory' => $pageCategory,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePageCategoryRequest $request, PageCategory $pageCategory)
    {
        $pageCategory->update($request->validated());
        return to_route('admin.page-category.index')->with('success', 'Page Category updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PageCategory $pageCategory)
    {
        $pageCategory->delete();
        return to_route('admin.page-category.index')->with('success', 'Page Category deleted successfully');
    }
    public function status(PageCategory $pageCategory)
    {
        $pageCategory->update([
            'status' => !$pageCategory->status,
        ]);
        return back()->with('success', 'Page Category status updated successfully');
    }
}
