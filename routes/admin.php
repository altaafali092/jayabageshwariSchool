<?php

use App\Http\Controllers\Admin\AcademicItemsController;
use App\Http\Controllers\Admin\AcademicLevelController;
use App\Http\Controllers\Admin\AcademicMediaController;
use App\Http\Controllers\Admin\AcademicSectionController;
use App\Http\Controllers\Admin\AdmissionProcessController;
use App\Http\Controllers\Admin\AdmissionQueryController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\NewsCategoryController;
use App\Http\Controllers\Admin\NewsEventController;
use App\Http\Controllers\Admin\OfficeSettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\StaffController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
    Route::resource('slider', SliderController::class);
    Route::get('sliders/{slider}/status', [sliderController::class, 'status'])->name('sliders.status');
    Route::resource('news-category', NewsCategoryController::class);
    Route::get('news-category/{newsCategory}/status', [NewsCategoryController::class, 'status'])->name('newsCategory.status');
    Route::resource('news-event', NewsEventController::class);
    Route::get('news-event/{newsEvent}/status', [NewsEventController::class, 'status'])->name('newsEvent.status');
    Route::resource('gallery', GalleryController::class);
    Route::get('gallery/{gallery}/status', [GalleryController::class, 'status'])->name('gallery.status');
    Route::resource('facility', App\Http\Controllers\Admin\FacilityController::class);
    Route::get('facility/{facility}/status', [App\Http\Controllers\Admin\FacilityController::class, 'status'])->name('facility.status');
    Route::resource('academic-level', AcademicLevelController::class);
    Route::get('academic-level/{academicLevel}/status', [AcademicLevelController::class, 'status'])->name('academicLevel.status');

    Route::resource('academic-section', AcademicSectionController::class);
    Route::get('academic-section/{academicSection}/status', [AcademicSectionController::class, 'status'])->name('academicSection.status');

    Route::resource('academic-item', AcademicItemsController::class);
    Route::get('academic-item/{academicItem}/status', [AcademicItemsController::class, 'status'])->name('academicItem.status');

    Route::resource('contact', ContactController::class)->only(['index', 'show', 'destroy']);

    Route::resource('admission-process', AdmissionProcessController::class);
    Route::get('admission-process/{admissionProcess}/status', [AdmissionProcessController::class, 'status'])->name('admissionProcess.status');
    Route::resource('admission-query', AdmissionQueryController::class)->only(['index', 'show', 'destroy']);
    Route::get('office-setting', [OfficeSettingController::class, 'create'])->name('office-setting.create');
    Route::post('office-setting', [OfficeSettingController::class, 'store'])->name('office-setting.store');
    Route::resource('staff', StaffController::class);
    Route::get('staff/{staff}/status', [StaffController::class, 'status'])->name('staff.status');
});
