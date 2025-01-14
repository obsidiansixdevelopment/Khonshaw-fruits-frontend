"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Enquiry() {
  const arr = ["","","","","","","","","",""]
  const [isData , setIsData] = useState([]);
  const isFetch = async () => {
    try{
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/enquiry`);
      console.log(res.data.data , "done");
      setIsData(res.data.data)
    }
    catch(err){
      console.log(err , "Error hai");
    }
  }
  useEffect(() => {
    isFetch();
  },[])
    

  return (
    <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-primary-main">
      <tr>
        <th scope="col" className="px-6 py-3">
        Fresh Grocery Market
        </th>
        <th scope="col" className="px-6 py-3">
        Phone number
        </th>
        <th scope="col" className="px-6 py-3">
        Fruits Importer
        </th>
        <th scope="col" className="px-6 py-3">
          Date
        </th>
      </tr>
    </thead>
    <tbody>
      {
        isData.map((ele,i) => (
        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {ele.description}
          </th>
          <td className="px-6 py-4">{ele.number}</td>
          <td className="px-6 py-4">{ele.fruit}</td>
          <td className="px-6 py-4">{new Date(ele.createdAt).toDateString()}</td>
        </tr>

        ))
      }
    </tbody>
  </table>
</div>

  )
}
