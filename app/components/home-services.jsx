"use client";
import React from "react";
import Link from "next/link";
import { FaPlus, FaComputer } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";
import webDesign from "@/app/images/Lenosol-Web-Design.jpg";

const services = [
  {
    title: "Web Design",
    desc: "Create stunning, modern, and user-friendly websites.",
  },
  {
    title: "Web Development",
    desc: "Develop fast, secure, and scalable web applications.",
  },
  {
    title: "Hosting & SEO",
    desc: "Secure your identity with reliable hosting and SEO.",
  },
  {
    title: "Maintenance",
    desc: "Keep your website secure, up-to-date, and functional.",
  },
  {
    title: "UI/UX Design",
    desc: "Expert design that combines visuals with functionality.",
  },
  {
    title: "Tech Consulting",
    desc: "Strategic insights to drive innovation and growth.",
  },
  {
    title: "IT Training",
    desc: "Personalized, hands-on learning for your career.",
  },
  { title: "Branding", desc: "Memorable brand identity that resonates." },
];

const HomeServices = () => {
  return (
    <section className='py-20 px-6 bg-[#18262a]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-center mb-16'
      >
        <h2 className='text-[7.9vw] font-bold text-slate-400'>
          Explore <span className='text-cyan-200'>Popular</span>{" "}
          <span className='text-cyan-500'>Services</span>
        </h2>
      </motion.div>

      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className='p-8 border border-slate-700 hover:border-cyan-500 transition-colors bg-[#1d2d31] group'
          >
            <FaComputer className='text-cyan-500 mb-4' size={40} />
            <h3 className='text-xl text-white font-semibold mb-2'>
              {service.title}
            </h3>
            <p className='text-slate-300 text-sm leading-6 mb-6'>
              {service.desc}
            </p>

            <Image
              src={webDesign}
              alt={service.title}
              className='w-full h-32 object-cover mb-6 grayscale group-hover:grayscale-0 transition-all'
            />

            <Link
              href='#'
              className='inline-flex items-center gap-2 text-white border border-slate-600 rounded-full py-2 px-5 hover:bg-cyan-500 hover:border-cyan-500 transition-all'
            >
              <FaPlus /> Read More
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className='bg-cyan-600 py-8 mt-20 rounded-lg cursor-pointer'
      >
        <p className='text-center text-xl md:text-2xl text-white tracking-wider'>
          Let&apos;s{" "}
          <span className='underline italic font-bold'>Talk and Start</span> IT
          Consultations
        </p>
      </motion.div>
    </section>
  );
};

export default HomeServices;
