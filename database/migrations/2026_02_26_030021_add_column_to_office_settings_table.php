<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('office_settings', function (Blueprint $table) {
            $table->foreignId('key_contact_person_id')->nullable()->constrained('staff')->cascadeOnDelete();
            $table->foreignId('key_contact_secperson_id')->nullable()->constrained('staff')->cascadeOnDelete();
            $table->boolean('is_open')->default(false);
            $table->boolean('is_admission')->default(false);
        });
    }

    public function down(): void
    {
        Schema::table('office_settings', function (Blueprint $table) {
            $table->dropForeign(['key_contact_person_id']);
            $table->dropColumn([
                'key_contact_person_id',
                'is_open',
                'is_admission'
            ]);
        });
    }
};
