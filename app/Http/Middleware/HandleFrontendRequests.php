<?php

namespace App\Http\Middleware;

use App\Models\MenuSetting;
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

            'officeSettings' => fn() => OfficeSetting::with('keyContactPerson', 'keyContactSecPerson')->first(),
            'menuSettings' => MenuSetting::where('is_active', 1)
                ->whereNull('menu_id')
                ->with(['children' => fn($query) => $query->where('is_active', 1)])
                ->orderBy('position')
                ->get(),
        ]);
    }
}
