<?php

namespace App\Http\Controllers;

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
        return Inertia::render('frontend/Facilities');
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
