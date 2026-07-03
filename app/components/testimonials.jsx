"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaCircle } from "react-icons/fa";
import client1 from "@/app/images/team-member.png";
import WorkInquiry from "./work-inquiry";

const testimonials = [
  {
    name: "Sabrina Kandeh",
    role: "Software Engineer",
    quote:
      "Working with Lenosol was a transformative experience for our business strategy.",
  },
  {
    name: "John Doe",
    role: "Product Manager",
    quote:
      "The team's attention to detail and technical expertise is truly unmatched in the industry.",
  },
  {
    name: "Jane Smith",
    role: "Startup Founder",
    quote:
      "They brought our vision to life with such elegance. Highly recommended!",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='py-24 bg-[#18262a] overflow-hidden'>
      <div className='container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center'>
        {/* Left: Testimonial Text */}
        <div className='lg:w-3/5'>
          <p className='text-cyan-400 font-bold uppercase tracking-widest text-sm'>
            Clients Feedback
          </p>
          <h2 className='text-white font-bold text-3xl md:text-5xl mt-3'>
            What People Say <span className='font-thin'>About Us</span>
          </h2>

          <div className='relative min-h-75 mt-12'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <FaQuoteLeft className='text-cyan-500 text-4xl mb-8' />
                <p className='text-xl md:text-2xl italic text-slate-200 leading-relaxed'>
                  &quot;{testimonials[index].quote}&quot;
                </p>
                <div className='mt-8'>
                  <h5 className='text-white font-bold text-xl'>
                    {testimonials[index].name}
                  </h5>
                  <p className='text-cyan-400'>{testimonials[index].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className='flex gap-3 mt-8'>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={index === i ? "text-cyan-500" : "text-slate-600"}
              >
                <FaCircle size={10} />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Image Collage */}
        <div className='lg:w-2/5 grid grid-cols-2 gap-6'>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src={client1}
              alt='Client'
              className='rounded-full border-4 border-cyan-500/20'
            />
          </motion.div>
          <motion.div
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Image src={client1} alt='Client' className='rounded-2xl' />
          </motion.div>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Image src={client1} alt='Client' className='rounded-2xl' />
          </motion.div>
          <motion.div
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Image
              src={client1}
              alt='Client'
              className='rounded-full border-4 border-cyan-500/20'
            />
          </motion.div>
        </div>
      </div>

      <WorkInquiry />
    </section>
  );
};

export default Testimonials;
