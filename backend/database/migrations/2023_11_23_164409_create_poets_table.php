<?php

use App\Models\Poet;
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
        Schema::create('poets', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->smallInteger('birth_year');
            $table->timestamps();
        });

        Poet::create([
            'name' => 'József Attila',
            'birth_year' => 1905,
        ]);

        Poet::create([
            'name' => 'Ady Endre',
            'birth_year' => 1877,
        ]);

        Poet::create([
            'name' => 'Petőfi Sándor',
            'birth_year' => 1823,
        ]);

        Poet::create([
            'name' => 'Arany János',
            'birth_year' => 1817,
        ]);

        Poet::create([
            'name' => 'Babits Mihály',
            'birth_year' => 1883,
        ]);

        Poet::create([
            'name' => 'Nemes Nagy Ágnes',
            'birth_year' => 1922,
        ]);

        Poet::create([
            'name' => 'Radnóti Miklós',
            'birth_year' => 1909,
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('poets');
    }
};
