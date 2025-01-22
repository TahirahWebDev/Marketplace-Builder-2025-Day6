"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopHeader from "../components/ShopHeader";

const faqs = [
  { question: "How do I place an order?", answer: "To place an order, add items to your cart and proceed to checkout." },
  { question: "What payment methods are accepted?", answer: "We accept credit cards, PayPal, and Apple Pay." },
  { question: "Can I modify my order?", answer: "Once your order is placed, it cannot be modified. Please contact support for assistance." },
  { question: "How do I track my order?", answer: "You can track your order by logging into your account and visiting the 'Orders' section." },
  { question: "How do I return an item?", answer: "To return an item, please visit the 'Returns' page and follow the instructions." },
];

const HelpCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <ShopHeader title="FAQs & Help Center" breadcrumb="FAQs & Help Center" />
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar */}
            <aside className="col-span-12 lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Help Categories</h4>
              <ul className="space-y-4">
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Placing an Order</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Payment Options</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Order Tracking</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Returns & Refunds</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Account Settings</li>
              </ul>
            </aside>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-9 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h3>

              {/* Search Bar */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* FAQ List */}
              <div className="space-y-6">
                {filteredFaqs.length ? (
                  filteredFaqs.map((faq, index) => (
                    <div key={index} className="border-b pb-4">
                      <h4 className="text-lg font-medium text-blue-700 mb-2">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No FAQs match your search.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
