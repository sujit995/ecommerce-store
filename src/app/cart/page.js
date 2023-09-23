"use client";
import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/CartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const session = useSession();
  const stripePromise = loadStripe(
    "pk_test_51IDLm4CaTlxfMmIEiqlMxh4CuToLCLnBsTpsfRmfvzDIHxjfg8iujPMeuV0Lp5wc2ZPXyyD1Ywcd2RhCqAwqtPeG001vo3aoDL"
  );
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const grandTotal = total + 65;

  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  const deleteItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleCheckout = async () => {
    if (session.status === "authenticated") {
      try {
        const stripe = await stripePromise;
        const response = await fetch("/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
          body: JSON.stringify({ body: cart }),
        });

        const data = await response.json();
        if (data.session) {
          stripe?.redirectToCheckout({ sessionId: data?.session.id });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please Login to Proceed");
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
        <div className="relative grid grid-cols-8 h-screen bg-gray-200 gap-8">
          <div className="flex flex-col col-span-5 mt-16 ml-20">
            <h2 className="text-xl font-bold">Your cart is here</h2>
            {cart?.map((item, index) => {
              return (
                <div
                  className="border rounded-md p-3 bg-white shadow-md flex flex-row space-x-4 my-4"
                  key={index}
                >
                  <Image
                    width={80}
                    height={80}
                    objectFit={"contain"}
                    src={item?.images[0]}
                    styles={{ height: "auto", width: "auto" }}
                    alt="cart_image"
                  />

                  <div className="flex-grow">
                    <p className="text-sm line-clamp-2">{item?.title}</p>
                    <p className="text-xl font-semibold">
                      Price : Rs {item?.price}
                    </p>
                    {item?.description ? (
                      <p className="text-xs line-clamp-2 font-normal">
                        {item?.description}
                      </p>
                    ) : (
                      <div>
                        <p className="text-sm line-clamp-2 font-normal">
                          Color : {item?.color}
                        </p>
                        <p className="text-sm line-clamp-2 font-normal">
                          Size : {item?.size}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-grow space-x-2 mt-1 text-xs font-semibold text-cyan-600 cursor-pointer">
                      <p onClick={() => deleteItem(item)}>Delete</p>
                      <p>Save for later</p>
                      <p>See more like this</p>
                      <p>Share</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <MinusCircleIcon
                        onClick={() => decreaseQuantity(item)}
                        className="h-6 w-6 text-grey-500 cursor-pointer"
                      />
                      <span>{item?.quantity}</span>
                      <PlusCircleIcon
                        onClick={() => increaseQuantity(item)}
                        className="h-6 w-6 text-grey-500 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-span-2 mt-16">
            <h3 className="mb-2">Choose a delivery Address</h3>
            <div>
              <div className="bg-white p-4 rounded-sm">
                <h4 className="text-xs text-gray-400">Select Location</h4>
                <p className="text-xs text-gray-400">
                  Please select location, so that we can find a place that
                  delivers to you
                </p>
                <button className="rounded-sm py-2 mt-2 text-sm font-semibold text-gray-600">
                  Add Address
                </button>
              </div>
            </div>
            <h3 className="mt-4">Offers</h3>
            <div>
              <div className="bg-white p-4 rounded-sm">
                <h4 className="text-xs text-gray-400">Apply Coupon</h4>
                <p className="text-xs text-gray-400">
                  Get Placeout with your order
                </p>
              </div>
            </div>
            <h1 className="mt-1">Price details</h1>
            <div className="bg-white rounded-sm mt-2 p-3 space-y-3">
              <div className="flex item-center justify-between">
                <h4 className="text-xs">Sub Total</h4>
                <p className="text-sm font-normal">Rs {total}</p>
              </div>
              <div className="flex item-center justify-between">
                <h4 className="text-xs">Discount</h4>
                <p className="text-sm font-normal">--</p>
              </div>
              <div className="flex item-center justify-between">
                <h4 className="text-xs">Taxes and Charges</h4>
                <p className="text-sm font-normal">Rs 65</p>
              </div>
              <hr className="w-full mt-1 decotaion-dotted" />
              <div className="flex item-center justify-between">
                <h4 className="text-xs">Grand Total</h4>
                <p className="text-sm font-normal">Rs {grandTotal}</p>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-yellow-500 text-center font-normal text-white rounded-md py-2 px-3 w-full"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Cart;
