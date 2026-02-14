<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\slider\StoreSliderRequest;
use App\Http\Requests\slider\UpdateSliderRequest;
use App\Models\slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sliders = slider::latest()->paginate(7);
        return Inertia::render('Admin/Slider/Index', [
            'sliders' => $sliders,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Slider/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSliderRequest $request)
    {

        slider::create($request->validated());
        return to_route('admin.slider.index')->with('success', 'Slider created successfully');
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
    public function edit(slider $slider)
    {
        return Inertia::render('Admin/Slider/Edit', [
            'slider' => $slider,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSliderRequest $request, slider $slider)
    {
        $data = $request->validated();

        // // if you want old image deleted when new one is uploaded
        // if ($request->hasFile('image')) {
        //     deleteFile($slider->getRawOriginal('image'));
        // }

        $slider->update($data);

        return to_route('admin.slider.index')->with('success', 'Slider updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(slider $slider)
    {
        $slider->delete();
        return to_route('admin.slider.index')->with('success', 'Slider deleted successfully');
    }


    public function status(slider $slider)
    {

        $imagePath = $slider->getRawOriginal('image');
        if ($imagePath && Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        }
        $slider->update([
            'status' => !$slider->status,
        ]);

        return back()->with('success', 'Slider status updated');
    }
}
