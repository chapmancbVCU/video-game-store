/**
 * @file Controller file for store location.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const StoreLocation = require("../models/storelocation");
const asyncHandler = require('express-async-handler')


/**
 * @property Display list of all storelocations.
 */
exports.storelocation_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: storelocation list");
});


/**
 * @property Display detail page for a specific storelocation.
 */
exports.storelocation_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: storelocation detail: ${req.params.id}`);
});


/**
 * @property Display storelocation create form on GET.
 */
exports.storelocation_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: storelocation create GET");
});


/**
 * @property Handle storelocation create on POST.
 */
exports.storelocation_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: storelocation create POST");
});


/**
 * @property Display storelocation delete form on GET.
 */
exports.storelocation_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: storelocation delete GET");
});


/**
 * @property Handle storelocation delete on POST.
 */
exports.storelocation_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: storelocation delete POST");
});


/**
 * @property Display storelocation update form on GET.
 */
exports.storelocation_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: storelocation update GET");
});


/**
 * @property Handle storelocation update on POST.
 */
exports.storelocation_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: storelocation update POST");
});
