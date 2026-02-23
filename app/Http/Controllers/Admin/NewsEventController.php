<?php

namespace App\Http\Controllers\Admin;

use App\Enums\NewsEventEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\NewsAndEvents\NewsEvent\StoreNewsEventRequest;
use App\Http\Requests\NewsAndEvents\NewsEvent\UpdateNewsEventRequest;
use App\Models\NewsCategory;
use App\Models\NewsEvent;

use Inertia\Inertia;

class NewsEventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = NewsEventEnum::getValuesWithLabels();
        $newsEvents = NewsEvent::latest();
        if (request()->has('type')) {
            $newsEvents->where('category', request('type'));
        }
        $newsEvents = $newsEvents->paginate(7);
        return Inertia::render('Admin/NewsEvent/News&Event/Index', [
            'newsEvents' => $newsEvents,
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = NewsEventEnum::getValuesWithLabels();
        $newsCategories = NewsCategory::where('status', true)->get();
        return Inertia::render('Admin/NewsEvent/News&Event/Create', [
            'newsCategories' => $newsCategories,
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsEventRequest $request)
    {

        NewsEvent::create($request->validated());
        return to_route('admin.news-event.index')->with('success', 'News Event created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsEvent $newsEvent)
    {
        return Inertia::render('Admin/NewsEvent/News&Event/Show', [
            'newsEvent' => $newsEvent,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NewsEvent $newsEvent)
    {
        $categories = NewsEventEnum::getValuesWithLabels();
        return Inertia::render('Admin/NewsEvent/News&Event/Edit', [
            'newsEvent' => $newsEvent,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsEventRequest $request, NewsEvent $newsEvent)
    {
        $data = $request->validated();

        // Only replace image if new image uploaded
        if ($request->hasFile('image')) {
            $paths = [];

            foreach ($request->file('image') as $file) {
                $paths[] = asset('storage/' . $file->store('NewsEvent', 'public'));
            }

            $data['image'] = $paths;
        } else {
            // Keep old images if no new upload
            $data['image'] = $newsEvent->image;
        }
        $newsEvent->update($data);

        return to_route('admin.news-event.index')
            ->with('success', 'News Event updated successfully');
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsEvent $newsEvent)
    {
        deleteFiles($newsEvent->image);
        $newsEvent->delete();
        return to_route('admin.news-event.index')->with('success', 'News Event deleted successfully');
    }

    public function status(NewsEvent $newsEvent)
    {
        $newsEvent->update([
            'status' => !$newsEvent->status,
        ]);
        return to_route('admin.news-event.index')->with('success', 'News Event status updated successfully');
    }
}
