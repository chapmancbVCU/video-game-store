/**
 * @file Schema for available genres.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const mongoose = require("mongoose");

const Schema = new mongoose.Schema;

/**
 * Schema for a particular genre
 * @constructor Genre
 */
const GenreSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 50 },
});


/**
 * Virtural for genre's URL.
 * @virtual url
 */
GenreSchema.virtual("url").get(function() {
    return `/inventory/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);