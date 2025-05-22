import React, { useEffect, useState } from 'react'
import InputField from "../components/InputField";
import SocialLogin from "../components/SocialLogin";
import { FaUser, FaLock } from "react-icons/fa";
import signinimg from "../assets/signin.png";
import bgimg from "../assets/bgimg.png"
import { useLoginMutation } from '../app/services/Userapi.js';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';


const SignIn = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [login,{isLoading}]=useLoginMutation();
    const navigate=useNavigate();
    
    const handleLogin=async(e)=>{
      e.preventDefault();
      try{
        await login({
          email,
          password
        }).unwrap();
        toast.success("Login Successful");
        navigate("/dashBoard");
      }catch(err){
         toast.error(err?.data?.message);
      }
    }

   return (
    <div className="min-h-screen overflow-y-hidden flex items-center justify-center bg-contain  bg-[#FF6767]  "
     style={{
          backgroundImage: `url(${bgimg})`,
          }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex flex-col md:flex-row items-center ">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <InputField type="text" placeholder="Enter Email" icon={<FaUser />} value={email} onChange={(e)=>setEmail(e.target.value)} />
            <InputField type="password" placeholder="Enter Password" icon={<FaLock />} value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit"   disabled={isLoading}
 className="w-[129px] bg-[#FF9090] text-white py-2 rounded-lg hover:bg-[#FF7373] transition duration-200">
             {isLoading?"Loging...":"Login"}
            </button>
          </form>
          <SocialLogin />
          <p className="text-sm mt-4 text-gray-600">
            Don&apos;t have an account? <a href="/signup" className="text-black underline">Create One</a>
          </p>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img src={signinimg} alt="Sign In" className="w-full max-h-80 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default SignIn