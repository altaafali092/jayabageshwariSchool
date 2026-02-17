<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AcademicItems\StoreAcademicItemsRequest;
use App\Http\Requests\AcademicItems\UpdateAcademicItemsRequest;
use App\Models\AcademicItems;
use App\Models\AcademicSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AcademicItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $acedamicItems = AcademicItems::with('academicSections')->latest()->paginate(7);
        return Inertia::render('Admin/Acedamics/AcademicItems/Index', [
            'academicItems' => $acedamicItems,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $academicSections = AcademicSection::where('status', 1)->get();
        return Inertia::render('Admin/Acedamics/AcademicItems/Create', [
            'academicSections' => $academicSections,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAcademicItemsRequest $request)
    {
        AcademicItems::create($request->validated());
        return to_route('admin.academic-items.index')
            ->with('success', 'Academic Item created successfully');
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
    public function edit(AcademicItems $academicItem)
    {
        $academicSections = AcademicSection::where('status', 1)->get();
        return Inertia::render('Admin/Acedamics/AcademicItems/Edit', [
            'academicItem' => $academicItem,
            'academicSections' => $academicSections,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAcademicItemsRequest $request, AcademicItems $academicItem)
    {
        $academicItem->update($request->validated());
        return to_route('admin.academic-items.index')
            ->with('success', 'Academic Item updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AcademicItems $academicItem)
    {
        $academicItem->delete();
        return back()
            ->with('success', 'Academic Item deleted successfully');
    }

    public function status(AcademicItems $academicItem)
    {
        $academicItem->update([
            'status' => !$academicItem->status,
        ]);
        return back()
            ->with('success', 'Academic Item status updated successfully');
    }
}
