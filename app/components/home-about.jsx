import Link from "next/link";
import Image from "next/image";

import ClientStats from "./client-stats";

import lenosolLogo from "@/app/images/lonosol-logo.png";
import lenosolLogoWhite from "@/app/images/lenosol-logo-white.png";

import Faqs from "./faqs";

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

import { MdKeyboardArrowRight } from "react-icons/md";

const HomeAbout = () => {
  return (
    <section className='footer py-10 home-about'>
      <h2
        id='footer-text'
        className='font-bold text-[9vw] text-center text-slate-400'
      >
        Software Development
      </h2>

      <div className='py-16 flex gap-5 container mx-auto'>
        <div className='w-1/2 flex justify-center items-center'>
          <div>
            <Image src={lenosolLogo} alt='Lenosol' />
          </div>
        </div>

        <div className='w-1/2'>
          <p className='text-slate-200 text-xl font-bold'>We are Lenosol</p>
          <h2 className='text-slate-100 font-bold text-2xl md:text-3xl lg:text-5xl mt-3'>
            Innovative Soft Solutions to <br />{" "}
            <span className='font-thin'>Grow your Business</span>{" "}
          </h2>
          <p className='text-slate-100 mt-6 pr-72 pl-10'>
            We help businesses create impactful online experiences, strengthen
            their brand identity, and drive sustainable growth with innovative
            solutions tailored to your unique needs.
          </p>

          <div className='mt-4 ml-10'>
            <Link href='/services' className='ml-10'>
              <button
                type='button'
                className='flex items-center cursor-pointer py-4 px-6 bg-cyan-500 text-white border border-cyan-500 hover:bg-transparent transition-all ease-in-out duration-300 '
              >
                Learn More
                <MdKeyboardArrowRight size={20} className='text-white' />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex gap-10 m-8 px-10'>
        <div className='w-4/7 relative'>
          <Image src={amkam} alt='Amkam' className='w-full' />
          <div className='p-4 bg-cyan-500 w-42 h-32 flex justify-center items-center absolute bottom-0 left-0'>
            <h3 className='text-center text-slate-50 text-lg'>
              20+ Trusted Clients
            </h3>
          </div>
          <Image
            width={150}
            src={lenosolLogoWhite}
            alt='Lenosol'
            className='absolute bottom-32 left-38'
          />
        </div>

        <div className='w-3/7 pr-24 pt-16'>
          <p className='text-slate-200 text-xl font-bold'>
            Explore Our Achievement
          </p>
          <h2 className='text-slate-100 font-bold text-2xl md:text-3xl lg:text-5xl mt-3'>
            Premium Tech Solutions <br />{" "}
            <span className='font-thin'>Lenosol Tech Agency</span>{" "}
          </h2>
          <p className='text-slate-100 mt-6 pr-32 pl-10'>
            We help businesses create impactful online experiences, strengthen
            their brand identity, and drive sustainable growth with innovative
            solutions tailored to your unique needs.
          </p>

          {/* <hr className='my-16 border-slate-500' /> */}

          <div className='flex gap-5 mt-16'>
            <ClientStats
              classname='bg-cyan-500 font-bold text-white'
              count={20}
              text='Trusted Global Clients'
            />
            <ClientStats
              classname='bg-cyan-100'
              paraTextColor='text-cyan-900 font-bold'
              count={45}
              text='Best Completed Projects'
            />
          </div>
        </div>
      </div>

      {/* Growth and Development */}
      <Faqs data={data} />
    </section>
  );
};

export default HomeAbout;
