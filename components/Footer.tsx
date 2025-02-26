'use client';

import { FaInstagram, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-white mt-11 text-gray-700 border-t border-gray-300">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300 pb-10">
        {/* Company Description */}
        <div>
          <h2 className="text-xl font-bold text-black">
            Health<span className="text-red-500">Care</span>
          </h2>
          <p className="mt-3 text-sm">
            We are honored to be a part of your healthcare journey and committed to delivering compassionate, personalized, and top-notch care every step of the way.
          </p>
          <p className="mt-2 text-sm">
            Trust us with your health, and let us work together to achieve the best possible outcomes for you and your loved ones.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-red-500">About Us</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Work With Us</li>
            <li>Our Blog</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-red-500">Services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Search Terms</li>
            <li>Advance Search</li>
            <li>Privacy Policy</li>
            <li>Suppliers</li>
            <li>Our Stores</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-red-500">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><MdLocationOn className="text-red-500" /> 123, London Bridge Street, London</li>
            <li className="flex items-center gap-2"><MdEmail className="text-red-500" /> support@care.com</li>
            <li className="flex items-center gap-2"><MdPhone className="text-red-500" /> (+012) 3456 789</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white text-black text-center py-3 flex flex-col md:flex-row justify-between items-center px-6 border-t border-gray-300">
        <p className="text-sm font-bold">Copyright © 2025 Web Design Mastery. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <FaInstagram className="cursor-pointer hover:text-red-700" />
          <FaFacebook className="cursor-pointer hover:text-blue-700" />
          <FaTwitter className="cursor-pointer hover:text-blue-700" />
          <FaHeart className="cursor-pointer hover:text-red-700" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
