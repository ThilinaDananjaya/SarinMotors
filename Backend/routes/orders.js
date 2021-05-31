const router = require('express').Router();
let Order = require('../models/order.model');


router.route('/').get((req,res)=>{

  Order.find()
  .then(orders=>res.json(orders))
  .catch(err=>res.status(400).json('Error: ' +err));
});


router.route('/add').post((req,res)=>
{
    const orderId = req.body.orderId;
    const date = Date.parse(req.body.date);  
    const Payment = Number(req.body.Payment);
    const agent = req.body.agent;
    const shipper = req.body.shipper;
    const manager = req.body.manager;
    const customer = req.body.customer;
   


    const newOrder = new Order({
        orderId,
        date,
        payment,
        agent,
        shipper,
        manager,
        customer
        
    });
  
    newOrder.save()
    .then(() =>res.json('Order added'))
    .catch(err => res.status(400).json('Error:' + err));

}
);

router.route('/:id').get((req,res)=>{
    Order.findById(req,params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error :'+ err));

});

router.route('/:id').delete((req,res)=>{
    Order.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Order deleted.'))
    .catch(err=>res.status(400).json('error'+ err));
})

router.route('/update/:id').post((req,res)=>{
    Order.findById(req,params.id)
    .then(order =>{
        order.orderId=req.body.orderId;
        order.date=Date.parse(req.body.date);
        order.Payment=Number(req.body.Payment);
        order.agent=req.body.agent;
        order.shipper=req.body.shipper;
        order.manager=req.body,manager;
        order.customer=req.body.customer;

        
 order.save()
 .then(()=> res.json('order updated'))
 .catch(err=>res.status(400).json('error'+ err));
})
.catch(err=>res.status(400).json('Error ' + err));
});

module.exports = router;