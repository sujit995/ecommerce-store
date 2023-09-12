import React from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/CartReducer";

const Header = () => {

  const cart = useSelector((state) => state.cart.cart);
  const quantity = cart
    ?.map((item) => item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <header className="bg-white py-4 drop-shadow-md">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
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
        <div className="flex items-center">
          {/* <button className="hidden md:inline-block text-orange-500 border border-orange-500 px-4 py-2 rounded hover:text-orange-300">
            Your Cart
          </button> */}
          <Link href="/cart">
            <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
          </Link>
          <span className="absolute text-red-500 right-10 bottom-7">{quantity}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
