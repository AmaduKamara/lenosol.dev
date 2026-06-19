"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaPlus, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

import teamMember1 from "@/app/images/team-member.png";
import { useState } from "react";

const TeamPage = () => {
  const [socialToggle1, setSocialToggle1] = useState(false);
  const [socialToggle2, setSocialToggle2] = useState(false);
  const [socialToggle3, setSocialToggle3] = useState(false);
  const [socialToggle4, setSocialToggle4] = useState(false);

  return (
    <section className='contact-us'>
      <div className='mt-10 pl-16 px-40'>
        <div className='flex justify-center'>
          <div className='pt-10 pb-8'>
            <h2 className='text-slate-100 font-bold text-3xl md:text-4xl lg:text-6xl mt-3 text-center'>
              Our Team
            </h2>
            <div className='mt-10 flex justify-center'>
              <div className='flex gap-3 items-center'>
                <p className='text-slate-200 text-xl font-bold text-center'>
                  Home
                </p>
                <div className='h-2 w-2 bg-amber-50 rounded-full'></div>
                <p className='text-cyan-500 text-xl font-bold text-center'>
                  Our Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2
        id='footer-text'
        className='font-bold text-[9.1vw] text-center text-slate-400'
      >
        Our <span className='text-cyan-200'>Professional</span>{" "}
        <span className='text-cyan-500'>Team</span>
      </h2>

      <div className='mt-6 px-42'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Team Member 1 */}
          <div
            className='w-full border p-2 border-gray-500 pb-4 md:pb-6'
            onClick={() => setSocialToggle1(!socialToggle1)}
          >
            <Image src={teamMember1} alt='Team Member 1' className='w-full' />
            <div
              className='flex justify-center items-center mb-6 relative'
              onClick={() => setSocialToggle1(!socialToggle1)}
            >
              <div className='w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center -mt-5 cursor-pointer'>
                <FaPlus />
              </div>
              {socialToggle1 && (
                <div className='bg-cyan-600 py-5 mb-4 px-8 absolute flex items-center gap-4 transition-all ease-in-out duration-500'>
                  <Link href='#facebook'>
                    <FaFacebook className='text-slate-50' size={20} />
                  </Link>
                  <Link href='#facebook'>
                    <FaLinkedinIn className='text-slate-50' size={20} />
                  </Link>
                  <Link href='#facebook'>
                    <FaX className='text-slate-50' size={18} />
                  </Link>
                  <Link href='#facebook'>
                    <FaYoutube className='text-slate-50' size={20} />
                  </Link>
                </div>
              )}
            </div>
            <h4 className='text-center text-xl text-slate-50 font-bold'>
              Amadu Kamara
            </h4>
            <p className='text-center text-slate-200 mt-1'>C.E.0 & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div
            className='w-full border p-2 border-gray-500 pb-4 md:pb-6'
            onClick={() => setSocialToggle2(!socialToggle2)}
          >
            <Image src={teamMember1} alt='Team Member 1' className='w-full' />
            <div className='flex justify-center items-center mb-6'>
              <div className='w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center -mt-5 cursor-pointer'>
                <FaPlus />
              </div>
              {socialToggle2 && (
                <div className='bg-cyan-600 py-5 mb-4 px-8 absolute flex items-center gap-4 transition-all ease-in-out duration-500'>
                  <Link href='#facebook'>
                    <FaFacebook className='text-slate-50' size={20} />
                  </Link>
                  <Link href='#facebook'>
                    <FaLinkedinIn className='text-slate-50' size={20} />
                  </Link>
                  <Link href='#facebook'>
                    <FaX className='text-slate-50' size={18} />
                  </Link>
                  <Link href='#facebook'>
                    <FaYoutube className='text-slate-50' size={20} />
                  </Link>
                </div>
              )}
            </div>
            <h4 className='text-center text-xl text-slate-50 font-bold'>
              Samuel Amkam
            </h4>
            <p className='text-center text-slate-200 mt-1'>
              C.T.O & Lead Developer
            </p>
          </div>

          {/* Team Member 3 */}
          <div
            className='w-full border p-2 border-gray-500 pb-4 md:pb-6'
            onClick={() => setSocialToggle3(!socialToggle3)}
          >
            <Image src={teamMember1} alt='Team Member 1' className='w-full' />
            <div className='flex justify-center items-center mb-6'>
              <div className='w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center -mt-5 cursor-pointer'>
                <FaPlus />
              </div>
              {socialToggle3 && (
                <div className='bg-cyan-600 py-5 mb-4 px-8 absolute flex items-center gap-4 transition-all ease-in-out duration-500'>
                  <Link href='#facebook'>
                    <FaFacebook className='text-slate-50' size={20} />
                  </Link>
                  <Link href='#facebook'>
                    <FaLinkedinIn className='text-slate-50' size={20} />
                  </Link>
                  <Link href='#facebook'>
                    <FaX className='text-slate-50' size={18} />
                  </Link>
                  <Link href='#facebook'>
                    <FaYoutube className='text-slate-50' size={20} />
                  </Link>
                </div>
              )}
            </div>
            <h4 className='text-center text-xl text-slate-50 font-bold'>
              Ejatu Bah
            </h4>
            <p className='text-center text-slate-200 mt-1'>H.R Manager</p>
          </div>

          {/* Team Member 4 */}
          <div
            className='w-full border p-2 border-gray-500 pb-4 md:pb-6'
            onClick={() => setSocialToggle4(!socialToggle4)}
          >
            <Image src={teamMember1} alt='Team Member 1' className='w-full' />
            <div className='flex justify-center items-center mb-6'>
              <div className='w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center -mt-5 cursor-pointer'>
                <FaPlus />
              </div>
              {socialToggle4 && (
                <div className='bg-cyan-600 py-5 mb-4 px-8 absolute flex items-center gap-4 transition-all ease-in-out duration-500'>
                  <Link href='#facebook'>
                    <FaFacebook className='text-slate-50' size={20} />
                  </Link>
                  <Link href='#facebook'>
                    <FaLinkedinIn className='text-slate-50' size={20} />
                  </Link>
                  <Link href='#facebook'>
                    <FaX className='text-slate-50' size={18} />
                  </Link>
                  <Link href='#facebook'>
                    <FaYoutube className='text-slate-50' size={20} />
                  </Link>
                </div>
              )}
            </div>
            <h4 className='text-center text-xl text-slate-50 font-bold'>
              Dev Amkam
            </h4>
            <p className='text-center text-slate-200 mt-1'>
              FullStack Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
