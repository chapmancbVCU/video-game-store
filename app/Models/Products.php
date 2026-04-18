<?php
namespace App\Models;
use Core\Model;

/**
 * Implements features of the Products class.
 */
class Products extends Model {

    // Fields you don't want saved on form submit
    // public const blackList = [];

    // Set to name of database table.
    protected static $_table = 'products';

    // Soft delete
    protected static $_softDelete = true;
    
    // Fields from your database
    public $brand_id;
    public $created_at;
    public $deleted;
    public $description;
    public $featured;
    public $id;
    public $list;
    public $name;
    public $price;
    public $shipping;
    public $updated_at;

    public function afterDelete(): void {
        // Implement your function
    }

    public function afterSave(): void {
        // Implement your function
    }

    public function beforeDelete(): void {
        // Implement your function
    }

    public function beforeSave(): void {
        // Implement your function
    }

    /**
     * Performs validation for the Products model.
     *
     * @return void
     */
    public function validator(): void {
        // Implement your function
    }
}