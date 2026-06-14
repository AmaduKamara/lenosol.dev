"use client";

import Image from "next/image";
import MissionVision from "./toggle-mission-vision";
import React, { useState } from "react";

type FaqItem = {
  title: string;
  content: React.ReactNode;
};

type FaqsProps = {
  data: FaqItem[];
};

import amkam from "@/app/images/Amkam.jpg";

const Faqs: React.FC<FaqsProps> = ({ data }) => {
  // First item open by default
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='py-10 flex gap-32 container mx-auto mt-16 '>
      <div className='w-5/9 md:pl-10 lg:pl-32'>
        <p className='text-slate-200 text-xl font-bold'>
          Growth & Development Mindset
        </p>
        <h2 className='text-slate-100 font-bold text-2xl md:text-3xl lg:text-5xl mt-3'>
          Modern Technology and
          <br />
          <span className='font-thin'>Advancement Incentives</span>{" "}
        </h2>

        <div>
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

      <div className='w-4/9'>
        <Image src={amkam} alt='Amkam' />
      </div>
    </div>
  );
};

export default Faqs;
