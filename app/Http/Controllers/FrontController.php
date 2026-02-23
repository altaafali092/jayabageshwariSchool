<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdmissionQuery\StoreAdmissionQueryRequest;
use App\Http\Requests\Frontend\StoreContactFormRequest;
use App\Models\AdmissionQuery;
use App\Models\Contact;
use App\Models\NewsEvent;
use App\Models\slider;
use App\Models\Staff;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{
    public function index()
    {
        $sliders = slider::where('status', true)->latest()->limit(5)->get();
        $notices = NewsEvent::where(['status' => true, 'category' => 'notice'])->latest()->limit(5)->get();
        $events = NewsEvent::where('status', true)->whereIn('category', ['notice', 'news'])->latest()->limit(5)->get();
        return Inertia::render('frontend/welcome', [
            'sliders' => $sliders,
            'notices' => $notices,
            'events' => $events,
        ]);
    }

    public function contact()
    {
        return Inertia::render('frontend/Contact');
    }

    public function contactForm(StoreContactFormRequest $request)
    {
        Contact::create($request->validated());
        return back()->with([
            'success' => 'Message sent successfully'
        ]);
    }

    public function admissions()
    {
        return Inertia::render('frontend/Admissions', [
            'grades' => config('GradeConfig.grade'),
            'genders' => config('GenderConfig.genders'),
        ]);
    }

    public function admissionForm(StoreAdmissionQueryRequest $request)
    {
        AdmissionQuery::create($request->validated());

        return to_route('admissions')->with([
            'success' => 'Admission form submitted successfully'
        ]);
    }

    public function news()
    {
        return Inertia::render('frontend/NewsEvents');
    }

    public function notices()
    {
        return Inertia::render('frontend/Notices');
    }

    public function academics()
    {
        return Inertia::render('frontend/Academics');
    }

    public function facilities()
    {
        $facilities = \App\Models\Facility::where('status', true)
            ->orderBy('position')
            ->get();

        return Inertia::render('frontend/Facilities', [
            'overview_main' => $facilities->where('category', \App\Enums\FacilityEnum::OVERVIEW_MAIN->value)->values(),
            'overview_lifestyle' => $facilities->where('category', \App\Enums\FacilityEnum::OVERVIEW_LIFESTYLE->value)->values(),
            'hostel_features' => $facilities->where('category', \App\Enums\FacilityEnum::HOSTEL_FEATURE->value)->values(),
            'transport_features' => $facilities->where('category', \App\Enums\FacilityEnum::TRANSPORT_FEATURE->value)->values(),
            'transport_stats' => $facilities->where('category', \App\Enums\FacilityEnum::TRANSPORT_STATS->value)->values(),
            'sports_items' => $facilities->where('category', \App\Enums\FacilityEnum::SPORTS_ITEM->value)->values(),
            'library_stats' => $facilities->where('category', \App\Enums\FacilityEnum::LIBRARY_STATS->value)->values(),
            'library_images' => $facilities->where('category', \App\Enums\FacilityEnum::LIBRARY_IMAGES->value)->values(),
        ]);
    }

    public function history()
    {
        return Inertia::render('frontend/About/History');
    }

    public function missionVision()
    {
        return Inertia::render('frontend/About/MissionVision');
    }

    public function management()
    {
        return Inertia::render('frontend/About/Management');
    }

    public function whyChooseUs()
    {
        return Inertia::render('frontend/About/WhyChooseUs');
    }

    public function gallery()
    {
        return Inertia::render('frontend/Gallery');
    }

    public function staff()
    {
        $staffs = Staff::where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('full_name')
            ->get()
            ->groupBy('department');

        return Inertia::render('frontend/Staff', [
            'staffs' => $staffs,
            'departments' => config('StaffConfig.departments')
        ]);
    }

    public function staffShow(Staff $staff)
    {
        return Inertia::render('frontend/StaffDetail', [
            'staff' => $staff
        ]);
    }
}
