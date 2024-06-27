<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Logic for index if needed
    }

    public function communaute()
    {
        return Inertia::render('Communaute', [
            'page' => 'communaute'
        ]);
    }

 

    public function realisations()
    {
        return Inertia::render('Evenement', [
            'page' => 'evenement'
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact', [
            'page' => 'contact'
        ]);
    }

    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}