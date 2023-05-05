/**
 * @file Controller file for game platform.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const Platform = require("../models/platform");
const asyncHandler = require('express-async-handler')


/**
 * @property Display list of all platforms.
 */
exports.platform_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: platform list");
});


/**
 * @property Display detail page for a specific platform.
 */
exports.platform_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: platform detail: ${req.params.id}`);
});


/**
 * @property Display platform create form on GET.
 */
exports.platform_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: platform create GET");
});


/**
 * @property Handle platform create on POST.
 */
exports.platform_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: platform create POST");
});


/**
 * @property Display platform delete form on GET.
 */
exports.platform_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: platform delete GET");
});


/**
 * @property Handle platform delete on POST.
 */
exports.platform_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: platform delete POST");
});


/**
 * @property Display platform update form on GET.
 */
exports.platform_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: platform update GET");
});


/**
 * @property Handle platform update on POST.
 */
exports.platform_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: platform update POST");
});
