const express=require("express");
const app=express();
const port=process.env.PORT||8080;
const connect=require("./db/connect.js");
const dotenv=require("dotenv");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const userRouter=require("./routes/userRoutes.js");

dotenv.config({
    path:"./.env"
});

app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

connect()
.then((host)=>{
    console.log(`MongoDB Connected SuccessfUlly!! DB_HOST:${host} `);
}).catch((error)=>{
    console.log("MongoDB connection Failed",error);
})


app.use(express.json());

app.use("/api/v1/user",userRouter);

app.get("/",async(req,res)=>{
    return res.end("Hello Todo....");
})

app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
})