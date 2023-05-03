/**
 * @file Schema for available store locations.
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
 * Schema for a store location.
 * @constructor StoreLocation
 */
const LocationSchema = new Schema({
    storeNumber: { type: Number, required: true },
    name: { 
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    address: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 255,
    },
});


/**
 * Virtual for store location's URL.
 * @virtual url
 */
LocationSchema.virtual("url").get(function() {
    `return /inventory/storelocation/${this._id}`;
});


// Export model
module.exports = mongoose.model("StoreLocation", LocationSchema);