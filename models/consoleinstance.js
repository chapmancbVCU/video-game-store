/**
 * @file Schema for a particular console instance.
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
 * Schema for gaming console instance.
 * @constructor Gaming Console Instance.
 */
const ConsoleInstanceSchema = new Schema({
    storeNumber: { type: Schema.Types.ObjectID, ref: "StoreLocation" },
    gameconsole: { type: Schema.Types.ObjectID, ref: "GameConsole"},
    comments: { 
        type: String, 
        required: true, 
        minLength: 3, 
        maxLength: 255 
    },
    reserved: { type: Boolean },
});


/**
 * Virtual for console instance URL.
 * @virtual url
 */
ConsoleInstanceSchema.virtual("url").get(function() {
    return `/inventory/consoleinstance/${this._id}`;
});


// Export model
module.exports = mongoose.model("ConsoleInstance", ConsoleInstanceSchema);