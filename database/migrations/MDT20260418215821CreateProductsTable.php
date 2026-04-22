<?php
namespace Database\Migrations;
use Core\Lib\Database\Schema;
use Core\Lib\Database\Blueprint;
use Core\Lib\Database\Migration;

/**
 * Migration class for the products table.
 */
class MDT20260418215821CreateProductsTable extends Migration {
    /**
     * Performs a migration for a new table.
     *
     * @return void
     */
    public function up(): void {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name', 155);
            $table->decimal('price', 10, 2);
            $table->decimal('list', 10, 2);
            $table->decimal('shipping', 10, 2);
            $table->tinyInteger('featured', 1)->nullable();
            $table->text('description');
            $table->softDeletes();
            $table->index('featured');
            $table->integer('brand_id');
            $table->index('brand_id');
            $table->integer('type_id');
            $table->index('type_id');
        });
    }

    /**
     * Undo a migration task.
     *
     * @return void
     */
    public function down(): void {
        Schema::dropIfExists('products');
    }
}