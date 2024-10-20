"use client"
import React from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
  return (
    <div className="h-full py-8 bg-gray-200 px-36">
      <div className="flex text-center space-y-5 mt-auto justify-between items-center">

        <div>
          <div>
            <Link href="/">
              <div className="px-8 py-4 bg-white rounded-xl text-right flex space-x-2 text-yellow-500">
                <div className="flex flex-col justify-end drop-shadow-xl">
                  <h className="text-3xl font-extrabold">CRICKETKOSH.COM</h>
                  <p className="text-xl">Its all about cricket</p>
                </div>
              </div>
            </Link>
          </div>
        </div>


        <div className='flex flex-col px-4 items-start list-none space-y-6 text-left text-lg'>

                    <Link href="/"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${usePathname === '/' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>মুখ্যপৃষ্ঠা</li></Link>
                    <Link href="/editorial"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${pathname === '/editorial' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>সম্পাদকীয়</li></Link>
                    <Link href="/review"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${pathname === '/review' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>পৰ্য্যালোচনা</li></Link>
                    <Link href="/monthwiseblog"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${pathname === '/monthwiseblog' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>এই সংখ্যাৰ বিশেষ</li></Link>
                    <Link href="/quiz"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${pathname === '/quiz' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>কুইজ</li></Link>
                    <Link href="/blog"><li className={`hover:text-black hover:scale-105 duration-300 drop-shadow-2xl ${usePathname === '/blog' ? 'text-yellow-500 scale-110 drop-shadow-lg' : ''} hover:scale-105`}>প্ৰবন্ধসমূহ</li></Link>
                    
                    
                    </div>


      </div>


      <div className="my-16 mx-auto text-center">
        <p className="text-neutral-500 text-xl mt-12">
          &copy; All rights reserved by{" "}
          <span className="text-yellow-500">Cricketkosh.com</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
