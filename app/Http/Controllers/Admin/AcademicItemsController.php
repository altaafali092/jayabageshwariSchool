<?php

namespace App\Http\Controllers\Admin;

use App\Enums\CardTypeEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\AcademicItems\StoreAcademicItemsRequest;
use App\Http\Requests\AcademicItems\UpdateAcademicItemsRequest;
use App\Models\AcademicItems;
use App\Models\AcademicLevel;
use App\Models\AcademicSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AcademicItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $acedamicItems = AcademicItems::with('academicLevel')->latest()->paginate(7);
        return Inertia::render('Admin/Acedamics/AcademicItems/Index', [
            'academicItems' => $acedamicItems,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $academicLevels = AcademicLevel::where('status', 1)->get();
        $cardTypes = CardTypeEnum::getValuesWithLabels();
        return Inertia::render('Admin/Acedamics/AcademicItems/Create', [
            'academicLevels' => $academicLevels,
            'cardTypes' => $cardTypes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAcademicItemsRequest $request)
    {
        // dd($request->all());
        AcademicItems::create($request->validated());
        return to_route('admin.academic-item.index')
            ->with('success', 'Academic Item created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(AcademicItems $academicItem)
    {
        $academicItem->load('academicLevel');
        return Inertia::render('Admin/Acedamics/AcademicItems/Show', [
            'academicItem' => $academicItem,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AcademicItems $academicItem)
    {
        $academicLevels = AcademicLevel::where('status', 1)->get();
        $cardTypes = CardTypeEnum::getValuesWithLabels();
        return Inertia::render('Admin/Acedamics/AcademicItems/Edit', [
            'academicItem' => $academicItem,
            'academicLevels' => $academicLevels,
            'cardTypes' => $cardTypes,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAcademicItemsRequest $request, AcademicItems $academicItem)
    {

        $academicItem->update($request->validated());
        return to_route('admin.academic-item.index')
            ->with('success', 'Academic Item updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AcademicItems $academicItem)
    {
        deleteFiles($academicItem->image);
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
