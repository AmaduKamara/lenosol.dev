import Image from "next/image";
import { FaDotCircle, FaEnvelope, FaQuoteLeft, FaUser } from "react-icons/fa";

import client1 from "@/app/images/team-member.png";
import amkam from "../images/Amkam.jpg";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Testimonials = () => {
  return (
    <section className='py-24 home-about'>
      <div className='container mx-auto md:px-16 flex gap-10 items-center'>
        <div className='w-3/5'>
          <p className='text-slate-200 text-xl font-bold'>Clients Feedback</p>
          <h2 className='text-slate-100 font-bold text-2xl md:text-3xl lg:text-5xl mt-3'>
            What 20+ People Say
            <span className='font-thin'>About Us</span>{" "}
          </h2>

          <p className='text-3xl text-cyan-400 mt-16'>
            <FaQuoteLeft />{" "}
          </p>

          <p className='mt-5 text-xl leading-7 text-slate-300 font-semibold md:pr-16'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            tenetur cum exercitationem deleniti culpa optio rem minus excepturi,
            nihil animi laudantium unde mollitia porro fugit corporis rerum in
            voluptatem earum?
          </p>

          <h5 className='text-slate-50 font-semibold text-xl mt-5'>
            Sabrina Kandeh
          </h5>
          <p className='text-slate-300'>Software Engineer</p>

          <div className='flex items-center mt-10'>
            <div className='flex gap-3'>
              <FaDotCircle className='text-slate-50 cursor-pointer' />
              <FaDotCircle className='text-slate-50 cursor-pointer' />
              <FaDotCircle className='text-slate-50 cursor-pointer' />
              <FaDotCircle className='text-slate-50 cursor-pointer' />
            </div>
          </div>
        </div>

        <div className='w-2/5 p-16 flex flex-col gap-10'>
          <div className='flex items-center gap-10'>
            <div>
              <Image src={client1} alt='Client' className='rounded-full' />
            </div>
            <div>
              <Image src={client1} alt='Client' className='rounded-2xl' />
            </div>
          </div>

          <div className='flex items-center gap-10'>
            <div>
              <Image src={client1} alt='Client' className='rounded-2xl' />
            </div>
            <div>
              <Image src={client1} alt='Client' className='rounded-full' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-16 mt-16 pr-40'>
        <div className='w-5/9 relative clear-start'>
          <Image src={amkam} alt='Amkam' className='w-full' />
          <div className='bg-cyan-500 w-1/2 absolute bottom-0 right-0 p-10'>
            <p className='text-slate-200 font-bold text-lg'>Work Inquiry</p>
            <h4 className='mt-5 text-5xl text-slate-50 font-bold'>
              Let&apos;s Build Your Next Project!
            </h4>
            <Link href='/contact' className='mt-10 block'>
              <button
                type='button'
                className='flex items-center cursor-pointer py-4 px-6  bg-cyan-50 text-cyan-950 hover:text-cyan-50 font-bold border border-cyan-50 hover:bg-transparent transition-all ease-in-out duration-300 rounded-lg'
              >
                View Our Teams
                <MdKeyboardArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>

        <form className='w-4/9 bg-slate-100 p-10 rounded'>
          <h3 className='text-cyan-950 font-bold text-center text-4xl'>
            Need Help For a Project
          </h3>
          <p className='mt-3 text-center text-xl text-gray-600'>
            We are ready to help with your next project. Let&apos;s work
            together
          </p>

          <div className='mt-6'>
            <div className='flex gap-4 items-center'>
              <div className='flex items-center bg-white py-2 md:py-3 px-5 flex-1 relative'>
                <input
                  type='text'
                  placeholder='Name'
                  className='focus:outline-none w-full pr-5'
                />
                <FaUser className='absolute top-0 right-0 mr-5 mt-4 text-gray-500' />
              </div>
              <div className='flex items-center bg-white py-2 md:py-3 px-5 flex-1 relative'>
                <input
                  type='text'
                  placeholder='Name'
                  className='focus:outline-none w-full pr-5'
                />
                <FaEnvelope className='absolute top-0 right-0 mr-5 mt-4 text-gray-500' />
              </div>
            </div>
            <div className='flex items-center bg-white py-2 md:py-3 px-5 flex-1 relative mt-4'>
              <select
                type='text'
                placeholder='Name'
                className='focus:outline-none w-full pr-5'
              >
                <option>Choose Services</option>
                <option value=''>Web Design</option>
                <option value=''>Web Wevelopment</option>
                <option value=''>UI/UX Design</option>
                <option value=''>IT Consultancy</option>
                <option value=''>Graphics Design</option>
                <option value=''>SaaS Development</option>
              </select>
            </div>

            <div className='flex items-center bg-white py-2 md:py-3 px-5 flex-1 relative mt-4'>
              <textarea
                rows={4}
                placeholder='Message'
                className='w-full focus:outline-none'
              ></textarea>
            </div>

            <div>
              <Link href='/contact' className='mt-8 block'>
                <button
                  type='button'
                  className='flex items-center cursor-pointer py-4 px-6  bg-cyan-500 text-slate-50 hover:text-cyan-950 font-bold border border-cyan-500 hover:bg-transparent transition-all ease-in-out duration-300 rounded-lg'
                >
                  View Our Teams
                  <MdKeyboardArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;
