const express=require("express");
require("dotenv").config();
const app=express();
const connectDB=require("./src/config/db");
app.use(express.json());
connectDB();
const authRoutes = require("./src/routes/authRoutes");

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.listen(5000,()=>{
    console.log("app linstening at 5000");
})
