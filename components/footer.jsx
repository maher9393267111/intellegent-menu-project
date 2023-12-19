import React from 'react'
import Link from "next/link";
import { SocialMediaUrls } from "../utils/content.json";


// icons
import { MdLocalPostOffice as MailIcon } from "react-icons/md";
import {
  FaInstagram as InstagramIcon,
  FaFacebook as FaceIcon
} from "react-icons/fa";
import { BsTwitter as TwitterIcon } from "react-icons/bs";


export default function Footer() {
  return (
  
          <footer className="p-4 bg-white sm:p-6 dark:bg-dark-900">
            <div className="mx-auto max-w-screen-xl">
          
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-dark-100 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                   {new Date().getFullYear()}{" "}
                  <Link href="/">
               @     {/* Tadashi */}
                  </Link>
                  جميع الحقوق محفوظة
                 
                </span>
                <div className="flex mt-4 gap-4 sm:justify-center sm:mt-0">
             <a
              className="text-gray-500 hover:text-pink-400 transition-all "
               target="_blank"
               href={SocialMediaUrls.Instagram || undefined}                rel="noreferrer nofollow"
              title="Instagram"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="w-6 h-6" />
           </a> 


           <a
               className="text-gray-500 hover:text-blue-600 transition-all "
               target="_blank"
               href={SocialMediaUrls.Facebook || undefined} 
               rel="noreferrer nofollow"
              title="Instagram"
             >
               <span className="sr-only">Face</span>
              <FaceIcon className="w-6 h-6" />
             </a>
                
                  <a
                    className="text-gray-500 text-xs"
                    target="_blank"
                    href={SocialMediaUrls.website || undefined} 
                    rel="noreferrer nofollow"
                    title="Portfolio"
                  >
                    <span className="sr-only">Portfolio</span>
                    <img
                      src="https://www.getmenu.ps/assets/img/logo_2.png"
                      className="w-6 h-6 aspect-square rounded-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        );
      




  
}
