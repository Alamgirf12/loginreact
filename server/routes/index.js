var express = require('express');
var router = express.Router();
// var db = require('../db');



// router.get('/',(req,res,next)=>{
// 	    db.query("SELECT * FROM users", function (err, result) {

//         if(result){
         
//           res.send(result)
          
          
//         }
//         else{
//         	 res.send('failed')

//         }
//     })
// 	})
// router.post('/add',(req,res,next)=> {
// 	var  username =  req.body.username;
// 	var  email =  req.body.email;
// 	var  phone =  req.body.phone;
	
	
// 	 const insert_query = "insert into users (username,email,phone) values (?, ?, ?)";

//     db.query(
//       insert_query,
//       [
//         username,
//         email,
//         phone
//       ],function(err,result){
//       	if(result){

//        res.send('user added!'),console.log('success')
//    }
//        else{
//         	 res.send('failed')

//         }
//       })
	
// })










module.exports = router