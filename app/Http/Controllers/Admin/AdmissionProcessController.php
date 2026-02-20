<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdmissionProcess\StoreAdmissionProcessRequest;
use App\Http\Requests\AdmissionProcess\UpdateAdmissionProcessRequest;
use App\Models\AdmissionProcess;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdmissionProcessController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $admissionProcesses = AdmissionProcess::latest()->paginate(7);
        return Inertia::render('Admin/Admission/AdmisssionProcess/Index', [
            'admissionProcesses' => $admissionProcesses,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Admission/AdmisssionProcess/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdmissionProcessRequest $request)
    {
        AdmissionProcess::create($request->validated());
        return to_route('admin.admission-process.index')
            ->with('success', 'Admission Process created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(AdmissionProcess $admissionProcess)
    {
        return Inertia::render('Admin/Admission/AdmisssionProcess/Show', [
            'admissionProcess' => $admissionProcess,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AdmissionProcess $admissionProcess)
    {
        return Inertia::render('Admin/Admission/AdmisssionProcess/Edit', [
            'admissionProcess' => $admissionProcess,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdmissionProcessRequest $request, AdmissionProcess $admissionProcess)
    {
        $admissionProcess->update($request->validated());
        return to_route('admin.admission-process.index')
            ->with('success', 'Admission Process updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AdmissionProcess $admissionProcess)
    {
        $admissionProcess->delete();
        return back()
            ->with('success', 'Admission Process deleted successfully');
    }
    public function status(AdmissionProcess $admissionProcess)
    {
        $admissionProcess->update([
            'status' => !$admissionProcess->status,
        ]);
        return back()->with('success', 'Status updated successfully');
    }
}
