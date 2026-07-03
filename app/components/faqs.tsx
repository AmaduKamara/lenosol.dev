"use client";

import Image from "next/image";
import MissionVision from "./toggle-mission-vision";
import React, { useState } from "react";
import { motion } from "framer-motion";
import amkam from "@/app/images/Amkam.jpg";

type FaqItem = {
  title: string;
  content: React.ReactNode;
};

type FaqsProps = {
  data: FaqItem[];
};

const Faqs: React.FC<FaqsProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='pt-16 px-6 container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center'
    >
      {/* Left Content */}
      <div className='w-full lg:w-1/2'>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='text-cyan-400 font-bold uppercase tracking-widest text-sm'
        >
          Growth & Development Mindset
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-white font-bold text-3xl md:text-5xl mt-3 leading-tight'
        >
          Modern Technology and <br />
          <span className='font-thin'>Advancement Incentives</span>{" "}
        </motion.h2>

        <div className='mt-10'>
          {data.map((item, index) => (
            <MissionVision
              key={index}
              title={item.title}
              content={item.content}
              isOpen={activeIndex === index}
              onToggle={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className='w-full lg:w-1/2'
      >
        <Image
          src={amkam}
          alt='Amkam'
          className='w-full h-auto rounded-xl shadow-2xl object-cover'
        />
      </motion.div>
    </motion.div>
  );
};

export default Faqs;
