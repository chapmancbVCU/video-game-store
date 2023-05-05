/**
 * @file Controller file for acessories.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const Acessories = require("../models/acessories");
const asyncHandler = require('express-async-handler')


/**
 * @property Display list of all acessories.
 */ 
exports.acessories_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: acessories list");
});


/**
 * @property Display detail page for a specific acessories.
 */
exports.acessories_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: acessories detail: ${req.params.id}`);
});


/**
 * @property Display acessories create form on GET.
 */
exports.acessories_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: acessories create GET");
});


/**
 * @property Handle acessories create on POST.
 */
exports.acessories_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: acessories create POST");
});


/**
 * @property Display acessories delete form on GET.
 */
exports.acessories_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: acessories delete GET");
});


/**
 * @property Handle acessories delete on POST.
 */
exports.acessories_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: acessories delete POST");
});


/**
 * @property Display acessories update form on GET.
 */
exports.acessories_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: acessories update GET");
});


/**
 * @property Handle acessories update on POST.
 */
exports.acessories_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: acessories update POST");
});
