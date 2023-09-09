"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const HeroBanner = () => {
  const card = [
    {
      id: "0",
      description: "Starting ₹99 | Start your fitness journey",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg",
    },
    {
      id: "1",
      description: "Diapers & wipes | Starting ₹99",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/PC_CC_379x304V1._SY304_CB616418989_.jpg",
    },
    {
      id: "2",
      description: "Baby diapers & wipes at great prices",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/CC_Rev1x._SY304_CB594433898_.jpg",
    },
    {
      id: "3",
      description: "Up to 60% off | Styles for men",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/apparel/wave3/men/postw3/Under599_SBC-Text-8.jpg",
    },
  ];

  return (
    <div className="relative">
      <Carousel
        dynamicHeight={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <Image
            alt="carousel_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img12/home-improvement/HMDGATEWAYS/Aug-HMD---Hero-2_3000x1200-N-2._CB598590461_.jpg"
            height={600}
            width={1800}
          />
        </div>
        <div>
          <Image
            alt="carousel_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg"
            height={600}
            width={1800}
          />
        </div>
        <div>
          <Image
            alt="carousel_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Aug_23/MFD/Shoes/unrec/3000._CB598492396_.jpg"
            height={600}
            width={1800}
          />
        </div>
      </Carousel>
      <div className="hidden py-10 px-10 lg:flex flex-row absolute space-x-3 -mt-[300px]">
        {card?.map((item, index) => (
          <div
            className="p-4 bg-white w-full border shadow-md flex flex-col space-y-3"
            key={index}
          >
            <div className="font-bold text-xl">{item?.description}</div>
            <Image src={item?.image} alt="item_image" height={400} width={400} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
