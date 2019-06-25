let express = require('express')
let router = express.Router()
const tractorController = require('../controllers/tractor.cont')
const driverController = require('../controllers/driver.cont')
const trailerController = require('../controllers/trailer.cont')

//= =====================
// INDEX
//= =====================
// Create a GET index route "/" that triggers the tractor controller index function
router.get('/',tractorController.index)


//= =====================
// NEW
//= =====================
// Create a GET new route "/new" that triggers the tractor controller new function
router.get('/new',tractorController.new)


//= =====================
// SHOW
//= =====================
// Create a GET show route "/:id" that triggers the tractor controller show function
// router.get('/:id',tractorController.show)
router.get('/:id',tractorController.show)

//= =====================
// CREATE
//= =====================
// Create a POST index route "/" that triggers the tractor controller create function
router.post('/',tractorController.create)

//= =====================
// EDIT
//= =====================
// Create a GET edit route "/:id/edit" that triggers the tractor controller edit function
router.get("/:id/edit",tractorController.edit)


//= =====================
// UPDATE
//= =====================
// Create a PUT update route "/:id" that triggers the tractor controller update function
router.put("/:id",tractorController.update)
// Create a PATCH update route "/:id" that triggers the tractor controller update function
// router.get('/:id',tractorController.put)



//= =====================
// DELETE
//= =====================
// Create a DELETE delete route "/:id" that triggers the tractor controller delete function
// router.get('/:id',tractorController.delete)
router.delete('/:id',tractorController.delete)


router.get("/:id/driver/:driverId", driverController.show)
router.post('/:id/driver', driverController.create)
router.get("/:id/driver/:driverId/edit", driverController.edit)
router.put("/:id/driver/:driverId/", driverController.update)
router.delete('/:id/driver/:driverId', driverController.delete)


router.get("/:id/trailer/:trailerId", trailerController.show)
router.post('/:id/trailer', trailerController.create)
router.get("/:id/trailer/:trailerId/edit", trailerController.edit)
router.put("/:id/trailer/:trailerId/", trailerController.update)
router.delete('/:id/trailer/:trailerId', trailerController.delete)



module.exports = router
