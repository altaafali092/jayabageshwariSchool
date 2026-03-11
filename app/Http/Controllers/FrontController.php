<?php

namespace App\Http\Controllers;

use App\Enums\GalleryEnum;
use App\Http\Requests\AdmissionQuery\StoreAdmissionQueryRequest;
use App\Http\Requests\Frontend\StoreContactFormRequest;
use App\Models\AcademicItems;
use App\Models\AcademicLevel;
use App\Models\AdmissionQuery;
use App\Models\Contact;
use App\Models\FacilityCategory;
use App\Models\Gallery;
use App\Models\NewsEvent;
use App\Models\slider;
use App\Models\Staff;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{
    public function index()
    {
        $popupNotice = NewsEvent::where('is_popup', true)->first();
        $sliders = slider::where('status', true)->latest()->limit(5)->get();
        $notices = NewsEvent::where(['status' => true, 'category' => 'notice'])->latest()->limit(5)->get();
        $events = NewsEvent::where('status', true)->whereIn('category', ['event', 'news'])->latest()->limit(5)->get();
        return Inertia::render('frontend/welcome', [
            'sliders' => $sliders,
            'notices' => $notices,
            'events' => $events,
            'popupNotice' => $popupNotice,
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
        $events = NewsEvent::where('status', true)->whereIn('category', ['news', 'event'])->latest()->get();
        return Inertia::render('frontend/NewsEvents', [
            'events' => $events,
        ]);
    }

    public function notices()
    {
        $notices = NewsEvent::where('status', true)->where('category', 'notice')->latest()->get();
        return Inertia::render('frontend/Notices', [
            'notices' => $notices,
        ]);
    }

    public function noticeShow(NewsEvent $notice)
    {
        return Inertia::render('frontend/NoticeDetail', [
            'notice' => $notice
        ]);
    }

    public function academics(AcademicLevel $academicLevel)
    {
        $levels = AcademicLevel::where('status', true)
            ->orderBy('sort_order')
            ->get();

        $academicLevel->load([
            'academicItems' => function ($query) {
                $query->where('status', true)
                    ->orderBy('sort_order');
            }
        ]);

        return Inertia::render('frontend/Academics', [
            'levels' => $levels,
            'academicLevel' => $academicLevel,
        ]);
    }


    public function facilities(FacilityCategory $facilityCategory)
    {
        $categories = FacilityCategory::where('status', true)
            ->orderBy('sort_order')
            ->get();

        $facilityCategory->load([
            'facilities' => function ($query) {
                $query->where('status', true)
                    ->orderBy('sort_order');
            }
        ]);

        return Inertia::render('frontend/Facilities', [
            'categories' => $categories,
            'facilityCategory' => $facilityCategory,
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
        $galleries = Gallery::where('status', true)->latest()->get();
        return Inertia::render('frontend/Gallery', [
            'galleryTypes' => GalleryEnum::getValuesWithLabels(),
            'galleries'    => $galleries,
        ]);
    }

    public function galleryShow(Gallery $gallery)
    {
        $related = Gallery::where('status', true)
            ->where('gallery_type', $gallery->gallery_type)
            ->where('id', '!=', $gallery->id)
            ->latest()
            ->limit(6)
            ->get();

        return Inertia::render('frontend/GalleryDetail', [
            'gallery' => $gallery,
            'related' => $related,
        ]);
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

    public function newsShow(NewsEvent $news)
    {
        $related = NewsEvent::where('status', true)
            ->where('category', $news->category)
            ->where('id', '!=', $news->id)
            ->latest()
            ->limit(4)
            ->get();

        return Inertia::render('frontend/NewsEventPage/NewsDetail', [
            'news'    => $news,
            'related' => $related,
        ]);
    }

    public function NewsEventPage()
    {
        $newsEvents = NewsEvent::where('status', true)->whereIn('category', ['news', 'event'])->latest()->get();
        return Inertia::render('frontend/NewsEventPage/NewsEvents', [
            'newsEvents' => $newsEvents
        ]);
    }
}
