const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// load env variables
dotenv.config();

// connect database
connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend server is running 🚀");
});

const PORT = process.env.PORT || 5000;

const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

const doctorRoutes = require("./routes/doctorRoutes");
app.use("/api/doctors", doctorRoutes);

const appointmentRoutes = require("./routes/appointmentRoutes");
app.use("/api/appointments", appointmentRoutes);



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
