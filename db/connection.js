// // requirements: import mongoose
// const mongoose = require('mongoose')


// // Connect to a local database called "fleet-builder"
// mongoose.connect("mongodb://localhost/fleet-builder", {useNewUrlParser:true}).then(()=>{
//     console.log ("Connected to MongoDB boy")
// })
// // When it connects, then console.log "Connected to MongoDB"


// // export your mongoose connection
// module.exports = mongoose

const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/fleet-builder";

// Connect to database - enables to use the mongo db created by heroku once you deploy
if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
}   else {
    mongoose.connect(connectionString, {useNewUrlParser: true})
}
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
  });

module.exports = mongoose;