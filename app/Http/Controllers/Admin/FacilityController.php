<?php

namespace App\Http\Controllers\Admin;

use App\Enums\FacilityEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Facility\StoreFacilityRequest;
use App\Http\Requests\Facility\UpdateFacilityRequest;
use App\Models\Facility;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FacilityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $facilities = Facility::latest()->paginate(10);
        return Inertia::render('Admin/Facility/Index', [
            'facilities' => $facilities
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = FacilityEnum::getValuesWithLabels();
        return Inertia::render('Admin/Facility/Create', [
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
        return Inertia::render('Admin/Facility/Show', [
            'facility' => $facility
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Facility $facility)
    {
        $categories = FacilityEnum::getValuesWithLabels();
        return Inertia::render('Admin/Facility/Edit', [
            'facility' => $facility,
            'categories' => $categories
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

        if ($request->hasFile('icon')) {
            deleteFiles($facility->getRawOriginal('icon'));
            $data['icon'] = asset('storage/' . $request->file('icon')->store('Facility/Icons', 'public'));
        }

        $facility->update($data);

        return to_route('admin.facility.index')->with('success', 'Facility updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy(Facility $facility)
    {
        deleteFiles($facility->getRawOriginal('image'));
        deleteFiles($facility->getRawOriginal('icon'));
        $facility->delete();
        return back()->with('success', 'Facility deleted successfully.');
    }

    public function status(Facility $facility)
    {
        $facility->update(['status' => !$facility->status]);
        return back()->with('success', 'Status updated successfully.');
    }
}
