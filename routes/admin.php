<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\NewsCategoryController;
use App\Http\Controllers\Admin\NewsEventController;
use App\Http\Controllers\Admin\SliderController;
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
});
