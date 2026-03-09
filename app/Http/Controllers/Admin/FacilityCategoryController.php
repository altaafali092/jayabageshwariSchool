<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Facility\Category\StoreCategoryRequest;
use App\Http\Requests\Facility\Category\UpdateCategoryRequest;
use App\Http\Requests\Facility\UpdateFacilityRequest;
use App\Models\FacilityCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FacilityCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $facilityCategoires = FacilityCategory::latest()->paginate(7);
        return Inertia::render('Admin/Facility/Category/Index', [
            'facilityCategoires' => $facilityCategoires
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Facility/Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        FacilityCategory::create($request->validated());
        return to_route('admin.facility-category.index')->with('success', 'Facility Category created successfully');
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
    public function edit(FacilityCategory $facilityCategory)
    {
        return Inertia::render('Admin/Facility/Category/Edit', [
            'facilityCategory' => $facilityCategory
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, FacilityCategory $facilityCategory)
    {
        $facilityCategory->update($request->validated());
        return to_route('admin.facility-category.index')->with('success', 'Facility Category updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FacilityCategory $facilityCategory)
    {
        $facilityCategory->delete();
        return back()->with('success', 'Facility Category deleted successfully');
    }

    public function status(FacilityCategory $facilityCategory)
    {
        $facilityCategory->update([
            'status' => !$facilityCategory->status
        ]);
        return back()->with('success', 'Facility Category status updated successfully');
    }
}
