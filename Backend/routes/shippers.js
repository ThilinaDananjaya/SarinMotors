const router = require('express').Router();
//require shipper model
let Shipper = require('../models/shipper.model');

//first endpoint 

router.route('/').get((req, res) => {
  Shipper.find()
    .then(shippers => res.json(shippers))
    .catch(err => res.status(400).json('Error: ' + err));
});

//deleteshipper


router.route('/:id').delete((req,res)=>{
  Shipper.findByIdAndDelete(req.params.id)
  .then(()=>res.json('Shipper deleted.'))
  .catch(err=>res.status(400).json('error'+ err));
})
//second endpoint

router.route('/add').post((req, res) => {
  const shipperId = req.body.shipperId;
  const shipperName=req.body.shipperName;
  

  const newShipper = new Shipper({shipperId,shipperName});

  newShipper.save()
    .then(() => res.json('Shipper added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;