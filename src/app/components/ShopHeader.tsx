import React from "react";

type ShopHeaderProps = {
  title: string;
  breadcrumb: string;
};

const ShopHeader: React.FC<ShopHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/shopHeader.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-2 text-sm text-black">
          <span className="font-medium">Home</span> &gt; <span className="text-gray-600">{breadcrumb}</span>
        </p>
      </div>
    </div>
  );
};

export default ShopHeader;
