
// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

// create your donut schema:
const Driver = new Schema({
    name: String,
    age: Number,
    tractorId: ObjectId
})
// export the Driver model with module.exports
module.exports = mongoose.model('Driver', Driver)