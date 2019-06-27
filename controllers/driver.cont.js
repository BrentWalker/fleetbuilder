// require the any models needed models
const Driver = require("../models/driver.mod");

const driverController = {

  //= =====================
  // SHOW
  //= =====================
  
  show: function(req, res) {
    Driver.findById(req.params.driverId).then(driver => {
      res.render("driver/show", {driver});
    });
  },

  //= =====================
  // CREATE
  //= =====================

  create: function(req, res) {
    console.log(req);
    Driver.create(req.body).then(() => res.redirect(`/${req.params.id}`));
  },
  //= =====================
  // EDIT
  //= =====================
 
  edit: function(req, res) {
    Driver.findById(req.params.driverId).then(driver => {
      res.render("driver/edit", { driver });
    });
  },
  //= =====================
  // UPDATE
  //= =====================

  // redirects back to the Driver SHOW PAGE 
  update: function(req, res) {
    Driver.findByIdAndUpdate(req.params.driverId, req.body, { new: true }).then(() => {
      res.redirect(`/${req.params.id}/driver/${req.params.driverId}`);
    });
  },

  //= =====================
  // DELETE
  //= =====================

  delete: function(req, res) {
    Driver.findByIdAndRemove(req.params.driverId).then(() => {
      res.redirect(`/${req.params.id}`);
    });
  }
};

module.exports = driverController;

