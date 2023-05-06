/**
 * @file Inventory route module.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const express = require("express");
const router = express.Router();


// Require controller modules.
const accessories_controller = require("../controllers/accessoriescontroller");
const consoleinstance_controller = require(
    "../controllers/consoleinstancecontroller");
const gameconsole_controller = require(
    "../controllers/gameconsolecontroller");
const game_controller = require("../controllers/gamecontroller");
const gameinstance_controller = require(
    "../controllers/gameinstancecontroller");
const genre_controller = require("../controllers/genrecontroller");
const platform_controller = require("../controllers/platformcontroller");
const storelocation_controller = require(
    "../controllers/storelocationcontroller");


/*-----------------------------------------------------------------------------
  GAME ROUTES
-----------------------------------------------------------------------------*/
// GET inventory homepage.
router.get("/", game_controller.index);

// GET request for creating a game. NOTE This must come before routes that display game (uses id).
router.get("/game/create", game_controller.game_create_get);

// POST request for creating game.
router.post("/game/create", game_controller.game_create_post);

// GET request to delete game.
router.get("/game/:id/delete", game_controller.game_delete_get);

// POST request to delete game.
router.post("/game/:id/delete", game_controller.game_delete_post);

// GET request to update game.
router.get("/game/:id/update", game_controller.game_update_get);

// POST request to update game.
router.post("/game/:id/update", game_controller.game_update_post);

// GET request for one game.
router.get("/game/:id", game_controller.game_detail);

// GET request for list of all game items.
router.get("/game", game_controller.game_list);


/*-----------------------------------------------------------------------------
  ACCESSORIES ROUTES
-----------------------------------------------------------------------------*/
// GET request for creating a accessories. NOTE This must come before routes that display accessories (uses id).
router.get("/accessories/create", accessories_controller.accessories_create_get);

// POST request for creating accessories.
router.post("/accessories/create", accessories_controller.accessories_create_post);

// GET request to delete accessories.
router.get("/accessories/:id/delete", accessories_controller.accessories_delete_get);

// POST request to delete accessories.
router.post("/accessories/:id/delete", accessories_controller.accessories_delete_post);

// GET request to update accessories.
router.get("/accessories/:id/update", accessories_controller.accessories_update_get);

// POST request to update accessories.
router.post("/accessories/:id/update", accessories_controller.accessories_update_post);

// GET request for one accessories.
router.get("/accessories/:id", accessories_controller.accessories_detail);

// GET request for list of all accessories items.
router.get("/accessories", accessories_controller.accessories_list);


/*-----------------------------------------------------------------------------
  CONSOLE INSTANCE ROUTES
-----------------------------------------------------------------------------*/
// GET request for creating a consoleinstance. NOTE This must come before routes that display consoleinstance (uses id).
router.get("/consoleinstance/create", consoleinstance_controller.consoleinstance_create_get);

// POST request for creating consoleinstance.
router.post("/consoleinstance/create", consoleinstance_controller.consoleinstance_create_post);

// GET request to delete consoleinstance.
router.get("/consoleinstance/:id/delete", consoleinstance_controller.consoleinstance_delete_get);

// POST request to delete consoleinstance.
router.post("/consoleinstance/:id/delete", consoleinstance_controller.consoleinstance_delete_post);

// GET request to update consoleinstance.
router.get("/consoleinstance/:id/update", consoleinstance_controller.consoleinstance_update_get);

// POST request to update consoleinstance.
router.post("/consoleinstance/:id/update", consoleinstance_controller.consoleinstance_update_post);

// GET request for one consoleinstance.
router.get("/consoleinstance/:id", consoleinstance_controller.consoleinstance_detail);

// GET request for list of all consoleinstance items.
router.get("/consoleinstance", consoleinstance_controller.consoleinstance_list);


/*-----------------------------------------------------------------------------
  GAME CONSOLE ROUTES
-----------------------------------------------------------------------------*/
// GET request for creating a gameconsole. NOTE This must come before routes that display gameconsole (uses id).
router.get("/gameconsole/create", gameconsole_controller.gameconsole_create_get);

