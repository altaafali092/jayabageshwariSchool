<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StaticPageController extends Controller
{
    public function show(string $slug)
    {

        return match ($slug) {
            'index' => app(FrontController::class)->index(),
            'contact' => Inertia::render('frontend/Contact'),
            'admissions' => Inertia::render('frontend/Admissions'),
            'facilities' => Inertia::render('frontend/Facilities'),
            'gallery' => Inertia::render('frontend/Gallery'),
            'news-events' => Inertia::render('frontend/NewsEvents'),
            'notices' => Inertia::render('frontend/Notices'),
            'staff' => Inertia::render('frontend/Staff'),
            default => abort(404),
        };
    }
}
