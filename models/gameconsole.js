/**
 * @file Schema for consoles.
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
 * Schema for a console.
 * @constructor GameConsole
 */
const GameConsoleSchema = new Schema({
    name: { type: String, required: true },
    manufacturer: {
        type: String,
        required: true,
        enum: ["Valve", "Sony", "Microsoft", "Nintendo", "Sega"],
        default: "Microsoft",
    },
    description: { type: String, required: true},
    imageFile: { type: String, required: true },
    condition: {
        type: String,
        required: true,
        enum: ["New", "Refurbished", "Used"],
        default: "New",
    },
    status: {
        type: String,
        required: true,
        enum: ["Available", "Sold Out", "Pre-Order"],
        default: "Available",
    },
    price: { type: Number, required: true },
    upc: { type: Number, required: true },
});


/**
 * Virtual for game console's URL.
 * @virtual url
 */
GameConsoleSchema.virtual("url").get(function() {
    return `/inventory/gameconsole/${this._id}`;
});


// Export model
module.exports = mongoose.model("Console", GameConsoleSchema);