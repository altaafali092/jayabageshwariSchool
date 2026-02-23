<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    /**
     * Handle universal file uploads for editors.
     */
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|image|max:5120', // 5MB limit
        ]);

        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('editor', 'public');
            $url = Storage::disk('public')->url($path);

            return response()->json([
                'url' => $url,
            ]);
        }

        return response()->json(['error' => 'No file uploaded'], 400);
    }
}
