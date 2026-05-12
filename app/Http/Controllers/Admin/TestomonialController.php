<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Testomonial\StoreTestomonialRequest;
use App\Http\Requests\Testomonial\UpdateTestomonialRequest;
use App\Models\Testomonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestomonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testomonials = Testomonial::latest()->paginate(9);
        return Inertia::render('Admin/Testomonial/Index', [
            'testomonials' => $testomonials,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Testomonial/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTestomonialRequest $request)
    {
        Testomonial::create($request->validated());
        return to_route('admin.testomonial.index')
            ->with('success', 'Testomonial created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Testomonial $testomonial)
    {
        return Inertia::render('Admin/Testomonial/Show', [
            'testomonial' => $testomonial,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testomonial $testomonial)
    {
        return Inertia::render('Admin/Testomonial/Edit', [
            'testomonial' => $testomonial,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTestomonialRequest $request, Testomonial $testomonial)
    {
        $testomonial->update($request->validated());
        return to_route('admin.testomonial.index')
            ->with('success', 'Testomonial updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testomonial $testomonial)
    {
        deleteFiles($testomonial->image);
        $testomonial->delete();
        return back()->with('success', 'Testomonial deleted successfully');
    }

    public function status(Testomonial $testomonial)
    {
        $testomonial->update(['is_active' => !$testomonial->is_active]);
        return back()->with('success', 'Testomonial status updated');
    }
}
