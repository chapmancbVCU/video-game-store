<?php
namespace Database\Migrations;
use Core\Lib\Database\Schema;
use Core\Lib\Database\Blueprint;
use Core\Lib\Database\Migration;

/**
 * Migration class for the store table.
 */
class MDT20260418011803CreateStoreTable extends Migration {
    /**
     * Performs a migration for a new table.
     *
     * @return void
     */
    public function up(): void {
        Schema::create('store', function (Blueprint $table) {
            $table->id();
            $table->string('address', 255);
            $table->string('state', 50);
            $table->string('city', 155);
            $table->string('zip', 10);
        });
    }

    /**
     * Undo a migration task.
     *
     * @return void
     */
    public function down(): void {
        Schema::dropIfExists('store');
    }
}