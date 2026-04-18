<?php
namespace Database\Migrations;
use Core\Lib\Database\Schema;
use Core\Lib\Database\Blueprint;
use Core\Lib\Database\Migration;

/**
 * Migration class for the brands table.
 */
class MDT20260418230223CreateBrandsTable extends Migration {
    /**
     * Performs a migration for a new table.
     *
     * @return void
     */
    public function up(): void {
        Schema::create('brands', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name', 125);
            $table->softDeletes();
            $table->index('name');
        });
    }

    /**
     * Undo a migration task.
     *
     * @return void
     */
    public function down(): void {
        Schema::dropIfExists('brands');
    }
}