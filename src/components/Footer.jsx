import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-primary text-gray-600 dark:text-gray-300">
      <div className="max-w-screen-xl mx-auto p-4 py-8 lg:py-12">
        <div className="md:flex md:justify-between md:space-x-12">
          {/* Logo and Description */}
          <div className="mb-10 md:mb-0 md:w-1/2">
          <img 
  src={assets.logo1} 
  alt="Stage Cafe Logo" 
  className="h-20 mb-4 transition duration-300 dark:invert dark:brightness-200" 
/>

            <p className="max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="hover:text-gray-900 dark:hover:text-white">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-900 dark:hover:text-white">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-900 dark:hover:text-white">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900 dark:hover:text-white">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:w-1/2">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Quality</a></li>
                <li><a href="#" className="hover:underline">Help</a></li>
                <li><a href="#" className="hover:underline">Share</a></li>
                <li><a href="#" className="hover:underline">Work</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:12345678910" className="hover:underline">123-4567-8910</a></li>
                <li><a href="mailto:stagecafe@food.com" className="hover:underline">stagecafe@food.com</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>© 2023 Stage Cafe™. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
