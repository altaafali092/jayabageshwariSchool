<?php

namespace App\Http\Controllers\Admin;

use App\Enums\CardTypeEnum;
use App\Enums\FacilityEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Facility\StoreFacilityRequest;
use App\Http\Requests\Facility\UpdateFacilityRequest;
use App\Models\Facility;
use App\Models\FacilityCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FacilityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $facilities = Facility::with('facilityCategory')->latest()->paginate(10);
        return Inertia::render('Admin/Facility/Item/Index', [
            'facilities' => $facilities
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = FacilityCategory::where('status', 1)->latest()->get();
        $cardTypes = CardTypeEnum::getValuesWithLabels();
        return Inertia::render('Admin/Facility/Item/Create', [
            'cardTypes' => $cardTypes,
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFacilityRequest $request)
    {
        Facility::create($request->validated());
        return to_route('admin.facility.index')
            ->with('success', 'Facility created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Facility $facility)
    {
        return Inertia::render('Admin/Facility/Item/Show', [
            'facility' => $facility
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Facility $facility)
    {
        $categories = FacilityCategory::where('status', 1)->latest()->get();
        $cardTypes = FacilityEnum::getValuesWithLabels();
        return Inertia::render('Admin/Facility/Item/Edit', [
            'facility' => $facility,
            'categories' => $categories,
            'cardTypes' => $cardTypes
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFacilityRequest $request, Facility $facility)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            deleteFiles($facility->getRawOriginal('image'));
            $data['image'] = asset('storage/' . $request->file('image')->store('Facility', 'public'));
        }

        $facility->update($data);

        return to_route('admin.facility.index')->with('success', 'Facility updated successfully.');
    }

    public function destroy(Facility $facility)
    {
        deleteFiles($facility->getRawOriginal('image'));
        $facility->delete();
        return back()->with('success', 'Facility deleted successfully.');
    }

    public function status(Facility $facility)
    {
        $facility->update(['status' => !$facility->status]);
        return back()->with('success', 'Status updated successfully.');
    }
}
