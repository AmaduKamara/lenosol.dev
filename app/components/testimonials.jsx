import Image from "next/image";
import { FaDotCircle, FaQuoteLeft } from "react-icons/fa";

import client1 from "@/app/images/team-member.png";
import WorkInquiry from "./work-inquiry";

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

      <WorkInquiry />
    </section>
  );
};

export default Testimonials;
