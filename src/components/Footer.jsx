import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 pt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Connect with us</h2>
          <p className="text-gray-300">
            Here you get your needy solutions for creating your apps and website
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
          <ul>
            <li>
              <a href="/" className="hover:underline text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/getting" className="hover:underline text-gray-300">
                Getting Start
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Follow us</h2>
          <ul className="flex space-x-4">
            <li>
              {" "}
              <FaFacebookF className="text-blue-500"></FaFacebookF>{" "}
              <a href="" className="hover:underline text-gray-300">
                Facebook
              </a>
            </li>
            <li>
                <FaTwitter className="text-sky-500"></FaTwitter>
              <a href="" className="hover:underline text-gray-300">
                Twitter
              </a>
            </li>
            <li>
                <FaInstagram className="text-orange-500"></FaInstagram>
              <a href="" className="hover:underline text-gray-300">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-t border-gray-600 p-4 text-center mt-6">
        <p className="text-white">© 2025 Copyrignt. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
