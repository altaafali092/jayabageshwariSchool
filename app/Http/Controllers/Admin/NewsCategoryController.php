<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsAndEvents\NewsCategory\StoreNewsCategoryRequest;
use App\Http\Requests\NewsAndEvents\NewsCategory\UpdateNewsCategoryRequest;
use App\Models\NewsCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $newsCategories = NewsCategory::latest()->paginate(7);
        return Inertia::render('Admin/NewsEvent/Category/Index', [
            'newsCategories' => $newsCategories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/NewsEvent/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsCategoryRequest $request)
    {
        NewsCategory::create($request->validated());
        return to_route('admin.news-category.index')
            ->with('success', 'Category created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NewsCategory $newsCategory)
    {
        return Inertia::render('Admin/NewsEvent/Category/Edit', [
            'newsCategory' => $newsCategory,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsCategoryRequest $request, NewsCategory $newsCategory)
    {
        $newsCategory->update($request->validated());
        return to_route('admin.news-category.index')
            ->with('success', 'Category updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsCategory $newsCategory)
    {
        $newsCategory->delete();
        return back()
            ->with('success', 'Category deleted successfully');
    }
    
    public function status(NewsCategory $newsCategory)
    {
        // dd($newsCategory);
        $newsCategory->update([
            'status' => !$newsCategory->status,
        ]);
        return back()->with('success', 'Category status updated successfully');
    }
}
