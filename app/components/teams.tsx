"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPlus,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import teamMember1 from "@/app/images/team-member.png";

const teamData = [
  { name: "Amadu Kamara", role: "C.E.0 & Founder" },
  { name: "Samuel Amkam", role: "C.T.O & Lead Developer" },
  { name: "Ejatu Bah", role: "H.R Manager" },
];

const Teams = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className='container mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row gap-12'>
      {/* Heading Section */}
      <div className='lg:w-1/3 pt-4'>
        <p className='text-cyan-400 font-bold uppercase tracking-widest text-sm'>
          Our Professional Team
        </p>
        <h2 className='text-white font-bold text-3xl md:text-5xl mt-3 leading-tight'>
          Meet Our Experience <br />
          <span className='font-thin text-slate-300'>Members</span>
        </h2>
        <div className='mt-8'>
          <Link
            href='/team'
            className='inline-block bg-cyan-500 py-4 px-8 text-white hover:bg-cyan-600 transition-all'
          >
            View Our Teams <MdKeyboardArrowRight size={20} className='inline' />
          </Link>
        </div>
      </div>

      {/* Team Grid */}
      <div className='lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {teamData.map((member, index) => (
          <div
            key={index}
            className='border border-gray-600 p-3 pb-6 bg-[#1d2d31]'
          >
            <Image
              src={teamMember1}
              alt={member.name}
              className='w-full grayscale hover:grayscale-0 transition-all duration-500'
            />

            <div className='flex justify-center relative h-12 -mt-6'>
              <button
                onClick={() => setActiveId(activeId === index ? null : index)}
                className='w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors'
              >
                {activeId === index ? <FaTimes /> : <FaPlus />}
              </button>

              <AnimatePresence>
                {activeId === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className='absolute bottom-16 bg-cyan-600 py-3 px-5 flex items-center gap-4 shadow-xl z-10'
                  >
                    {[FaFacebook, FaLinkedinIn, FaX, FaYoutube].map(
                      (Icon, i) => (
                        <Link
                          key={i}
                          href='#'
                          className='text-white hover:text-cyan-200'
                        >
                          <Icon size={18} />
                        </Link>
                      ),
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className='mt-6 text-center'>
              <h4 className='text-xl text-white font-bold'>{member.name}</h4>
              <p className='text-cyan-400 text-sm mt-1'>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
