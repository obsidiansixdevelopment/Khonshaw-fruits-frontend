"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [isLoading ,setIsLoading] = useState(false);
  const router = useRouter();  
  const [isData , setIsData ] = useState({
    email:'',
    password:''
  })
  const handleChange = (e) => {
    setIsData({
        ...isData ,
        [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setIsLoading(true)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/login`, isData);
      router.push('/admin/enquiry')
      console.log("aa gya" , response.data.token);
      const token = response.data.token;
      Cookies.set("authToken", token, { expires: 1 }); // Expires in 7 days
      setIsLoading(false)
    }
    catch(err){
      setIsLoading(false)
        console.log("error hai" , err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
          Welcome Back!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={isData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={isData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Login{isLoading && "...."}
          </button>
        </form>
        <div className="mt-4 text-center">
          {/* <p className="text-gray-600">
           {" Don't have an account?"}{" "}
            <a href="/signup" className="text-green-600 font-medium hover:underline">
              Sign up
            </a>
          </p> */}
          {/* <p className="mt-2">
            <a href="/forgot-password" className="text-green-600 font-medium hover:underline">
              Forgot your password?
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}
