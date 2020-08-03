const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT=process.env.PORT || 3007;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const fitnessRoute = require("./routes/fitness-routes.js");
const clientRoute = require("./routes/client-routes.js");

app.use(fitnessRoute,clientRoute);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));