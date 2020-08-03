const router =require("express").Router();

const {createWorkout,
       addExercise,
       getLastWorkout,
}=require("../controllers/fitness-controller")

router.post("/api/workouts",createWorkout);
router.put("/api/workouts/:id",addExercise);
router.get("/api/workouts",getLastWorkout);

module.exports = router;