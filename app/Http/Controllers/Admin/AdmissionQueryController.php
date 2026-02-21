<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdmissionQuery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdmissionQueryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $admissionQueries = AdmissionQuery::latest()->paginate(9);
        return Inertia::render('Admin/Admission/AdmissionQuery/Index', [
            'admissionQueries' => $admissionQueries,
        ]);
    }


    public function show(AdmissionQuery $admissionQuery)
    {
        return Inertia::render('Admin/Admission/AdmissionQuery/Show', [
            'admissionQuery' => $admissionQuery,
            'grades' => config('GradeConfig.grade'),
            'genders' => config('GenderConfig.genders'),
        ]);
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AdmissionQuery $admissionQuery)
    {
        deleteFiles($admissionQuery->documents);
        $admissionQuery->delete();
        return back()->with('success', 'Admission Query deleted sucessfully');
    }
}
