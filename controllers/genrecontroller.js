/**
 * @file Controller file for genre.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const Genre = require("../models/genre");
const asyncHandler = require('express-async-handler')


/**
 * @property Display list of all Genre.
 */ 
exports.genre_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre list");
});


/**
 * @property Display detail page for a specific Genre.
 */
exports.genre_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
});


/**
 * @property Display Genre create form on GET.
 */
exports.genre_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
});


/**
 * @property Handle Genre create on POST.
 */
exports.genre_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
});


/**
 * @property Display Genre delete form on GET.
 */
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
});


/**
 * @property Handle Genre delete on POST.
 */
exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
});


/**
 * @property Display Genre update form on GET.
 */
exports.genre_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
});


/**
 * @property Handle Genre update on POST.
 */
exports.genre_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
});
