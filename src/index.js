require('dotenv').config({ path: "src/.env"});
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT;
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);


mongoose.connect(process.env.MONGODB_URI)
.then(()=> { 
    console.log("Connected to mongoDb")
})
.catch((err)=> console.log("Could not able to connect mongoDb", err))


app.listen(PORT, ()=>{
    console.log("Server is running at PORT:", PORT);
})