const express=require("express");
const app=express();
const port=process.env.PORT||8080;
const connect=require("./db/connect.js");
const dotenv=require("dotenv");

dotenv.config({
    path:"./.env"
});

connect()
.then((host)=>{
    console.log(`MongoDB Connected SuccessfUlly!! DB_HOST:${host} `);
}).catch((error)=>{
    console.log("MongoDB connection Failed",error);
})

app.get("/",async(req,res)=>{
    return res.end("Hello Todo....");
})

app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
})