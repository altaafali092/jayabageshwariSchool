<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\OfficeSetting\StoreOfficeSettingRequest;
use App\Models\OfficeSetting;
use Illuminate\Http\Request;
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
        $officeSetting = OfficeSetting::first();
        return Inertia::render('Admin/OfficeSetting/Create', [
            'officeSetting' => $officeSetting,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOfficeSettingRequest $request)
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

    /**
     * Show the form for editing the specified resource.
     */


    // Wait, the user might want a singleton pattern for office settings, but they used a resource-like table.
    // I'll stick to resource methods for now as they created Index/Create files.
}
