<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Staff\StoreStaffRequest;
use App\Http\Requests\Staff\UpdateStaffRequest;

use App\Models\Staff;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StaffController extends Controller
{
    public function index()
    {
        $staffs = Staff::orderBy('sort_order')->orderBy('full_name')->paginate(15);
        return Inertia::render('Admin/Staff/Index', [
            'staffs' => $staffs,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Staff/Create', [
            'departments' => config('StaffConfig.departments'),
        ]);
    }

    public function store(StoreStaffRequest $request)
    {
        Staff::create($request->validated());

        return to_route('admin.staff.index')->with('success', 'Staff member added successfully');
    }

    public function edit(Staff $staff)
    {
        return Inertia::render('Admin/Staff/Edit', [
            'staff' => $staff,
            'departments' => config('StaffConfig.departments'),
        ]);
    }

    public function update(UpdateStaffRequest $request, Staff $staff)
    {


        $staff->update($request->validated());
        return to_route('admin.staff.index')
            ->with('success', 'Staff member updated successfully');
    }

    public function show(Staff $staff)
    {
        return Inertia::render('Admin/Staff/Show', [
            'staff' => $staff,
        ]);
    }

    public function destroy(Staff $staff)
    {
        deleteFiles($staff->image);
        $staff->delete();
        return back()->with('success', 'Staff member deleted successfully');
    }

    public function status(Staff $staff)
    {
        $staff->update(['is_active' => !$staff->is_active]);
        return back()->with('success', 'Staff status updated');
    }
}
