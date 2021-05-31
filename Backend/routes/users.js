const router = require('express').Router();
//require model that created early
let User = require('../models/user.model');
 
//first end point -GET

router.route('/').get((req,res)=>{

  User.find() 
  .then(users=>res.json(users))
  .catch(err=>res.status(400).json('Error: ' +err));
});

//second end point - POST

router.route('/add').post((req,res)=>
{
    const usertypeId = req.body.usertypeId;
    const username = req.body.username;
    const password = req.body.password;
    


    const newUser = new User({
        usertypeId,
        username,
        password
    
    });
  
    newUser.save()
    .then(() =>res.json('User added'))
    .catch(err => res.status(400).json('Error:' + err));

}
);

router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error :'+ err));

});

router.route('/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json('User deleted.'))
    .catch(err=>res.status(400).json('error'+ err));
})

router.route('/update/:id').post((req,res)=>{
    User.findById(req.params.id)
    .then(user =>{
        user.usertypeId=req.body.usertypeId;
        user.username=req.body.username;
        user.passsword=req.body.passsword;
    
        
 user.save()
 .then(()=> res.json('user updated'))
 .catch(err=>res.status(400).json('error'+ err));
})
.catch(err=>res.status(400).json('Error ' + err));
});

module.exports = router;