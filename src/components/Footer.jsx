import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        

<footer class="bg-white dark:bg-primary">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-8 md:mb-0">
                  <img className='h-20' src={assets.logo1} />

                    {/* Social Media Icons */}
                    <div className="flex gap-1 sm:justify-center mt-6">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaFacebookF className="w-6 h-6" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaTwitter className="w-6 h-6" />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaYoutube className="w-6 h-6" />
                            <span className="sr-only">Youtube</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaLinkedin className="w-6 h-6" />
                            <span className="sr-only">Linkdin</span>
                        </a>
                    </div>
          </div>


          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="" class="hover:underline">Qualtiy</a>
                      </li>
                      <li class="mb-4">
                          <a href="" class="hover:underline">Help</a>
                      </li>
                      <li class="mb-4">
                          <a href="" class="hover:underline">Share</a>
                      </li>
                      <li class="mb-4">
                          <a href="" class="hover:underline">Work</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="" class="hover:underline ">123-4567-8910</a>
                      </li>
                      <li>
                          <a href="" class="hover:underline">stagecafe@food.com</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Terms & Conditions</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Stage Cafe™. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

    </div>
  )
}

export default Footer