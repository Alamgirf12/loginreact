var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Excercise = require('../models/excercise.model');


router.get('/',(req,res,next)=>{
	Excercise.find()
	.then(excercise => res.json(excercise))
    .catch(err => res.status(400).json('Error:'+err))
});
 
router.post('/add',(req,res,next)=> {
	var  username =  req.body.username;
		var  description =  req.body.description;
			var  duration =  Number(req.body.duration);
				var  date =  Date.parse(req.body.date);

	const newExcercise = new Excercise({username,description,duration,date,});
	newExcercise.save()
	.then(()=> res.json('Excercise added!'),console.log('success'))
	.catch((err)=> res.status(400).json('Error:'+err));
})
router.post('/update/:id',(req,res,next)=> {
	Excercise.findById(req.params.id)
	.then((excercise)=>{  
	 excercise.username =  req.body.username;
		excercise.description =  req.body.description;
			excercise.duration =  Number(req.body.duration);
				excercise.date =  Date.parse(req.body.date)
		excercise.save()
	.then(()=> res.json('Excercise Updated'))
	.catch(err=> res.status(400).json('Error:'+err))
})
	.catch(err=> res.status(400).json('Error:'+err))
})



router.get('/:id',(req,res,next)=>{
	Excercise.findById(req.params.id)
	.then(excercise => res.json(excercise))
    .catch(err => res.status(400).json('Error:'+err))
});
router.delete('/:id',(req,res,next)=>{
	Excercise.findByIdAndDelete(req.params.id)
	.then(() => res.json('deleted'))
    .catch((err) => res.status(400).json('Error:'+err))
});










module.exports = router