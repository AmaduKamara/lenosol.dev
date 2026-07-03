"use client";

import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import amkam from "../images/Amkam.jpg";

const HomeHero = () => {
  return (
    <section className='min-h-screen py-10 px-6 md:px-16 lg:px-24 flex flex-col justify-center home-hero bg-[#18262a]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className='text-cyan-400 font-medium mb-2'>Welcome to Lenosol</p>
        <h1 className='text-4xl md:text-5xl lg:text-7xl text-slate-50 leading-tight font-bold'>
          NextGen Tech <br />
          <span className='font-thin'>
            and{" "}
            <span className='bg-cyan-50 text-gray-800 px-2'>
              DIGITAL SOFTWARE
            </span>{" "}
            Solutions Experts
          </span>
        </h1>
      </motion.div>

      <div className='flex flex-col lg:flex-row gap-10 mt-10 items-center'>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full lg:w-2/5'
        >
          <p className='text-slate-100 text-lg leading-relaxed'>
            We&apos;re a software design agency on a mission to bridge the gap
            between businesses, organizations and Innovation through custom
            software and automations.
          </p>

          <hr className='my-8 border-slate-600' />

          <div className='flex gap-16'>
            <div>
              <h2 className='text-4xl lg:text-6xl text-slate-50 font-bold mb-1'>
                20+
              </h2>
              <p className='text-slate-400'>Happy Clients</p>
            </div>
            <div>
              <h2 className='text-4xl lg:text-6xl text-slate-50 font-bold mb-1'>
                8+
              </h2>
              <p className='text-slate-400'>Years Experience</p>
            </div>
          </div>

          <div className='mt-8'>
            <Link href='/services' className='inline-block'>
              <button
                type='button'
                className='flex items-center cursor-pointer py-4 px-8 bg-cyan-500 text-white border border-cyan-500 hover:bg-transparent transition-all ease-in-out duration-300'
              >
                Explore Our Services <MdKeyboardArrowRight size={20} />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='w-full lg:w-3/5'
        >
          <Image
            src={amkam}
            alt='Amkam'
            className='w-full h-auto rounded-lg shadow-2xl'
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
