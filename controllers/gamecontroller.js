/**
 * @file Controller file for game.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const Game = require("../models/game");
const Accessories = require("../models/accessories");
const GameConsole = require("../models/gameconsole");
const Genre = require("../models/genre");
const Platform = require("../models/platform");
const { body, validationResult } = require("express-validator");
const asyncHandler = require('express-async-handler')


/**
 * @property Home page
 */
exports.index = asyncHandler(async (req, res, next) => {
    // Get details of games, consoles, accesories, and genres.
    const [
        numGames,
        numAccessories,
        numGameConsoles,
        numGenres,
    ] = await Promise.all([
      Game.countDocuments({}).exec(),
      Accessories.countDocuments({}).exec(),
      GameConsole.countDocuments({}).exec(),
      Genre.countDocuments({}).exec(),
  ]);

  res.render("index", {
      title: "The Game Store",
      game_count: numGames,
      accessories_count: numAccessories,
      game_consoles_count: numGameConsoles,
      genre_count: numGenres,
  });
});


/**
 * @property Display list of all games.
 */
exports.game_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game list");
});


/**
 * @property Display detail page for a specific game.
 */
exports.game_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: game detail: ${req.params.id}`);
});


/**
 * @property Display game create form on GET.
 */
exports.game_create_get = asyncHandler(async (req, res, next) => {
    const [allPlatforms, allGenres] = await Promise.all([
        Platform.find().exec(),
        Genre.find().exec(),
    ]);

    res.render("game_form", {
        title: "Add New Game",
        platforms: allPlatforms,
        genres: allGenres,
    });
});


/**
 * @property Handle game create on POST.
 */
exports.game_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game create POST");
});


/**
 * @property Display game delete form on GET.
 */
exports.game_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game delete GET");
});


/**
 * @property Handle game delete on POST.
 */
exports.game_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game delete POST");
});


/**
 * @property Display game update form on GET.
 */
exports.game_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game update GET");
});


/**
 * @property Handle game update on POST.
 */
exports.game_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: game update POST");
});
