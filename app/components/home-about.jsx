"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

import ClientStats from "./client-stats";
import Faqs from "./faqs";
import lenosolLogo from "@/app/images/lonosol-logo.png";
import amkam from "@/app/images/Amkam.jpg";

const data = [
  {
    title: "Our Mission",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dignissimos possimus libero voluptas dolor facilis dolorum fugit vitae dolores enim dicta, minima unde, quasi veniam repudiandae,iure voluptate iste reiciendis.",
  },
  {
    title: "Our Vision",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dignissimos possimus libero voluptas dolor facilis dolorum fugit vitae dolores enim dicta, minima unde, quasi veniam repudiandae,iure voluptate iste reiciendis.",
  },
  {
    title: "Our Philosophy",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dignissimos possimus libero voluptas dolor facilis dolorum fugit vitae dolores enim dicta, minima unde, quasi veniam repudiandae,iure voluptate iste reiciendis.",
  },
  {
    title: "Our Strategy",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dignissimos possimus libero voluptas dolor facilis dolorum fugit vitae dolores enim dicta, minima unde, quasi veniam repudiandae,iure voluptate iste reiciendis.",
  },
];

const HomeAbout = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className='py-16 md:py-24 overflow-hidden'>
      {/* Background Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className='font-bold text-[7.2vw] text-center text-slate-500 uppercase'
      >
        Software Development
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10'
      >
        <motion.div variants={itemVariants} className='flex justify-center'>
          <Image
            src={lenosolLogo}
            alt='Lenosol Logo'
            className='max-w-xs md:max-w-sm'
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className='text-cyan-400 font-bold uppercase tracking-widest text-sm'>
            We are Lenosol
          </p>
          <h2 className='text-3xl md:text-5xl font-bold text-white mt-3 leading-tight'>
            Innovative Soft Solutions to <br />
            <span className='font-thin'>Grow your Business</span>
          </h2>
          <p className='text-slate-300 mt-6 leading-relaxed max-w-lg'>
            We help businesses create impactful online experiences, strengthen
            their brand identity, and drive sustainable growth with innovative
            solutions tailored to your unique needs.
          </p>
          <Link href='/services' className='inline-block mt-8'>
            <button className='flex items-center gap-2 bg-cyan-500 py-4 px-8 text-white hover:bg-cyan-600 transition-all'>
              Learn More <MdKeyboardArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Second Section: Achievements */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='container mx-auto px-6 mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'
      >
        <motion.div variants={itemVariants} className='lg:col-span-6 relative'>
          <Image
            src={amkam}
            alt='Achievement'
            className='w-full rounded-lg shadow-2xl'
          />
          <div className='absolute bottom-0 left-0 bg-cyan-500 p-6 md:p-8 flex flex-col justify-center items-center'>
            <h3 className='text-white text-xl font-bold'>
              20+ Trusted Clients
            </h3>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className='lg:col-span-6'>
          <p className='text-cyan-400 font-bold uppercase tracking-widest text-sm'>
            Explore Our Achievement
          </p>
          <h2 className='text-3xl md:text-5xl font-bold text-white mt-3'>
            Premium Tech Solutions <br />
            <span className='font-thin'>Lenosol Tech Agency</span>
          </h2>
          <p className='text-slate-300 mt-6 leading-relaxed'>
            We help businesses create impactful online experiences, strengthen
            their brand identity, and drive sustainable growth.
          </p>

          <div className='flex flex-wrap gap-5 mt-10'>
            <ClientStats
              classname='bg-cyan-500 font-bold text-white'
              count={20}
              text='Global Clients'
            />
            <ClientStats
              classname='bg-cyan-100'
              paraTextColor='text-cyan-900 font-bold'
              count={45}
              text='Completed Projects'
            />
          </div>
        </motion.div>
      </motion.div>

      <div className='mt-24'>
        <Faqs data={data} />
      </div>
    </section>
  );
};

export default HomeAbout;
