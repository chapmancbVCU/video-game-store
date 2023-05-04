const GameConsole = require("../models/gameconsole");
const asyncHandler = require('express-async-handler')

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});

// Display list of all gameconsoles.
exports.gameconsole_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameconsole list");
});

// Display detail page for a specific gameconsole.
exports.gameconsole_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: gameconsole detail: ${req.params.id}`);
});

// Display gameconsole create form on GET.
exports.gameconsole_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameconsole create GET");
});

// Handle gameconsole create on POST.
exports.gameconsole_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameconsole create POST");
});

// Display gameconsole delete form on GET.
exports.gameconsole_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameconsole delete GET");
});

// Handle gameconsole delete on POST.
exports.gameconsole_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameconsole delete POST");
});

// Display gameconsole update form on GET.
exports.gameconsole_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameconsole update GET");
});

// Handle gameconsole update on POST.
exports.gameconsole_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: gameconsole update POST");
});
