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
const ConsoleSchema = new Schema({
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
ConsoleSchema.virtual("url").get(function() {
    return `/inventory/console/${this._id}`;
});


// Export model
module.exports = mongoose.model("Console", ConsoleSchema);