const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const { error } = require("console");
const dotenv=require("dotenv").config();
const DB_CONNECTION_URL=process.env.DB_CONNECTION_URL;
const Articles = require("./models/ArticleModel");
const getController = require("./controllers/getController");
const postController = require("./controllers/postController");
const deleteController = require("./controllers/deleteController");


const app=express();
app.use(cors());
app.use(express.json());


mongoose.connect(DB_CONNECTION_URL)
.then(()=>console.log("Connected!"))
.catch((error)=>console.log(error))



app.get("/", getController )
app.post("/", postController )
app.delete("/:id",deleteController)



app.listen(3000,()=>console.log("Your Application is running at 3000"));