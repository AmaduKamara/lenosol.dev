"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import TopBar from "./top-bar";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import lenosol from "../images/lenosol.png";

const NavigationHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className='sticky top-0 z-[100] bg-[#18262a] shadow-2xl'>
      <TopBar />
      <div className='border-t border-b border-gray-600 px-6 md:pl-16 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center gap-5'>
          <div className='border-r w-32 md:w-42 border-slate-200 py-2'>
            <Link href='/'>
              <Image src={lenosol} alt='Lenosol' className='w-24 md:w-32' />
            </Link>
          </div>

          <ul className='hidden lg:flex gap-8 pl-6'>
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`font-semibold transition-colors ${
                      isActive
                        ? "text-cyan-500"
                        : "text-white hover:text-cyan-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='flex gap-5 items-center'>
          <Link
            href='/quote'
            className='hidden md:flex bg-cyan-500 py-3 px-6 text-white items-center border border-cyan-500 hover:bg-transparent transition-all duration-300'
          >
            Get a Quote <MdKeyboardArrowRight size={20} />
          </Link>

          <button
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            className='md:bg-slate-50 text-white md:text-cyan-900 px-4 py-4 md:px-6 cursor-pointer'
          >
            {isOpen ? <CgClose size={24} /> : <CgMenuRight size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='hidden lg:block absolute left-0 w-full bg-[#18262a] border-b border-gray-600 shadow-xl overflow-hidden'
          >
            <div className='container mx-auto p-12 flex gap-20 text-white'>
              {["Web Design", "Development", "Coding Bootcamp"].map((title) => (
                <div key={title}>
                  <h3 className='text-cyan-500 font-bold mb-4'>{title}</h3>
                  <p className='text-slate-400'>
                    Professional solutions for your business.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile/Tablet Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className='lg:hidden fixed top-0 right-0 h-full w-75 bg-[#18262a] z-[110] p-10 shadow-2xl flex flex-col items-end'
          >
            <button
              onClick={() => setIsOpen(false)}
              className='text-white mb-10'
            >
              <CgClose size={30} />
            </button>
            <ul className='flex flex-col gap-6 text-xl text-right'>
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={
                      pathname === item.href ? "text-cyan-500" : "text-white"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationHeader;
