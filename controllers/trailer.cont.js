// require the any models needed models
const Trailer = require("../models/trailer.mod");

const trailerController = {

  //= =====================
  // SHOW
  //= =====================
  
  show: function(req, res) {
    Trailer.findById(req.params.trailerId).then(trailer => {
      res.render("trailers/show", {trailer});
    })
    .catch(err => {
      console.log(err)
    });
  },

  //= =====================
  // CREATE
  //= =====================

  create: function(req, res) {
    console.log(req);
    Trailer.create(req.body).then(() => res.redirect(`/${req.params.id}`));
  },
  //= =====================
  // EDIT
  //= =====================
 
  edit: function(req, res) {
    Trailer.findById(req.params.trailerId).then(trailer => {
      res.render("trailers/edit", { trailer });
    });
  },
  //= =====================
  // UPDATE
  //= =====================

  // redirects back to the Donut SHOW PAGE 
  update: function(req, res) {
    Trailer.findByIdAndUpdate(req.params.trailerId, req.body, { new: true }).then(() => {
      res.redirect(`/${req.params.id}/trailer/${req.params.trailerId}`);
    });
  },

  //= =====================
  // DELETE
  //= =====================

  delete: function(req, res) {
    Trailer.findByIdAndRemove(req.params.trailerId).then(() => {
      res.redirect(`/${req.params.id}`);
    });
  }
};

module.exports = trailerController;

