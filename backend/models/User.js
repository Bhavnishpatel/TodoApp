const mongoose=require("mongoose");
const bycrpt=require("bcrypt");
const jwt=require("jsonwebtoken");
const validator=require("validator");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: /.+\@.+\..+/,
        lowercase:true,
        trim:true,
        validate:[validator.isEmail,"Please Provide a Valid Email Address"]
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:[8,"Password Must be at least 8 characters Long"],
        maxLength:[128,"Password Must be less than 128 characters."]
    },
    verified:{
        type:Boolean,
        default:false
    }
});

userSchema.pre("save",async function(next){
    try {
        if(!this.isModified("password")) return next();
        const salt=await bycrpt.genSalt(10);
        this.password=await bycrpt.hash(this.password,salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.isPasswordCorrect=async function(password){
    return await bycrpt.compare(password,this.password)
}

userSchema.methods.generateAccessToken= async function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        userName:this.userName
    },process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign({
        _id: this._id
    }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
}

const User=mongoose.model("User",userSchema);

module.exports=User;