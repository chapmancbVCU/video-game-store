<?php
namespace App\Controllers;
use Core\Controller;

/**
 * Undocumented class
 */
class StoreAdminController extends Controller {
    public function indexAction(): void {
        $this->view->renderJsx('storeAdmin.Index');
    }
    /**
     * Runs when the object is constructed.
     *
     * @return void
     */
    public function onConstruct(): void {
        $this->view->setLayout('store_admin');
    }
}