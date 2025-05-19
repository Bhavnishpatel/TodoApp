const User=require("../models/User.js");
const apiResponse=require("../utils/ApiResponse.js");
const {ApiError}=require("../utils/ApiError.js");
const {ApiResponse}=require("../utils/ApiResponse.js");
const {validatePassword}=require("../utils/validatePassword.js");

const generateAccessAndRefreshTokens = async (userId) => {
     try {
        const user = await User.findById(userId)
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()

        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, "Something went wrong")
    }
}

const extractNumber = (str) => {
    const match = str.match(/^\d+/);

    if (match) {
        return parseInt(match[0]);
    } else {
        return 0;
    }
}


const signUp=async(req,res)=>{
    const {firstName,lastName,userName,email,password}=req.body;
    try {
        if([firstName,lastName,userName,email,password].some((field)=>field?.trim()==="")){
          return res.status(400).json({message:"All Fields Required"});
        }
        const isUserExist=await User.findOne({
            $or:[{userName,email}]
        });
        if (isUserExist) {
            return res.status(409).json({message:"User with email or username already exists"});
        }
        if(!validatePassword(password)){
            return res.status(404).json({message:"Password Must Contain At least one Character,letter,digit or uppercase character like Demo@123"});
        }
        const user=new User({
            firstName,
            lastName,
            userName,
            email,
            password
        });
        await user.save();

        const createdUser = await User.findById(user._id).select(
        "-password ");

        if(!createdUser){
            return res.status(500).json({message:"Error While creating User"});
        }

        return res.status(201).json({message:"User created SucessFully",createdUser})
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body;
    try {
    if (!(email)) {
        return res.status(400).json({message:"Email And Password is Required"});
    }
    const user = await User.findOne({email})
    if (!user){ 
        return res.status(404).json({message:"Invalid Creditials"});
    }
    const isPasswordValid = await user.isPasswordCorrect(password)
    if (!isPasswordValid){
        return res.status(404).json({message:"Invalid Creditials"});
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser=await User.findById(user._id).select("-password")

     const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Strict",
    }

    return res
           .status(200)
           .cookie("accessToken", accessToken, { ...options, maxAge: extractNumber(process.env.ACCESS_TOKEN_EXPIRY) * 24 * 60 * 60 * 1000 })
           .cookie("refreshToken", refreshToken, { ...options, maxAge: extractNumber(process.env.REFRESH_TOKEN_EXPIRY) * 24 * 60 * 60 * 1000 })
           .json({message:"Login Successful",loggedInUser});

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:error.message});
    }
    

}



module.exports={
    signUp,
    login
}