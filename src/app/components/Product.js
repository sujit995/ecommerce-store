"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/CartReducer';


const Product = ({item}) => {

  const dispatch = useDispatch();
  const [added, setAdded] = useState(false)
  const addItemToCart = (item) => {
    setAdded(true)
    dispatch(addToCart(item))
  }
  return (
    <div className="relative flex border flex-col bg-white m-5 p-3">
    <div className="flex justify-center">
        {/* <Image className="object-contain h-32 w-32" fill={true} alt="product_image" src={item?.images[0]} /> */}
        <img className="object-contain h-32 w-32" src={item?.images[0]} alt="product_image"/>
    </div>
    <h4 className="text-xs text-yellow-500 mt-1">{item?.rating?.rate}rating</h4>
    <p className="text-xs line-clamp-2 mt-1">{item?.description}</p>
    <h3 className="text-md font-semibold mt-1">₹{item?.price}</h3>
    <button onClick={() => addItemToCart(item)} className="p-2 mt-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400">
      {added ? "Added to Cart" : "Add to Cart"}
    </button>
</div>
  )
}

export default Product