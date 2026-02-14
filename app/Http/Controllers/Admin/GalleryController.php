<?php

namespace App\Http\Controllers\Admin;

use App\Enums\GalleryEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Gallery\StoreGalleryRequest;
use App\Http\Requests\Gallery\UpdateGalleryRequest;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galleries = Gallery::latest();
        if (request()->has('type')) {
            $galleries->where('gallery_type', request('type'));
        }
        $galleries = $galleries->paginate(7);
        return Inertia::render('Admin/Gallery/Index', [
            'galleries' => $galleries
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = GalleryEnum::getValuesWithLabels();
        return Inertia::render('Admin/Gallery/Create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGalleryRequest $request)
    {
        Gallery::create($request->validated());
        return to_route('admin.gallery.index')
            ->with('success', 'Gallery created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        return Inertia::render('Admin/Gallery/Show', [
            'gallery' => $gallery
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        $categories = GalleryEnum::getValuesWithLabels();
        return Inertia::render('Admin/Gallery/Edit', [
            'gallery' => $gallery,
            'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGalleryRequest $request, Gallery $gallery)
    {

        $data = $request->validated();

        // Only replace image if new image uploaded
        if ($request->hasFile('images')) {
            $paths = [];

            foreach ($request->file('images') as $file) {
                $paths[] = asset('storage/' . $file->store('Gallery', 'public'));
            }

            $data['image'] = $paths;
        } else {
            // Keep old images if no new upload
            $data['image'] = $gallery->image;
        }
        $gallery->update($data);
        return to_route('admin.gallery.index')
            ->with('success', 'Gallery updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        deleteFiles($gallery->images);
        $gallery->delete();
        return back()
            ->with('success', 'Gallery deleted successfully');
    }

    public function status(Gallery $gallery)
    {
        $gallery->update([
            'status' => !$gallery->status
        ]);
        return back()
            ->with('success', 'Gallery status updated successfully');
    }
}
