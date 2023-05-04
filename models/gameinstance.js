/**
 * @file Schema for a particular game instance.
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
 * Schema for game instance.
 * @constructor Game Instance.
 */
const GameInstanceSchema = new Schema({
    storeNumber: { type: Schema.Types.ObjectID, ref: "StoreLocation" },
    game: { type: Schema.Types.ObjectID, ref: "Game" },
    comments: { 
        type: String, 
        required: true, 
        minLength: 3, 
        maxLength: 255 
    },
    reserved: { type: Boolean },
});


/**
 * Virtual for game instance URL.
 * @virtual url
 */
GameInstanceSchema.virtual("url").get(function() {
    return `/inventory/gameinstance/${this._id}`;
});


// Export model
module.exports = mongoose.model("GameInstance", GameInstanceSchema);