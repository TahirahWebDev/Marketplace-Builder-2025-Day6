import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <div>
            <h2 className="text-lg font-bold text-black">Funiro.</h2>
            <p className="text-gray-500 mt-4">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-500 font-semibold">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-black hover:text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-600">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-500 font-semibold">Help</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-black hover:text-gray-600">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-600">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-600">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-500 font-semibold">Newsletter</h3>
            <div className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border-b border-gray-300 py-2 px-4 text-gray-700 focus:outline-none focus:ring-0 focus:border-gray-500"
              />
              <button className="mt-4 sm:mt-0 sm:ml-4 underline px-4 rounded-r-md">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-4">
          <p className="text-sm">© 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
