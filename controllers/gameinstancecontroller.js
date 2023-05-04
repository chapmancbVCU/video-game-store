/**
 * @file Controller file for game instance.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const GameInstance = require("../models/gameinstance");
const asyncHandler = require('express-async-handler')


/**
 * @property Display list of all gameinstances.
 */
exports.gameinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameinstance list");
});


/**
 * @property Display detail page for a specific gameinstance.
 */
exports.gameinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: gameinstance detail: ${req.params.id}`);
});


/**
 * @property Display gameinstance create form on GET.
 */
exports.gameinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameinstance create GET");
});


/**
 * @property Handle gameinstance create on POST.
 */
exports.gameinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameinstance create POST");
});


/**
 * @property Display gameinstance delete form on GET.
 */
exports.gameinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameinstance delete GET");
});


/**
 * @property Handle gameinstance delete on POST.
 */
exports.gameinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameinstance delete POST");
});


/**
 * @property Display gameinstance update form on GET.
 */
exports.gameinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameinstance update GET");
});


/**
 * @property Handle gameinstance update on POST.
 */
exports.gameinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameinstance update POST");
});
