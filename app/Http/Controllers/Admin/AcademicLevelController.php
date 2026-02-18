<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AcademicLevel\StoreAcedamicLevelRequest;
use App\Http\Requests\AcademicLevel\UpdateAcedamicLevelRequest;
use App\Models\AcademicLevel;
use Inertia\Inertia;

class AcademicLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $acedamicLevels = AcademicLevel::latest()->paginate(7);
        return Inertia::render('Admin/Acedamics/AcedamicsLevel/Index', [
            'acedamicLevels' => $acedamicLevels,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Acedamics/AcedamicsLevel/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAcedamicLevelRequest $request)
    {
        AcademicLevel::create($request->validated());
        return to_route('admin.academic-level.index')
            ->with('success', 'Academic Level created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(AcademicLevel $academicLevel)
    {

        return Inertia::render('Admin/Acedamics/AcedamicsLevel/Show', [
            'academicLevel' => $academicLevel,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AcademicLevel $academicLevel)
    {

        return Inertia::render('Admin/Acedamics/AcedamicsLevel/Edit', [
            'academicLevel' => $academicLevel,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAcedamicLevelRequest $request, AcademicLevel $academicLevel)
    {
        $academicLevel->update($request->validated());
        return to_route('admin.academic-level.index')
            ->with('success', 'Academic Level updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AcademicLevel $academicLevel)
    {
        $academicLevel->delete();
        return back()
            ->with('success', 'Academic Level deleted successfully');
    }

    public function status(AcademicLevel $academicLevel)
    {
        $academicLevel->update([
            'status' => !$academicLevel->status,
        ]);
        return back()
            ->with('success', 'Academic Level status updated successfully');
    }
}
