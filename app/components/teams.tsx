import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaPlus, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

import teamMember1 from "@/app/images/team-member.png";
import { useState } from "react";

const Teams = () => {
  const [socialToggle1, setSocialToggle1] = useState(false);
  const [socialToggle2, setSocialToggle2] = useState(false);
  const [socialToggle3, setSocialToggle3] = useState(false);

  return (
    <div className='container mx-auto px-24 pb-12 flex'>
      <div className='w-2/7 pt-10'>
        <p className='text-slate-200 text-xl font-bold text-start'>
          Our Professional Team
        </p>
        <h2 className='text-slate-100 font-bold text-2xl md:text-3xl lg:text-5xl mt-3 text-start'>
          Meet Our Experience
          <span className='font-thin'> Members</span>{" "}
        </h2>

        <div className='mt-10'>
          <Link href='/services'>
            <button
              type='button'
              className='flex items-center cursor-pointer py-4 px-6  bg-cyan-500 text-white border border-cyan-500 hover:bg-transparent transition-all ease-in-out duration-300 '
            >
              View Our Teams
              <MdKeyboardArrowRight size={20} className='text-white' />
            </button>
          </Link>
        </div>
      </div>

      <div className='w-5/7 mt-6'>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
