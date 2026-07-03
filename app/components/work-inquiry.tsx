"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaEnvelope, FaUser } from "react-icons/fa";
import amkam from "../images/Amkam.jpg";

const WorkInquiry = () => {
  return (
    <section className='container mx-auto px-6 py-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
        {/* Left: Image & Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='relative'
        >
          <Image
            src={amkam}
            alt='Work Inquiry'
            className='w-full h-125 object-cover rounded-xl'
          />
          <div className='bg-cyan-500 p-8 md:p-10 absolute bottom-0 right-0 w-[90%] md:w-[80%] rounded-tl-2xl'>
            <p className='text-white font-bold text-lg opacity-90'>
              Work Inquiry
            </p>
            <h4 className='mt-1 text-2xl md:text-4xl text-white font-bold leading-tight'>
              Let&apos;s Build Your Next Project!
            </h4>
            <Link href='/contact' className='mt-8 inline-block'>
              <button className='flex items-center gap-2 py-3 px-6 bg-white text-cyan-900 font-bold rounded-lg hover:bg-slate-100 transition-all'>
                Get In Touch <MdKeyboardArrowRight size={20} />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='bg-slate-100 p-8 md:p-10 rounded-xl shadow-lg'
        >
          <h3 className='text-cyan-950 font-bold text-3xl md:text-4xl text-center'>
            Need Help?
          </h3>
          <p className='mt-3 text-center text-lg text-gray-600'>
            We are ready to start your next project.
          </p>

          <div className='mt-8 space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex items-center bg-white py-3 px-4 rounded border border-gray-200'>
                <input
                  type='text'
                  placeholder='Name'
                  className='focus:outline-none w-full bg-transparent'
                />
                <FaUser className='text-gray-400' />
              </div>
              <div className='flex items-center bg-white py-3 px-4 rounded border border-gray-200'>
                <input
                  type='email'
                  placeholder='Email'
                  className='focus:outline-none w-full bg-transparent'
                />
                <FaEnvelope className='text-gray-400' />
              </div>
            </div>

            <select className='w-full bg-white py-3 px-4 rounded border border-gray-200 focus:outline-none text-gray-500'>
              <option>Choose Service</option>
              <option>Web Design</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>IT Consultancy</option>
            </select>

            <textarea
              rows={4}
              placeholder='Your Message'
              className='w-full bg-white py-3 px-4 rounded border border-gray-200 focus:outline-none'
            ></textarea>

            <button
              type='button'
              className='w-full py-4 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-all flex justify-center items-center gap-2'
            >
              Send Message <MdKeyboardArrowRight size={20} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default WorkInquiry;
