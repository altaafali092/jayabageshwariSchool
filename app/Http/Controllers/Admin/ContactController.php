<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::latest()->paginate(7);
        return Inertia::render('Admin/Contact/Index', [
            'contacts' => $contacts
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        return Inertia::render('Admin/Contact/Show', [
            'contact' => $contact
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();
        return back()->with('success', 'Contact deleted successfully');
    }
}
