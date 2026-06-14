import React from "react";
import TopBar from "./top-bar";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

import lenosol from "../lenosol-logo-white.png";

const NavigationHeader = () => {
  return (
    <header className='sticky top-0 z-100 bg-[#18262a] shadow-2xl'>
      <TopBar />
      <div className='border-t border-b border-gray-600 pl-16 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center gap-5'>
          <div className='border-r w-42 border-slate-200'>
            <Link href='/'>
              <Image src={lenosol} alt='Lenosol' className='w-32' />
            </Link>
          </div>

          {/* Nav links */}
          <ul className='flex gap-5 pl-6'>
            <li>
              <Link href='/' className='text-white font-semibold'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='text-white font-semibold'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='/services' className='text-white font-semibold'>
                Services
              </Link>
            </li>
            <li>
              <Link href='/portfolio' className='text-white font-semibold'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href='/projects' className='text-white font-semibold'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='/blog' className='text-white font-semibold'>
                Blog
              </Link>
            </li>
            <li>
              <Link href='/contact' className='text-white font-semibold'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex gap-5 items-center'>
          <Link
            href='/quote'
            className='bg-cyan-500 py-3 px-6 text-white flex items-center border border-cyan-500 hover:bg-transparent transition-all ease-in-out duration-300'
          >
            Get a Quote
            <MdKeyboardArrowRight size={20} className='text-white' />
          </Link>

          <button
            type='button'
            className=' bg-slate-50 px-6 py-4 border-2 hover:bg-slate-200 cursor-pointer'
            title='Open menu'
          >
            <CgMenuRight size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
