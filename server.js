const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const destinationRoutes = require("./src/routes/destinations");
const foodRoutes = require("./src/routes/food-spots");
const hostelRoutes = require("./src/routes/hostels");
const reviewRoutes = require("./src/routes/reviews");

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/experienceIndia";

app.use(cors());
app.use(express.json());

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

app.get("/", (_req, res) => {
  res.json({ message: "Experience India API is running." });
});

app.use("/api/destinations", destinationRoutes);
app.use("/api/food-spots", foodRoutes);
app.use("/api/hostels", hostelRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
