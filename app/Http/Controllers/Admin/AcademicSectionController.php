<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AcademicSection\StoreAcademicSEctionRequest;
use App\Http\Requests\AcademicSection\UpdateAcademicSEctionRequest;
use App\Models\AcademicLevel;
use App\Models\AcademicSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AcademicSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $acedamicSections = AcademicSection::with('academicLevel')->latest()->paginate(7);
        return Inertia::render('Admin/Acedamics/AcademicSection/Index', [
            'academicSections' => $acedamicSections
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $academicLevels = AcademicLevel::where('status', 1)->get();
        return Inertia::render('Admin/Acedamics/AcademicSection/Create', [
            'academicLevels' => $academicLevels,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAcademicSEctionRequest $request)
    {
        AcademicSection::create($request->validated());
        return to_route('admin.academic-section.index', $request->academic_level_id)
            ->with('success', 'Academic Section created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(AcademicSection $academicSection)
    {
        $academicSection->load('academicLevel');
        return Inertia::render('Admin/Acedamics/AcademicSection/Show', [
            'academicSection' => $academicSection,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AcademicSection $academicSection)
    {
        $academicLevels = AcademicLevel::where('status', 1)->get();
        $academicSection->load('academicLevel');
        return Inertia::render('Admin/Acedamics/AcademicSection/Edit', [
            'academicSection' => $academicSection,
            'academicLevels' => $academicLevels,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAcademicSEctionRequest $request, AcademicSection $academicSection)
    {
        $academicSection->update($request->validated());
        return to_route('admin.academic-section.index', $academicSection->academic_level_id)
            ->with('success', 'Academic Section updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AcademicSection $academicSection)
    {
        $academicSection->delete();
        return back()
            ->with('success', 'Academic Section deleted successfully');
    }

    public function status(AcademicSection $academicSection)
    {
        $academicSection->update([
            'status' => !$academicSection->status,
        ]);
        return back()
            ->with('success', 'Academic Section status updated successfully');
    }
}
