/**
 * @file Controller file for accessories.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const Accessories = require("../models/accessories");
const asyncHandler = require('express-async-handler')


/**
 * @property Display list of all accessories.
 */ 
exports.accessories_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: accessories list");
});


/**
 * @property Display detail page for a specific accessories.
 */
exports.accessories_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: accessories detail: ${req.params.id}`);
});


/**
 * @property Display accessories create form on GET.
 */
exports.accessories_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: accessories create GET");
});


/**
 * @property Handle accessories create on POST.
 */
exports.accessories_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: accessories create POST");
});


/**
 * @property Display accessories delete form on GET.
 */
exports.accessories_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: accessories delete GET");
});


/**
 * @property Handle accessories delete on POST.
 */
exports.accessories_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: accessories delete POST");
});


/**
 * @property Display accessories update form on GET.
 */
exports.accessories_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: accessories update GET");
});


/**
 * @property Handle accessories update on POST.
 */
exports.accessories_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: accessories update POST");
});
