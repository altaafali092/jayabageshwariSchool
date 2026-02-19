<?php

namespace App\Http\Controllers;

use App\Http\Requests\Frontend\StoreContactFormRequest;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{
    public function index()
    {
        return Inertia::render('frontend/welcome');
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
        return Inertia::render('frontend/Admissions');
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
}
