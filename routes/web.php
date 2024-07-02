<?php

use App\Http\Controllers\ActualiteController;
use App\Http\Controllers\Admin\ActiviteController;
use App\Http\Controllers\Admin\ElementController;
use App\Http\Controllers\CommunauteController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EquipementsController;
use App\Http\Controllers\EvenementController;
use App\Http\Controllers\FormationController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RealisationsController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;







Route::get('/', [WelcomeController::class, 'index'])->name('welcome');
Route::get('/actualite', [ActualiteController::class, 'index'])->name('actualite');
Route::get('/communaute', [CommunauteController::class, 'index'])->name('communaute');
Route::get('/equipements', [EquipementsController::class, 'index'])->name('equipements');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/realisations', [RealisationsController::class, 'index'])->name('realisations');
Route::get('/evenement', [EvenementController::class, 'index'])->name('evenement');


Route::get('/page/communaute', [PageController::class, 'communaute'])->name('page.communaute');
Route::get('/page/evenement', [PageController::class, 'evenement'])->name('page.evenement');
Route::get('/page/contact', [PageController::class, 'contact'])->name('page.contact');


Route::get('/formation', [FormationController::class, 'index'])->name('formation');
Route::get('/element', [ElementController::class, 'index'])->name('element');
Route::get('/activite', [ActiviteController::class, 'index'])->name('activite');


// Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Auth routes
require __DIR__.'/auth.php';