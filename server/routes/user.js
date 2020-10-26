var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user.model');


router.get('/',(req,res,next)=>{
	User.find()
	.then(users => res.json(users))
    .catch(err => res.status(400).json('Error:'+err))
});
 
router.post('/add',(req,res,next)=> {
	var  username =  req.body.username;
	var  email =  req.body.email;
	var  phone =  req.body.phone;
	
	console.log(username)
	const newUser = new User({username,email,phone});
	newUser.save()
	.then(()=> res.json('user added!'),console.log('success'))
	.catch((err)=> res.status(400).json('Error:'+err));
})










module.exports = router