<?php

use App\Http\Controllers\FrontController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [FrontController::class, 'index'])->name('home');

Route::get('/contact', [FrontController::class, 'contact'])->name('contact');
Route::post('/contact', [FrontController::class, 'contactForm'])->name('contact.form');
Route::get('/admissions', [FrontController::class, 'admissions'])->name('admissions');
Route::post('/admissions', [FrontController::class, 'admissionForm'])->name('admissions.form');

// newseventPAge
Route::get('/news-events', [FrontController::class, 'NewsEventPage'])->name('newsEvents');
Route::get('/news/{news:slug}', [FrontController::class, 'newsShow'])->name('news.show');

Route::get('/notices', [FrontController::class, 'notices'])->name('notices');
Route::get('/notices/{slug}', [FrontController::class, 'noticeShow'])->name('notices.show');

// Route::get('/academics', [FrontController::class, 'academics'])->name('academics');
Route::get('/academics/{academicLevel:slug}', [FrontController::class, 'academics'])
    ->name('academicsShow');
Route::get('/facilities', [FrontController::class, 'facilities'])->name('facilities');
Route::get('/about/history', [FrontController::class, 'history'])->name('about.history');
Route::get('/about/mission-vision', [FrontController::class, 'missionVision'])->name('about.mission');
Route::get('/about/management', [FrontController::class, 'management'])->name('about.management');
Route::get('/about/why-choose-us', [FrontController::class, 'whyChooseUs'])->name('about.why-us');
Route::get('/staff', [FrontController::class, 'staff'])->name('staff');
Route::get('/staff/{staff}', [FrontController::class, 'staffShow'])->name('staff.show');
Route::get('/gallery', [FrontController::class, 'gallery'])->name('gallery');
Route::get('/gallery/{gallery:slug}', [FrontController::class, 'galleryShow'])->name('gallery.show');

require __DIR__ . '/settings.php';
