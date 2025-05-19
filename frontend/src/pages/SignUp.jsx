import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import InputField from "../components/InputField"; 
import signupimage from "../assets/signupimage.png";
import bgimg from "../assets/bgimg.png"
import { useSignUpMutation } from "../../app/services/Userapi";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const SignupForm = () => {
   const [firstName,setFirstName]=useState("");
   const [lastName,setLastName]=useState("");
   const [userName,setUserName]=useState("")
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const [cfmPassword,setCfmPassword]=useState("");
   const [formError, setFormError] = useState("");
   const [agree,setAgree]=useState(false);
   const navigate=useNavigate();
  const [signUp,{data,isError,isLoading,isSuccess}]=useSignUpMutation();

    console.log(agree);
    

   const handleSubmit=async (e)=>{
      e.preventDefault();
      if (password !== cfmPassword) {
        setFormError("Passwords do not match");
        return;
      }
      if(agree){
        toast.error("Please select terms and condition");
        return;
      }
      try {
        setFormError("");
        await signUp({
          firstName,
          lastName,
          userName,
          email,
          password,
        }).unwrap();
        toast.success("SignUp SuccessFul")
        navigate("/signin")
      } catch (err) {
         toast.error(err?.data?.message);
         setFormError(err?.data?.message || "Signup failed. Please try again.");
      }
    };
  


  return (
    <div
      className="min-h-screen flex items-center bg-[#FF6767] justify-center bg-contain bg-center relative p-3"
      style={{
      backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="relative z-10 bg-white w-full max-w-4xl rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        <div className="hidden md:flex w-1/2 bg-white justify-center items-center">
          <img
            src={signupimage} 
            alt="Illustration"
            className="max-h-90"
          />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <InputField
                type="text"
                placeholder="Enter First Name"
                icon={<AiOutlineUser />}
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
              />
              <InputField
                type="text"
                placeholder="Enter Last Name"
                icon={<AiOutlineUser />}
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
              />
              <InputField
                type="text"
                placeholder="Enter Username"
                icon={<AiOutlineUser />}
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
              />
              <InputField
                type="email"
                placeholder="Enter Email"
                icon={<AiOutlineMail />}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <InputField
                type="password"
                placeholder="Enter Password"
                icon={<AiOutlineLock />}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <InputField
                type="password"
                placeholder="Confirm Password"
                icon={<AiOutlineLock />}
                value={cfmPassword}
                onChange={(e)=>setCfmPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center mt-4">
              <input type="checkbox" id="terms" className="h-4 w-4 text-[#FF6F91] focus:ring-[#FF6F91]" value={agree} onChange={(e)=>setAgree(!agree)}/>
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to all terms
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#FF6F91] text-white p-3 rounded-lg font-semibold hover:bg-[#FF5273] transition duration-200"
            >
              {isLoading?"Registering...":"Register"}
            </button>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account? <a href="/signin" className="text-black underline">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
)};

export default SignupForm;
