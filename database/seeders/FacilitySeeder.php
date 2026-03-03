<?php

namespace Database\Seeders;

use App\Enums\FacilityEnum;
use App\Models\Facility;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class FacilitySeeder extends Seeder
{
    public function run(): void
    {
        // ─── 1. OVERVIEW MAIN ─────────────────────────────────────────────────
        $overviewMain = [
            [
                'title'       => 'Smart Classrooms',
                'description' => 'Digitally equipped spaces with interactive whiteboards and high-speed internet to enhance the learning experience.',
                'icon'        => 'Laptop',
                // image: upload via admin panel or set a URL in image field
                'meta_data'   => null,
                'position'    => 1,
            ],
            [
                'title'       => 'Advanced Laboratories',
                'description' => 'Dedicated labs for Physics, Chemistry, Biology, and IT, providing hands-on practical knowledge of complex concepts.',
                'icon'        => 'Shield',
                'meta_data'   => null,
                'position'    => 2,
            ],
            [
                'title'       => 'Multimedia Center',
                'description' => 'A creative hub for digital arts, video editing, and modern communication studies.',
                'icon'        => 'Music',
                'meta_data'   => null,
                'position'    => 3,
            ],
        ];

        foreach ($overviewMain as $item) {
            Facility::create(array_merge($item, [
                'slug'     => Str::slug($item['title']),
                'category' => FacilityEnum::OVERVIEW_MAIN->value,
                'status'   => true,
            ]));
        }

        // ─── 2. OVERVIEW LIFESTYLE ────────────────────────────────────────────
        // The `category` field of the lifestyle item is stored in meta_data->category
        $lifestyles = [
            ['title' => 'Sports Academy', 'icon' => 'Dribbble', 'meta_data' => ['category' => 'Athletics'], 'position' => 1],
            ['title' => 'Arts & Culture', 'icon' => 'Users',    'meta_data' => ['category' => 'Creative'],  'position' => 2],
            ['title' => 'Music Studio',   'icon' => 'Music',    'meta_data' => ['category' => 'Performative'], 'position' => 3],
            ['title' => 'Cafeteria',      'icon' => 'Coffee',   'meta_data' => ['category' => 'Nutrition'], 'position' => 4],
            ['title' => 'Transport',      'icon' => 'Bus',      'meta_data' => ['category' => 'Services'],  'position' => 5],
            ['title' => 'Medical Room',   'icon' => 'Activity', 'meta_data' => ['category' => 'Health'],    'position' => 6],
        ];

        foreach ($lifestyles as $item) {
            Facility::create(array_merge($item, [
                'slug'        => Str::slug($item['title'] . '-lifestyle'),
                'category'    => FacilityEnum::OVERVIEW_LIFESTYLE->value,
                'description' => null,
                'status'      => true,
            ]));
        }

        // ─── 3. HOSTEL FEATURES ───────────────────────────────────────────────
        $hostelFeatures = [
            ['title' => 'Comfortable Rooms', 'description' => 'Spacious, well-ventilated, and hygienic living quarters.',                    'icon' => 'Home',     'position' => 1],
            ['title' => 'Nutritious Meals',  'description' => 'Balanced and delicious vegetarian meals prepared in a modern kitchen.',       'icon' => 'Utensils', 'position' => 2],
            ['title' => '24/7 Supervision',  'description' => 'Dedicated wardens and security personnel to ensure safety.',                 'icon' => 'Shield',   'position' => 3],
            ['title' => 'Study Halls',       'description' => 'Quiet zones designed for group studies and individual focus.',              'icon' => 'Laptop',   'position' => 4],
        ];

        foreach ($hostelFeatures as $item) {
            Facility::create(array_merge($item, [
                'slug'     => Str::slug($item['title'] . '-hostel'),
                'category' => FacilityEnum::HOSTEL_FEATURE->value,
                'status'   => true,
                // meta_data->capacity on any item to show badge (e.g. first item)
                'meta_data' => $item['position'] === 1 ? ['capacity' => '200+'] : null,
            ]));
        }

        // ─── 4. TRANSPORT FEATURES (bullet points) ────────────────────────────
        $transportBullets = [
            'GPS Real-time tracking for parents',
            'Experienced and background-checked drivers',
            'Trained attendants on every bus',
            'Strict maintenance schedules',
            'First-aid kits and emergency protocols',
        ];

        foreach ($transportBullets as $i => $bullet) {
            Facility::create([
                'title'       => $bullet,
                'slug'        => Str::slug($bullet),
                'category'    => FacilityEnum::TRANSPORT_FEATURE->value,
                'description' => null,
                'icon'        => 'Plus',
                'meta_data'   => null,
                'position'    => $i + 1,
                'status'      => true,
            ]);
        }

        // ─── 5. TRANSPORT STATS ───────────────────────────────────────────────
        Facility::create([
            'title'       => '35+ Routes',
            'slug'        => 'transport-routes',
            'category'    => FacilityEnum::TRANSPORT_STATS->value,
            'description' => 'Covering Entire City',
            'icon'        => 'MapPin',
            'meta_data'   => ['key' => 'routes'],
            'position'    => 1,
            'status'      => true,
        ]);

        // ─── 6. SPORTS ITEMS ──────────────────────────────────────────────────
        // meta_data->sub_category holds the subtitle shown under the sports card title
        $sportsItems = [
            ['title' => 'Football Ground',  'icon' => 'Dribbble', 'meta_data' => ['sub_category' => 'Full Size AstroTurf'],       'position' => 1],
            ['title' => 'Basketball Court', 'icon' => 'Trophy',   'meta_data' => ['sub_category' => 'Indoor Multi-Purpose'],     'position' => 2],
            ['title' => 'Swimming Pool',    'icon' => 'Waves',    'meta_data' => ['sub_category' => 'Temperature Controlled'],   'position' => 3],
            ['title' => 'Fitness Center',   'icon' => 'Dumbbell', 'meta_data' => ['sub_category' => 'High Performance Lab'],    'position' => 4],
        ];

        foreach ($sportsItems as $item) {
            Facility::create(array_merge($item, [
                'slug'        => Str::slug($item['title'] . '-sports'),
                'category'    => FacilityEnum::SPORTS_ITEM->value,
                'description' => null,
                'status'      => true,
                // image: upload via admin panel or set a URL manually
            ]));
        }

        // ─── 7. LIBRARY STATS ─────────────────────────────────────────────────
        // title = the big number, description = the label below it
        $libraryStats = [
            [
                'title'       => '25K+',
                'description' => 'Physical & Digital Books',
                'meta_data'   => ['key' => 'books'],
                'position'    => 1,
            ],
            [
                'title'       => '50+',
                'description' => 'National & Int. Journals',
                'meta_data'   => ['key' => 'journals'],
                'position'    => 2,
            ],
        ];

        foreach ($libraryStats as $item) {
            Facility::create(array_merge($item, [
                'slug'     => Str::slug('library-stat-' . $item['title']),
                'category' => FacilityEnum::LIBRARY_STATS->value,
                'icon'     => 'BookOpen',
                'status'   => true,
            ]));
        }

        // ─── 8. LIBRARY IMAGES ────────────────────────────────────────────────
        // Upload 4 images via the admin panel. Titles are alt text placeholders.
        $libraryImages = [
            ['title' => 'Library Reading Hall',   'position' => 1],
            ['title' => 'Library Digital Section', 'position' => 2],
            ['title' => 'Library Study Lounge',    'position' => 3],
            ['title' => 'Library Book Stacks',     'position' => 4],
        ];

        foreach ($libraryImages as $item) {
            Facility::create(array_merge($item, [
                'slug'        => Str::slug($item['title']),
                'category'    => FacilityEnum::LIBRARY_IMAGES->value,
                'description' => null,
                'icon'        => null,
                'meta_data'   => null,
                'status'      => true,
            ]));
        }
    }
}
