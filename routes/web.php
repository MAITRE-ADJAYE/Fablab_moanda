<?php

use App\Http\Controllers\ActualiteController;
use App\Http\Controllers\CommunauteController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EquipementsController;
use App\Http\Controllers\FormationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;










Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
       
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

//Route::get('/', [ImageController::class, 'index'])->name('index');

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');
Route::get('/formation', [FormationController::class, 'index'])->name('formation');
Route::get('/actualite', [ActualiteController::class, 'index'])->name('actualite');
Route::get('/communaute', [CommunauteController::class, 'index'])->name('communaute');
Route::get('/equipements', [EquipementsController::class, 'index'])->name('equipements');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');