<?php
namespace App\Models;
use Core\Model;

/**
 * Implements features of the ProductImages class.
 */
class ProductImages extends Model {

    // Fields you don't want saved on form submit
    // public const blackList = [];

    // Set to name of database table.
    protected static $_table = 'product_images';

    // Soft delete
    protected static $_softDelete = true;
    
    // List your allowed file types.
    protected static $allowedFileTypes = [];
    
    // Set your max file size.
    protected static $maxAllowedFileSize = 5242880;

    // Set your file path.  Include your bucket if necessary.
    protected static $_uploadPath = "";
    
    // Fields from your database
    public $created_at;
    public $deleted = 0;
    public $id;
    public $name;
    public $product_id;
    public $sort;
    public $updated_at;
    public $url;

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
     * Getter function for $allowedFileTypes array
     *
     * @return array $allowedFileTypes The array of allowed file types.
     */
    public static function getAllowedFileTypes(): array {
        return self::$allowedFileTypes;
    }

    /**
     * Getter function for $maxAllowedFileSize.
     *
     * @return int $maxAllowedFileSize The max file size for an individual 
     * file.
     */
    public static function getMaxAllowedFileSize(): int {
        return self::$maxAllowedFileSize;
    }

    /**
     * Performs upload
     *
     * @return void
     */
    public static function uploadFile(): void {
        // Implement your function
    }
}