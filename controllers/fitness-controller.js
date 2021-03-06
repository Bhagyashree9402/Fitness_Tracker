const Fitness = require("../models/fitness.js")



module.exports={
   createWorkout: async(req,res)=>
   Fitness.create(req.body)
       .then((result) =>res.send(result))
       .catch((err)=>res.send(err)),

   addExercise: async(req,res)=>{
       try{
        const fitness = await Fitness.findById(req.params.id);
        if (fitness.totalDuration > 0){
            fitness.totalDuration = fitness.totalDuration + req.body.duration;
        }else{
            fitness.exercises.forEach(async function(excercise) {
                
                fitness.totalDuration = fitness.totalDuration + excercise.duration;
                console.log(fitness.totalDuration);
                console.log(excercise.duration);
            });
            fitness.totalDuration = fitness.totalDuration + req.body.duration;
        }
        fitness.exercises.push(req.body);
        await fitness.save();
        res.send(fitness);
       }catch(err){
         res.send(err);
       }
   },

   getLastWorkout: async(req,res)=>{
     try{
        const allWorkouts = await Fitness.find();
        res.send(allWorkouts);
      }catch(err){
        res.send(err);
     }
    },

    // getWorkoutsInRange: async (req,res)=>{
    //     try{
    
    //     })
    //     }catch(err){
    //         res.send(err);
    //     }
    // }
    getWorkoutsInRange: (req, res) => {
        Fitness.find()
        .then((workoutRange) => res.send(workoutRange))
        .catch((err) => res.send(err));
    },
   
}