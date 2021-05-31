const router = require('express').Router();
//require agent model
let Agent = require('../models/agent.model');

//first endpoint 

router.route('/').get((req, res) => {
  Agent.find()
    .then(agents => res.json(agents))
    .catch(err => res.status(400).json('Error: ' + err));
});

//deleteusertype


router.route('/:id').delete((req,res)=>{
  Agent.findByIdAndDelete(req.params.id)
  .then(()=>res.json('Agent deleted.'))
  .catch(err=>res.status(400).json('error'+ err));
})
//second endpoint

router.route('/add').post((req, res) => {
  const agentId = req.body.agentId;
  const agentName=req.body.agentName;
  

  const newAgent = new Agent({agentId,agentName});

  newAgent.save()
    .then(() => res.json('Agent added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;