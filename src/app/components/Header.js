"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/CartReducer";

import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
  const session = useSession()
  const cart = useSelector((state) => state.cart.cart);
  const quantity = cart
    ?.map((item) => item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <header className="bg-black py-4 drop-shadow-md">
      <div className="text-white mx-auto max-w-7xl px-4 flex items-center justify-between">
        <div>
          <Link href="/">
            <span className="text-xl cursor-pointer font-bold ml-2">
              e-<span className="text-orange-500 font-bold">Mart</span>
            </span>
          </Link>
        </div>
        <div className="hidden sm:flex flex-row space-x-4">
          <p>Offers</p>
          <p>Products</p>
          <p>Deals</p>
        </div>
        <div className="flex items-center space-x-4">
        {
          session.status === "authenticated" ? (
            <button onClick={() => signOut("google")}>Logout</button> 
          ) : (
            <button onClick={() => signIn("google")}>Login with Google</button>
          )
        }
        <Link href="/cart">
            <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
          </Link>
          <span className="absolute text-red-500 right-10 bottom-7">
            {quantity}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
