const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const userRoutes = require("./api/routes/users");
const doctorRoutes = require("./api/routes/doctors");
const patientRoutes = require("./api/routes/patients");
const prescriptionRoutes = require("./api/routes/prescriptions");
const appointmentRoutes = require("./api/routes/appointments");
const medicalhistoryRoutes = require("./api/routes/medicalhistorys");



//require("dotenv").config();

mongoose.connect("mongodb://127.0.0.1:27017/newdb3");

//app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/users", userRoutes);
app.use("/doctors", doctorRoutes);
app.use("/patients", patientRoutes);
app.use("/prescriptions", prescriptionRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/medicalhistorys", medicalhistoryRoutes);





app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });


module.exports= app;
