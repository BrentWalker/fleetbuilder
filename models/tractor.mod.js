// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Tractor = new Schema({
    tractor_number: Number,
    tractor_make: String
})
// export the Tractor model with module.exports
module.exports = mongoose.model('Tractor', Tractor)