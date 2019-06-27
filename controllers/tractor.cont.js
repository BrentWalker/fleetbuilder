//= =====================
// REQUIREMENTS
//= =====================
// require the tractor model
const Tractor = require("../models/tractor.mod");
const Driver = require('../models/driver.mod')
// const Trailer = require('../models/trailer.mod')

const tractorController = {
  //= =====================
  // INDEX
  //= =====================
  // Create a function sends all tractors to tractors/index.hbs view
  index: function(req, res) {
    Tractor.find().then(tractors => {
      res.render("tractors/index", { tractors });
    });
  },
  //= =====================
  // NEW
  //= =====================
  // Create a function that renders the new.hbs form
  new: function(req, res) {
    res.render("tractors/new");
  },
  //= =====================
  // SHOW
  //= =====================
  // Create a function that renders a single tractor's show page
  show: function(req, res) {
    Tractor.findById(req.params.id).then(tractor => {
      Driver.find({tractorId: req.params.id}).then((driver)=>{
        console.log(tractor)
        console.log(driver)
        res.render("tractors/show", { tractor, driver });
      });     
    });
  },
  //= =====================
  // CREATE
  //= =====================
  // Create a function that creates a new tractor
  // and upon success redirects back to the index page "/"
  create: function(req, res) {
    console.log(req);
    Tractor.create(req.body).then(() => res.redirect("/"));
  },
  //= =====================
  // EDIT
  //= =====================
  // Create a function that renders the edit.hbs page and
  // sends that a tractor's data to it
  edit: function(req, res) {
    Tractor.findById(req.params.id).then(tractor => {
      res.render("tractors/edit", { tractor });
    });
  },
  //= =====================
  // UPDATE
  //= =====================
  // Create a function that updates the tractor and
  // redirects back to the SHOW PAGE (not index)
  update: function(req, res) {
    Tractor.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
      res.redirect("/" + req.params.id);
    });
  },

  //= =====================
  // DELETE
  //= =====================
  // Create a function that deletes the tractor and
  // redirects back to index page "/"
  delete: function(req, res) {
    Tractor.findByIdAndRemove(req.params.id).then(() => {
      res.redirect("/");
    });
  }
};

//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = tractorController;
