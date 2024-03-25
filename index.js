import express from "express";
import mongoose from "mongoose";
import apartmentModel from "./apartment.model.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const dbConnection = () => {
  mongoose
    .connect('mongodb+srv://noon:ahmed22@noon.rjfgw6l.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Could not connect to MongoDB");
    });
};

app.post("/addApartment", (req, res) => {
  const { title, space, address, details, code, price } = req.body;

  const newApartment = new apartmentModel({
    title,
    space,
    address,
    details,
    code,
    price
  });

  newApartment.save().then((result) => {
    res.json({
      message: "Apartment added successfully",
      result
    });
  }).catch((err) => {
    console.error("Error adding apartment:", err);
    res.status(500).json({ error: "Internal server error" });
  });
});

app.get("/getAllApartments", (req, res) => {
  apartmentModel.find({}).then((result) => {
    res.json({
      message: "Apartments retrieved successfully",
      result
    });
  }).catch((err) => {
    console.error("Error retrieving apartments:", err);
    res.status(500).json({ error: "Internal server error" });
  });
});

dbConnection();

app.listen(3000, () => {
  console.log("express listening on port 3000");
});
