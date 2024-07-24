<?php

//use App\Http\Controllers\ActiviteController;
use App\Http\Controllers\ActualiteController;
use App\Http\Controllers\AlumniController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DeveloppementController;
use App\Http\Controllers\ElectroController;
//use App\Http\Controllers\ElementController;
use App\Http\Controllers\EquipementsController;
use App\Http\Controllers\EvenementController;
//use App\Http\Controllers\FormationController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RealisationsController;
use App\Http\Controllers\ReferentController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\BenevoleController; // Ajout du BenevoleController
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');
Route::get('/actualite', [ActualiteController::class, 'index'])->name('actualite');
Route::get('/alumni', [AlumniController::class, 'index'])->name('alumni');
Route::get('/equipements', [EquipementsController::class, 'index'])->name('equipements');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/realisations', [RealisationsController::class, 'index'])->name('realisations');
Route::get('/evenement', [EvenementController::class, 'index'])->name('evenement');
Route::get('/benevole', [BenevoleController::class, 'index'])->name('benevole'); // Correction de la route bénévole

Route::get('/page/benevole', [PageController::class, 'benevole'])->name('page.benevole');
Route::get('/page/contact', [PageController::class, 'contact'])->name('page.contact');

Route::get('/developpement', [DeveloppementController::class, 'index'])->name('developpement');
Route::get('/electro', [ElectroController::class, 'index'])->name('electro');
Route::get('/referent', [ReferentController::class, 'index'])->name('referent');

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