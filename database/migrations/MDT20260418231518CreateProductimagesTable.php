<?php
namespace Database\Migrations;
use Core\Lib\Database\Schema;
use Core\Lib\Database\Blueprint;
use Core\Lib\Database\Migration;

/**
 * Migration class for the productimages table.
 */
class MDT20260418231518CreateProductimagesTable extends Migration {
    /**
     * Performs a migration for a new table.
     *
     * @return void
     */
    public function up(): void {
        Schema::create('product_images', function (Blueprint $table) {
            $table->id();
            $table->string('url', 255);
            $table->integer('sort')->nullable();
            $table->integer('product_id');
            $table->string('name', 255);
            $table->timestamps();
            $table->softDeletes();
            $table->index('product_id');
        });
    }

    /**
     * Undo a migration task.
     *
     * @return void
     */
    public function down(): void {
        Schema::dropIfExists('product_images');
    }
}