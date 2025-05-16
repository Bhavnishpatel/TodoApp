const mongoose=require("mongoose");

const connect=async()=>{
    try {
        const connectionInstance=await mongoose.connect(process.env.MONGO_URI);
        return connectionInstance.connection.host;
    } catch (error) {
        console.log("MONGODB connection Failed: ",error);
        process.exit(1);
    }
}

module.exports=connect;