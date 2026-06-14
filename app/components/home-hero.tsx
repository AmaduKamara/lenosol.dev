import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

import amkam from "../images/Amkam.jpg";

const HomeHero = () => {
  return (
    <section className='h-screen pt-16 pl-56 pr-16 home-hero'>
      <div>
        <p className='text-slate-200'>Welcome to Lenosol</p>
        <h1 className='text-3xl md:text-4xl lg:text-6xl text-slate-50 leading-tight'>
          <b>NextGen Tech Innovators</b>
          <p className='font-thin'>
            and{" "}
            <span className='bg-cyan-50 text-gray-800 px-1 md:px-2'>
              DIGITAL SOFTWARE
            </span>{" "}
            Solutions Experts
          </p>
        </h1>
      </div>

      <div className='flex gap-5 mt-10'>
        <div className='w-2/5 pr-24 pt-20'>
          <p className='text-slate-100 text-lg'>
            We&apos;re a software design agency on a mission to bridge the gap
            between businesses, organizations and Innovation through custom
            software and automations. We&apos;re here to help scale your
            business and put it on the internet and eventually make you stand
            out from the crowd.
          </p>

          <hr className='my-16 border-slate-500' />

          <div className='flex gap-x-24'>
            <div>
              <h2 className='text-slate-50 text-3xl md:text-5xl lg:text-7xl font-bold mb-2'>
                20+
              </h2>
              <p className='text-slate-200'>Happy Clients</p>
            </div>
            <div>
              <h2 className='text-slate-50 text-3xl md:text-5xl lg:text-7xl font-bold mb-2'>
                8+
              </h2>
              <p className='text-slate-200'>Years Experience</p>
            </div>
          </div>

          <div className='mt-8'>
            <Link href='/services'>
              <button
                type='button'
                className='flex items-center cursor-pointer py-4 px-6 bg-cyan-500 text-white border border-cyan-500 hover:bg-transparent transition-all ease-in-out duration-300 '
              >
                Explore Our Services{" "}
                <MdKeyboardArrowRight size={20} className='text-white' />
              </button>
            </Link>
          </div>
        </div>

        <div className='w-3/5'>
          <Image src={amkam} alt='Amkam' className='w-full' />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
