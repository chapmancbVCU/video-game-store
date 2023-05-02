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
 * Schema for a concole.
 * @constructor Console
 */
const GameConsoleSchema = new Schema({
    name: { type: String, required: true },
    manufacturer: {
        type: String,
        required: true,
        enum: ["PC", "Sony", "Microsoft", "Nintendo"],
        default: "PC",
    },
    description: { type: String, required: true},
    imageFile: { type: String, required: true },
});


/**
 * Virtual for concole's URL.
 * @virtual url
 */
GameConsoleSchema.virtual("url").get(function() {
    return `/inventory/gameconsole/${this._id}`;
});


// Export model
module.exports = mongoose.model("Console", GameConsoleSchema);