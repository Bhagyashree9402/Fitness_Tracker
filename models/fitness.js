let mongoose = require("mongoose");
const Schema=mongoose.Schema;

const subSchema = new Schema({
    type:{
        type:String,
        trim:true,
        required:"Must enter type of workout",
    },

    name: {
        type:String,
        trim: true,
        required:"Must enter name of the exercise",
    },

    duration:{
         type:Number,
         trim:true,

    },

    weight: {
        type: Number,
        trim: true,
    },
    
    reps:{
        type: Number,
        trim: true,
    },
    
    sets:{
        type: Number,
        trim: true,
    },
    
    distance:{
        type: Number,
        trim: true,
    }
},{_id:false});

const fitnessSchema = new Schema({

    day: {
        type: Date,
        default: new Date(),
    },
    exercises: [subSchema],
     
    totalDuration :{
        type:Number,
        default: 0,
    }

});

const Fitness = mongoose.model("Workout", fitnessSchema);
module.exports = Fitness;