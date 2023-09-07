"use client";
import React, { useState, useEffect } from "react";
import Product from "./Product";

function ProductFeed() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products");
          const result = await response.json();
          setData(result.products);
          console.log(result.products);
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        fetchData();
      }, [])


  return (
    <div className="mx-6 mt-8 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
     {data.map((item, index) => {
        return (
         <Product key={index} item={item} />
        );
      })}
    </div>
  );
}

export default ProductFeed;
