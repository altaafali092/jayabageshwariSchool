<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\OfficeSetting\StoreOfficeSettingRequest;
use App\Http\Requests\OfficeSetting\OfficeSettingRequest;
use App\Models\OfficeSetting;
use App\Models\Staff;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class OfficeSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $officeSetting = OfficeSetting::with('keyContactPerson', 'keyContactSecPerson')->first();
        $staffs = Staff::where('is_active', 1)->latest()->get();
        return Inertia::render('Admin/OfficeSetting/Create', [
            'officeSetting' => $officeSetting,
            'staffs' => $staffs,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OfficeSettingRequest $request)
    {
        $officeSetting = OfficeSetting::first();
        if ($officeSetting) {
            $officeSetting->update($request->validated());
        } else {
            OfficeSetting::create($request->validated());
        }
        Cache::forget('office_setting');
        return back()->with('success', 'Office Settings created successfully');
    }
    public function isAdmission(OfficeSetting $officeSetting)
    {
        $officeSetting->update([
            'is_admission' => !$officeSetting->is_admission
        ]);

        return back()->with('success', 'Admission Status updated successfully');
    }
    public function isOpen(OfficeSetting $officeSetting)
    {
        $officeSetting->update([
            'is_open' => !$officeSetting->is_open
        ]);
        return back()->with('success', 'Office Open Status updated successfully');
    }
}
