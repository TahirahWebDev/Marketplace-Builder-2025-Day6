import React from "react";
import { FaTrophy, FaShippingFast, FaHeadset } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const FeatureBar = () => {
  const features = [
    {
      icon: <FaTrophy className="text-3xl text-black" />,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      icon: <MdVerified className="text-3xl text-black" />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <FaShippingFast className="text-3xl text-black" />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: <FaHeadset className="text-3xl text-black" />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full bg-[#fdf6ee] mt-12 mb-8 py-8 px-16">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center space-y-2">
          <div>{feature.icon}</div>
          <h3 className="text-black font-semibold text-lg">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureBar;
