"use client"
import Deals from "@/app/components/Deals";
import Header from "@/app/components/Header";
import HeroBanner from "@/app/components/HeroBanner";
import ProductFeed from "@/app/components/ProductFeed";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";


export default function Home() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <div>
        <Header />
        <HeroBanner />
        <Deals />
        <ProductFeed />
        <Footer />
    </div>
  )
}
