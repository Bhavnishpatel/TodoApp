import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { login } from "../actions/auth/authSlice";
import { setUser } from "../actions/userSlice";

export const userApi=createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/api/v1/user",
        credentials:'include',
    }),
    endpoints:(builder)=>({
        signUp:builder.mutation({
            query:(data)=>({
                url:"/signup",
                method:"POST",
                body:data
        })
        }),
        login:builder.mutation({
            query:(data)=>({
                url:"/login",
                method:"POST",
                body:data
            }),
            async onQueryStarted(arg,{dispatch,queryFulfilled}){
            try {
                const {data}=await queryFulfilled;
                console.log(data);
                dispatch(setUser(data.loggedInUser))
                dispatch(login());
            } catch (error) {
                console.log("Error: ",error);
            }
            }
        }),
        checkauth:builder.query({
            query:()=>({
                url:'/checkAuth',
                method:'GET'
            }),
            async onQueryStarted(arg,{dispatch,queryFulfilled}){
                try {
                    const {data}=await queryFulfilled;
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            }
        }),
    
       
    })
});

export const {useSignUpMutation,useLoginMutation,useCheckauthQuery}=userApi;
