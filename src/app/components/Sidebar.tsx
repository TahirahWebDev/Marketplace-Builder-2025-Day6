import React from "react";
import { FaTimes } from "react-icons/fa";

interface SidebarProps {
  show: boolean;
  onClose: () => void;
  cartItems: { name: string; price: string; quantity: number }[];
  removeItem: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ show, onClose, cartItems, removeItem }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-[368px] h-[100vh] bg-white shadow-lg p-8 transition-all duration-300 ${show ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ opacity: show ? 1 : 0 }}
    >
      {/* Close Sidebar */}
      <div className="flex justify-end">
        <button onClick={onClose} className="text-2xl font-bold text-gray-700">
          &times;
        </button>
      </div>

      {/* Sidebar Title */}
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-semibold">{item.name}</span>
              <span className="ml-2 text-sm text-gray-600">({item.quantity})</span>
            </div>
            <button
              onClick={() => removeItem(item.name)}
              className="text-red-600 text-lg"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>

      {/* Buttons: Cart Checkout, Comparison */}
      <div className="mt-6 flex flex-col gap-4">
        <button
          onClick={() => window.location.href = "/cart"}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded"
        >
          Cart Checkout
        </button>
        <button
          onClick={() => window.location.href = "/compare"}
          className="w-full py-2 bg-yellow-600 text-white font-semibold rounded"
        >
          Comparison
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
