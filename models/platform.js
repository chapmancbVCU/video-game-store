/**
 * @file Schema for parent gaming platform.
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
 * Schema for platform.
 * @constructor Platform
 */
const PlatformSchema = new Schema({
    name: { type: String, required: true },
    manufacturer: {
        type: String,
        required: true,
        enum: ["Valve", "Sony", "Microsoft", "Nintendo", "Sega"],
        default: "Microsoft",
    },
});


// Export model
module.exports = mongoose.model("Platform", PlatformSchema)