// POST request for creating gameconsole.
router.post("/gameconsole/create", gameconsole_controller.gameconsole_create_post);

// GET request to delete gameconsole.
router.get("/gameconsole/:id/delete", gameconsole_controller.gameconsole_delete_get);

// POST request to delete gameconsole.
router.post("/gameconsole/:id/delete", gameconsole_controller.gameconsole_delete_post);

// GET request to update gameconsole.
router.get("/gameconsole/:id/update", gameconsole_controller.gameconsole_update_get);

// POST request to update gameconsole.
router.post("/gameconsole/:id/update", gameconsole_controller.gameconsole_update_post);

// GET request for one gameconsole.
router.get("/gameconsole/:id", gameconsole_controller.gameconsole_detail);

// GET request for list of all gameconsole items.
router.get("/gameconsole", gameconsole_controller.gameconsole_list);




/*-----------------------------------------------------------------------------
  GAME INSTANCE ROUTES
-----------------------------------------------------------------------------*/
// GET request for creating a gameinstance. NOTE This must come before routes that display gameinstance (uses id).
router.get("/gameinstance/create", gameinstance_controller.gameinstance_create_get);

// POST request for creating gameinstance.
router.post("/gameinstance/create", gameinstance_controller.gameinstance_create_post);

// GET request to delete gameinstance.
router.get("/gameinstance/:id/delete", gameinstance_controller.gameinstance_delete_get);

// POST request to delete gameinstance.
router.post("/gameinstance/:id/delete", gameinstance_controller.gameinstance_delete_post);

// GET request to update gameinstance.
router.get("/gameinstance/:id/update", gameinstance_controller.gameinstance_update_get);

// POST request to update gameinstance.
router.post("/gameinstance/:id/update", gameinstance_controller.gameinstance_update_post);

// GET request for one gameinstance.
router.get("/gameinstance/:id", gameinstance_controller.gameinstance_detail);

// GET request for list of all gameinstance items.
router.get("/gameinstance", gameinstance_controller.gameinstance_list);


/*-----------------------------------------------------------------------------
  GENRE ROUTES
-----------------------------------------------------------------------------*/
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

//POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genre", genre_controller.genre_list);


/*-----------------------------------------------------------------------------
  PLATFORM ROUTES
-----------------------------------------------------------------------------*/
// GET request for creating a platform. NOTE This must come before routes that display platform (uses id).
router.get("/platform/create", platform_controller.platform_create_get);

// POST request for creating platform.
router.post("/platform/create", platform_controller.platform_create_post);

// GET request to delete platform.
router.get("/platform/:id/delete", platform_controller.platform_delete_get);

// POST request to delete platform.
router.post("/platform/:id/delete", platform_controller.platform_delete_post);

// GET request to update platform.
router.get("/platform/:id/update", platform_controller.platform_update_get);

// POST request to update platform.
router.post("/platform/:id/update", platform_controller.platform_update_post);

// GET request for one platform.
router.get("/platform/:id", platform_controller.platform_detail);

// GET request for list of all platform items.
router.get("/platform", platform_controller.platform_list);


/*-----------------------------------------------------------------------------
  STORE LOCATION ROUTES
-----------------------------------------------------------------------------*/
// GET request for creating a storelocation. NOTE This must come before routes that display storelocation (uses id).
router.get("/storelocation/create", storelocation_controller.storelocation_create_get);

// POST request for creating storelocation.
router.post("/storelocation/create", storelocation_controller.storelocation_create_post);

// GET request to delete storelocation.
router.get("/storelocation/:id/delete", storelocation_controller.storelocation_delete_get);

// POST request to delete storelocation.
router.post("/storelocation/:id/delete", storelocation_controller.storelocation_delete_post);

// GET request to update storelocation.
router.get("/storelocation/:id/update", storelocation_controller.storelocation_update_get);

// POST request to update storelocation.
router.post("/storelocation/:id/update", storelocation_controller.storelocation_update_post);

// GET request for one storelocation.
router.get("/storelocation/:id", storelocation_controller.storelocation_detail);

// GET request for list of all storelocation items.
router.get("/storelocation", storelocation_controller.storelocation_list);


module.exports = router;