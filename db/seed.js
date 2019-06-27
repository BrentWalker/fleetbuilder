//= =====================
// REQUIREMENTS
//= =====================
// Make sure that when you run the seeds file, all of the

let Tractor = require('../models/tractor.mod')
let Driver = require('../models/driver.mod')

let newTractors = [
  {
   tractor_number: '1101',
   tractor_make: 'Pete'
  },
  {
    tractor_number: '1102',
    tractor_make: 'Pete'
  },
  {
    tractor_number: '1103',
    tractor_make: 'Kenworth'
  },
  {
    tractor_number: '1190',
    tractor_make: 'Kenworth'
  }
]
Tractor.remove({})
  .then(() => { 
    Driver.remove({}) })
  .then(
    Tractor.create(newTractors).then(()=>{
    console.log('Data Done Seeding')
  }))