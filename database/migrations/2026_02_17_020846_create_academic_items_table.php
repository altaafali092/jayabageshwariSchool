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
        Schema::create('academic_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('academic_section_id')->constrained()->cascadeOnDelete();

            $table->string('title')->nullable();
            $table->text('description')->nullable();

            // For icons like Heart, Trophy, Microscope
            $table->string('icon')->nullable();

            // Timeline / extra fields
            $table->string('meta_key')->nullable(); // time, subject, field
            $table->string('meta_value')->nullable(); // "Morning Assembly"

            $table->integer('sort_order')->default(0);
            $table->boolean('status')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('academic_items');
    }
};
