<?php

namespace App\Traits;

use Illuminate\Http\Request;

trait HandlesMediaUpload
{
    protected function storeMedia(Request $request, $model, string $directory)
    {
        $request->validate([
            'images'   => ['nullable', 'array'],
            'images.*' => ['image', 'max:5120'],
        ]);

        if (! $request->hasFile('images')) {
            return;
        }

        foreach ($request->file('images') as $image) {
            $path = $image->store($directory, 'public');

            $model->media()->create([
                'file_path' => $path,
            ]);
        }
    }
}
