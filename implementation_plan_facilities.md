# Backend Implementation Plan to Make Facilities Page Dynamic

This plan outlines the steps to convert the static `Facilities.tsx` page into a dynamic, database-driven module.

## 1. Database Schema & Models

We need a flexible `Facility` model to store different types of facility items (Overview highlights, Sports items, Hostel features, etc.).

### Migration: `create_facilities_table`
```php
Schema::create('facilities', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->string('slug')->unique();
    $table->string('category'); // Enum: overview, hostel, transportation, sports, library, lifestyle
    $table->text('description')->nullable();
    $table->string('image')->nullable(); // For facility photos
    $table->string('icon')->nullable(); // For icon identifier (optional)
    $table->json('meta_data')->nullable(); // To store extra fields like 'size' for sports, 'capacity' etc.
    $table->integer('order')->default(0); // For custom sorting
    $table->boolean('status')->default(true);
    $table->timestamps();
    $table->softDeletes();
});
```

### Model: `Facility.php`
- **Fillable**: `title`, `slug`, `category`, `description`, `image`, `icon`, `meta_data`, `order`, `status`
- **Casts**: `meta_data` => `array`
- **Enum Integration**: Use a `FacilityCategoryEnum` for type safety.

## 2. Admin Backend (CRUD)

We need a backend interface to manage these items.

### Enum: `FacilityCategoryEnum`
Values:
- `OVERVIEW_MAIN` (Smart Classrooms, etc.)
- `OVERVIEW_LIFESTYLE` (Sports Academy, Arts, etc.)
- `HOSTEL_FEATURE` (Comfortable Rooms, Meals, etc.)
- `TRANSPORT_FEATURE` (GPS, Experienced drivers...)
- `SPORTS_ITEM` (Football Ground, Basketball Court...)
- `LIBRARY_STAT` (Optional, or just manage images)

### Controller: `Admin/FacilityController`
- Standard `index`, `create`, `store`, `edit`, `update`, `destroy`.
- **Image Handling**: Use the existing `FileTrait` or `Helper` for uploads.
- **Conditional Fields**: In the `Create/Edit` form, show different inputs based on `category`.
    - If `Sports`: Show "Size" input.
    - If `Overview`: Show "Description" text area.

### Routes
- Resource routes in `admin.php`.

## 3. Frontend Data Fetching

### Controller: `Frontend/FacilityController` (or Page Controller)
Instead of returning a static view, fetch data grouped by category:

```php
public function index() {
    $facilities = Facility::where('status', true)->orderBy('order')->get()->groupBy('category');
    
    return Inertia::render('Frontend/Facilities', [
        'overview_main' => $facilities->get('overview_main', []),
        'overview_lifestyle' => $facilities->get('overview_lifestyle', []),
        'hostel_features' => $facilities->get('hostel_feature', []),
        'sports_items' => $facilities->get('sports_item', []),
        'transport_features' => $facilities->get('transport_feature', []),
        // ... pass other groups
    ]);
}
```

## 4. Frontend Types and Component Update

### Types: `types/frontend/Facility.ts`
Define interfaces matching the database structure.

### Update `Facilities.tsx`
Replace static arrays with props.

**Example Transformation:**

*Before:*
```tsx
const mainFacilities = [ { title: "Smart Classrooms", ... } ];
```

*After:*
```tsx
const Facilities = ({ overview_main, sports_items, ...props }) => {
    // ... use overview_main.map(...)
}
```

## 5. Execution Steps

1.  **Generate Migration & Model**: `php artisan make:model Facility -m`
2.  **Create Enum**: `app/Enums/FacilityCategoryEnum.php`
3.  **Create Request Validation**: `StoreFacilityRequest`, `UpdateFacilityRequest`
4.  **Create Admin Controller**: `Admin/FacilityController`
5.  **Setup Admin Routes**: `routes/admin.php`
6.  **Build Admin UI**: `resources/js/pages/Admin/Facility/Index.tsx`, `Create.tsx`, `Edit.tsx`.
7.  **Refactor Frontend**: Update the public route controller and the React component.

## 6. Questions for You
- Do you want to manage the **Section Titles** (e.g., "WORLD CLASS INFRASTRUCTURE") dynamically too? (This would require a separate `PageSettings` model or table).
- Should we use a specific icon set library for the admin to select icons, or just upload SVG/Images? (Uploading images is safer for non-dev admins).
