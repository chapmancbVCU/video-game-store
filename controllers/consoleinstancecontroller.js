/**
 * @file Controller file for console instance.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const ConsoleInstance = require("../models/consoleinstance");
const asyncHandler = require('express-async-handler')


/**
 * @property Display list of all game console instances.
 */
exports.consoleinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: consoleinstance list");
});


/**
 * @property Display detail page for a specific consoleinstance.
 */
exports.consoleinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: consoleinstance detail: ${req.params.id}`);
});


/**
 * @property Display consoleinstance create form on GET.
 */
exports.consoleinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: consoleinstance create GET");
});


/**
 * @property Handle consoleinstance create on POST.
 */
exports.consoleinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: consoleinstance create POST");
});


/**
 * @property Display consoleinstance delete form on GET.
 */
exports.consoleinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: consoleinstance delete GET");
});


/**
 * @property Handle consoleinstance delete on POST.
 */
exports.consoleinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: consoleinstance delete POST");
});


/**
 * @property Display consoleinstance update form on GET.
 */
exports.consoleinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: consoleinstance update GET");
});


/**
 * @property Handle consoleinstance update on POST.
 */
exports.consoleinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: consoleinstance update POST");
});
