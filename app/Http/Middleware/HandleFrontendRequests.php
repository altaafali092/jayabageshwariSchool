<?php

namespace App\Http\Middleware;

use App\Models\OfficeSetting;
use Closure;
use Illuminate\Http\Request;
use Inertia\Middleware;


class HandleFrontendRequests extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'officeSettings' => fn() => OfficeSetting::first(),
        ]);
    }
}
