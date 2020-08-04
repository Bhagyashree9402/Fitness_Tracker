const router =require("express").Router();

const {createWorkout,
       addExercise,
       getLastWorkout,
       getWorkoutsInRange,
}=require("../controllers/fitness-controller")

router.post("/api/workouts",createWorkout);
router.put("/api/workouts/:id",addExercise);
router.get("/api/workouts",getLastWorkout);
router.get("/api/workouts/range",getWorkoutsInRange);

module.exports = router;