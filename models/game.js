/**
 * @file Schema for available games.
 * @author Chad Chapman
 */

/*-----------------------------------------------------------------------------
  IMPORTS
-----------------------------------------------------------------------------*/
const mongoose = require("mongoose");


/**
 * Schema constant.
 * @type Schema
 */
const Schema = mongoose.Schema;


/**
 * Schema for game.
 * @constructor Game
 */
const GameSchema = new Schema({
    title: { type: String, required: true },
    platform: [{ type: Schema.Types.ObjectID, ref: "platform" }],
    description: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectID, ref: "Genre" }],
    imageFile: { type: String, required: true },
    rating: {
        type: String,
        required: true,
        enum: ["E", "E10", "T", "M", "A", "RP", "RP17"],
        default: "RP",
    },
    publisher: { type: String, required: true},
    condition: {
        type: String,
        required: true,
        enum: ["New", "Used"],
        default: "New",
    },
    status: {
        type: String,
        required: true,
        enum: ["Available", "Sold Out", "Pre-Order"]
    },
    releaseDate: { type: Date },
    price: { type: Number, required: true },
    upc: { type: Number, required: true },
});


/**
 * Virtual for game's URL.
 * @virtual url
 */
GameSchema.virtual("url").get(function() {
    return `/inventory/game/${this._id}`;
});


// Export model
module.exports = mongoose.model("Game", GameSchema);