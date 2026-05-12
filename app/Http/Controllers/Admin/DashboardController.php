<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\AdmissionQuery;
use App\Models\Staff;
use App\Models\NewsEvent;
use App\Models\Notice;
use App\Models\Contact;
use App\Models\Testomonial;
use App\Models\slider;
use App\Models\Gallery;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $metrics = [
            'total_admission_queries' => AdmissionQuery::query()->count(),
            'total_staff' => Staff::query()->count(),
            'total_news_events' => NewsEvent::query()->count(),
            'total_notices' => Notice::query()->count(),
            'total_contacts' => Contact::query()->count(),
            'total_testimonials' => Testomonial::query()->count(),
            'total_sliders' => slider::query()->count(),
            'total_galleries' => Gallery::query()->count(),
            'total_image_galleries' => Gallery::query()->whereNotNull('images')->count(),
            'total_video_galleries' => Gallery::query()->whereNotNull('video_url')->count(),
        ];

        return Inertia::render('Admin/dashboard', [
            'metrics' => $metrics
        ]);
    }
}
