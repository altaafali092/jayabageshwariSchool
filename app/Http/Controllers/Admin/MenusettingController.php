<?php

namespace App\Http\Controllers\Admin;

use App\Enums\MenuTypeEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\MenuSetting\StoreMenuSettingRequest;
use App\Http\Requests\MenuSetting\UpdateMenuSettingRequest;
use App\Models\AcademicLevel;
use App\Models\FacilityCategory;
use App\Models\MenuSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenusettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menuSettings = MenuSetting::with('menuable', 'parent')->paginate(9);
        return Inertia::render('Admin/MenuSetting/Index', [
            'menuSettings' => $menuSettings,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $academics = AcademicLevel::where('status', 1)->latest()->get();
        $facilities = FacilityCategory::where('status', 1)->latest()->get();
        $menuSettings = MenuSetting::latest()->get();
        return Inertia::render('Admin/MenuSetting/Create', [
            'academics' => $academics,
            'facilities' => $facilities,
            'menuSettings' => $menuSettings,
            'menuTypes' => MenuTypeEnum::labels(),
            'staticPages' => config('MenuFile.static_pages'),
            'staticPageSlugs' => config('StaticPageSlug.static_page_slugs')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMenuSettingRequest $request)
    {

        MenuSetting::create($request->validated());
        return redirect()->route('admin.menu-setting.index')
            ->with('success', 'Menu Setting created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MenuSetting $menuSetting)
    {
        $academics = AcademicLevel::where('status', 1)->latest()->get();
        $facilities = FacilityCategory::where('status', 1)->latest()->get();
        $menuSettings = MenuSetting::latest()->get();

        return Inertia::render('Admin/MenuSetting/Edit', [
            'menuSetting' => $menuSetting,
            'academics' => $academics,
            'facilities' => $facilities,
            'menuSettings' => $menuSettings,
            'menuTypes' => MenuTypeEnum::labels(),
            'staticPages' => config('MenuFile.static_pages'),
            'staticPageSlugs' => config('StaticePageSlug.static_page_slugs'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMenuSettingRequest $request, MenuSetting $menuSetting)
    {
        $menuSetting->update($request->validated());
        return redirect()->route('admin.menu-setting.index')
            ->with('success', 'Menu Setting updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuSetting $menuSetting)
    {
        $menuSetting->delete();
        return back()->with('success', 'Menu Setting deleted successfully.');
    }
    public function status(MenuSetting $menuSetting)
    {

        $menuSetting->update([
            'is_active' => !$menuSetting->is_active
        ]);
        return back()->with('menu Status updated Sucessfully', 'success');
    }


    public function getMenuUrl(Request $request)
    {
        $menuType = $request->menu_type;
        $menuableId = $request->menuable_id;

        if ($menuType === 'static') {
            $staticPages = config('MenuFile.static_pages');
            $staticPageSlugs = config('StaticePageSlug.static_page_slugs');

            if (isset($staticPages[$menuableId])) {
                $slug = $staticPageSlugs[$menuableId] ?? $menuableId;
                return response()->json([
                    'menu_url' => '/' . $slug
                ]);
            }
        } elseif ($menuType === 'academic') {
            $academic = AcademicLevel::find($menuableId);
            if ($academic) {
                return response()->json([
                    'menu_url' => route('academic.show', $academic->slug)
                ]);
            }
        } elseif ($menuType === 'custom') {
            return response()->json([
                'menu_url' => ''
            ]);
        }

        return response()->json([
            'menu_url' => ''
        ], 404);
    }
}
