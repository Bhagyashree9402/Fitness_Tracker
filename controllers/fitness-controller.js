const Fitness = require("../models/fitness.js")



module.exports={
   createWorkout: async(req,res)=>
   Fitness.create(req.body)
       .then((result) =>res.send(result))
       .catch((err)=>res.send(err)),

   addExercise: async(req,res)=>{
       try{
        const fitness = await Fitness.findById(req.params.id);
        console.log(fitness);
        fitness.exercises.push(req.body);
        //fitness.totalDuration=req.body.duration;
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

    getWorkoutsInRange: async (req,res)=>{
        try{
    const workOut = await Fitness.find();
    let totalDuration = 0;
     await workOut.exercises.forEach((workout)=>{
         totalDuration += workout.duration;
        })
        workOut.totalDuration=totalDuration;
        await workOut.save();
        res.send(workOut);

        }catch(err){
            res.send(err);
        }
    }

   
}