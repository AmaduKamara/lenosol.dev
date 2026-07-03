"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPlus, FaCircle } from "react-icons/fa";
import project from "@/app/images/project.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Web Platform",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    title: "Mobile App Solution",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    title: "Enterprise Software",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
];

const CaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className='pt-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-12'>
          <p className='text-cyan-400 font-bold uppercase tracking-widest text-sm'>
            Our Completed Projects
          </p>
          <h2 className='text-white font-bold text-3xl md:text-5xl mt-3'>
            Explore Our Most <br />
            <span className='font-thin text-slate-300'>
              Successful Project Case Studies
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className='relative w-full overflow-hidden'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className='flex'
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((projectItem) => (
              <div
                key={projectItem.id}
                className='w-full shrink-0 flex flex-col md:flex-row gap-12 items-center p-6 md:p-16 border border-slate-700 bg-[#1d2d31]'
              >
                <div className='md:w-1/2'>
                  <p className='text-cyan-400 font-bold'>
                    Case Study #{projectItem.id}
                  </p>
                  <Link href={`/projects/${projectItem.id}`}>
                    <h4 className='text-3xl md:text-4xl font-bold mt-4 text-white hover:text-cyan-400 transition-colors'>
                      {projectItem.title}
                    </h4>
                  </Link>
                  <p className='mt-6 text-slate-300 leading-8 text-lg'>
                    {projectItem.desc}
                  </p>
                  <div className='mt-8'>
                    <Link
                      href={`/projects/${projectItem.id}`}
                      className='inline-flex items-center gap-2 text-white border border-slate-500 py-3 px-6 rounded-full hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-500'
                    >
                      <FaPlus /> Read More
                    </Link>
                  </div>
                </div>
                <div className='md:w-1/2 w-full'>
                  <Image
                    src={project}
                    alt={projectItem.title}
                    className='w-full h-auto rounded-lg shadow-2xl'
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Indicators */}
          <div className='flex justify-center items-center mt-10 gap-4'>
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 ${
                  currentIndex === idx
                    ? "text-cyan-500 scale-125"
                    : "text-slate-500"
                }`}
              >
                <FaCircle size={12} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
