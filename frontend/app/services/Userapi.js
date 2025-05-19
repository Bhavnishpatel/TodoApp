import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

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
            })
        })
    })
});

export const {useSignUpMutation,useLoginMutation}=userApi;
