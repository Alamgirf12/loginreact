var mongoose = require('mongoose');
var Schema = mongoose.Schema;

excerciseSchema = new Schema( {
	username:{
		type: String,
		required: true,
	},
	description:{
		type: String,
		required: true,
	},
    duration:{
		type: Number,
		required: true,
	},
    date:{
		type: Date
		
	},},{

	timestamps: true,
})
var Excercise = mongoose.model('Excercise', excerciseSchema);

module.exports = Excercise;