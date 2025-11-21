import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
       
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">Patil Sarees</h2>
          <p className="text-black-700 leading-relaxed text-gray-500">
            The best place to find premium traditional & designer sarees.
            Quality, elegance, and trust—everything in one place.
          </p>

          
          <div className="flex gap-4 mt-5">
            <a href="#" className="bg-black-700 hover:bg-pink-600 p-2 rounded-full">
              <FaFacebookF className="text-black text-lg" />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-pink-600 p-2 rounded-full">
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-green-600 p-2 rounded-full">
              <FaWhatsapp className="text-white text-lg" />
            </a>
          </div>
        </div>

       
        <div>
          <h3 className="text-black text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-black"><a href="/">Home</a></li>
            <li className="hover:text-black"><a href="/about">About Us</a></li>
            <li className="hover:text-black"><a href="/gallery">Gallery</a></li>
            <li className="hover:text-black"><a href="/contact">Contact</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-black text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-black">Silk Sarees</li>
            <li className="hover:text-black">Paithani Sarees</li>
            <li className="hover:text-black">Banarasi Sarees</li>
            <li className="hover:text-black">Wedding Collection</li>

          </ul>
        </div>

        <div>
          <h3 className="text-black text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-black-400">
            <li>
              📍 <span className="ml-1 text-gray-500">Patil Sarees, Satana, Maharashtra</span>
            </li>
            <li>
              📞 <a href="tel:9876543210" className="text-gray-500 hover:text-black ml-1 ">+91 98765 43210</a>
            </li>
            <li>
              ✉️ <a href="mailto:info@patilsarees.com" className="text-gray-500 hover:text-black ml-1">
                info@patilsarees.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Patil Sarees. All Rights Reserved.
      </div>
    </footer>
  );
}
