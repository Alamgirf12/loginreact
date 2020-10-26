var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	username:{
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},
email:{
		type: String,
		
		
		trim: true,
		minlength: 3
	},
	phone:{
		type: Number,
		
		minlength: 3
	},},
  {
	timestamps: true,
})
User = mongoose.model('User', userSchema);

module.exports = User;