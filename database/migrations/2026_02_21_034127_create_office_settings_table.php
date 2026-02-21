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
        Schema::create('office_settings', function (Blueprint $table) {
            $table->id();
            $table->string('office_name');
            $table->text('office_description')->nullable();
            $table->string('office_logo')->nullable();
            $table->string('office_address');
            $table->string('office_email')->nullable();
            $table->string('office_phone')->nullable();
            $table->string('office_phone_2')->nullable();
            $table->string('gmap_url')->nullable();
            $table->string('yt_url')->nullable();
            $table->string('fb_url')->nullable();
            $table->string('insta_url')->nullable();
            $table->string('titok_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('office_settings');
    }
};
