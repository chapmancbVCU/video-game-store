/**
 * @file Schema for accessories.
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


const AccessoriesSchema = new Schema({
    name: { type: String, required: true },
    upc: { type: Number, required: true },
    platform: [{ type: Schema.Types.ObjectID, ref: "platform"} ],
    description: { type: String, required: true },
})


/**
 * Virtual for accessories's URL.
 * @virtual url
 */
AccessoriesSchema.virtual("url").get(function() {
    return `/inventory/accessories/${this._id}`;
});


// Export model
module.exports = mongoose.model("Accessories", AccessoriesSchema);