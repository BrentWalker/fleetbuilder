// requirements: require db/connection as 'mongoose'
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// create Trailer schema:
const Trailer = new Schema({
  trailer_number: Number,
  trailer_type: String,
  tractorId: ObjectId
});
// export Trailer model with module.exports
module.exports = mongoose.model("Trailer", Trailer);
