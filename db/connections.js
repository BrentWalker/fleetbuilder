// requirements: import mongoose
const mongoose = require('mongoose')


// Connect to a local database called "fleet-builder"
mongoose.connect("mongodb://localhost/fleet-builder", {useNewUrlParser:true}).then(()=>{
    console.log ("Connected to MongoDB")
})
// When it connects, then console.log "Connected to MongoDB"


// export your mongoose connection
module.exports = mongoose