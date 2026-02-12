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
        Schema::create('notices', function (Blueprint $notice) {
            $notice->id();
            $notice->string('title');
            $notice->string('subtitle')->nullable();
            $notice->text('content');
            $notice->string('image')->nullable();
            $notice->date('notice_date');
            $notice->enum('urgency', ['Low', 'Medium', 'High'])->default('Medium');
            $notice->string('cta_text')->default('Read More');
            $notice->string('cta_link')->nullable();
            $notice->boolean('is_active')->default(true);
            $notice->boolean('show_as_popup')->default(false);
            $notice->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notices');
    }
};
