import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const HomeServices = () => {
  return (
    <section className='footer pt-10 home-services'>
      <h2
        id='footer-text'
        className='font-bold text-[8.2vw] text-center text-slate-400'
      >
        Explore <span className='text-cyan-200'>Popular</span>{" "}
        <span className='text-cyan-500'>Services</span>
      </h2>

      <div className='mt-10 container mx-auto'>
        <div>
          <p className='text-slate-200 text-xl font-bold text-center'>
            Growth & Development Mindset
          </p>
          <h2 className='text-slate-100 font-bold text-2xl md:text-3xl lg:text-5xl mt-3 text-center'>
            Modern Technology and
            <br />
            <span className='font-thin'>Advancement Incentives</span>{" "}
          </h2>
        </div>

        {/* SERVICES */}
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16 mb-0'>
          <div className='p-8 border border-slate-500'>
            <FaComputer className='text-slate-200' size={40} />
            <h3 className='text-xl text-slate-50 font-semibold mt-4 mb-2'>
              Web Design
            </h3>
            <p className='text-slate-100 leading-6'>
              Let&apos;s create stunning, modern, and user-friendly websites
              that captivate, convert, and elevate your online presence.
            </p>

            <div className='flex items-center gap-2 mt-5'>
              <lLnk
                href='#'
                className='flex items-center gap-2 text-slate-100 border p-2'
              >
                <FaPlus className='text-slate-100' /> Read More
              </lLnk>
            </div>
          </div>

          <div className='p-8 border border-slate-500'>
            <FaComputer className='text-slate-200' size={40} />
            <h3 className='text-xl text-slate-50 font-semibold mt-4 mb-2'>
              Web Development
            </h3>
            <p className='text-slate-100 leading-6'>
              Let&apos;s develop fast, secure, and scalable web application with
              custom, high-performing solutions that drive success for your
              business!
            </p>

            <div className='flex items-center gap-2 mt-5'>
              <Link
                href='#'
                className='flex items-center gap-2 text-slate-100 border p-2'
              >
                {" "}
                <FaPlus className='text-slate-100' /> Read More
              </Link>
            </div>
          </div>

          <div className='p-8 border border-slate-500'>
            <FaComputer className='text-slate-200' size={40} />
            <h3 className='text-xl text-slate-50 font-semibold mt-4 mb-2'>
              Domain & Email Hosting and SEO
            </h3>
            <p className='text-slate-100 leading-6'>
              Let&apos;s secure your online identity with reliable domain and
              email hosting services that simplify your needs and enhance your
              professionalism.
            </p>

            <div className='flex items-center gap-2 mt-5'>
              <Link
                href='#'
                className='flex border p-2 items-centergap-2  text-slate-100'
              >
                {" "}
                <FaPlus className='text-slate-100' /> Read More
              </Link>
            </div>
          </div>

          <div className='p-8 border border-slate-500'>
            <FaComputer className='text-slate-200' size={40} />
            <h3 className='text-xl text-slate-50 font-semibold mt-4 mb-2'>
              Website Maintenance Service
            </h3>
            <p className='text-slate-100 leading-6'>
              With our maintenance plans, you can be confident that your website
              remains secure, up-to-date, and fully functional at all times! 🚀
            </p>

            <div className='flex items-center gap-2 mt-5'>
              <Link
                href='#'
                className='flex items-center gap-2 text-slate-100 border p-2'
              >
                {" "}
                <FaPlus className='text-slate-100' /> Read More
              </Link>
            </div>
          </div>

          <div className='p-8 border border-slate-500'>
            <FaComputer className='text-slate-200' size={40} />
            <h3 className='text-xl text-slate-50 font-semibold mt-4 mb-2'>
              UI/UX Design
            </h3>
            <p className='text-slate-100 leading-6'>
              Let&apos;s transform your product with expert UI/UX design that
              combines stunning visuals with seamless functionality, creating
              intuitive and engaging experiences.
            </p>

            <div className='flex items-center gap-2 mt-5'>
              <Link
                href='#'
                className='flex items-center gap-2 text-slate-100 border p-2'
              >
                {" "}
                <FaPlus className='text-slate-100' /> Read More
              </Link>
            </div>
          </div>

          <div className='p-8 border border-slate-500'>
            <FaComputer className='text-slate-200' size={40} />
            <h3 className='text-xl text-slate-50 font-semibold mt-4 mb-2'>
              Tech Consulting
            </h3>
            <p className='text-slate-100 leading-6'>
              Let&apos;s empower your business with expert tech consulting
              offering tailored solutions, strategic insights, and guidance to
              drive innovation and unlock growth.
            </p>

            <div className='flex items-center gap-2 mt-5'>
              <Link
                href='#'
                className='flex items-center gap-2 text-slate-100 border p-2'
              >
                {" "}
                <FaPlus className='text-slate-100' /> Read More
              </Link>
            </div>
          </div>

          <div className='p-8 border border-slate-500'>
            <FaComputer className='text-slate-200' size={40} />
            <h3 className='text-xl text-slate-50 font-semibold mt-4 mb-2'>
              IT Skills Training
            </h3>
            <p className='text-slate-100 leading-6'>
              Let&apos;s enhance your career with expert IT skills training,
              offering personalized, hands-on learning to equip your for success
              in today&apos;s tech-driven world.
            </p>

            <div className='flex items-center gap-2 mt-5'>
              <Link
                href='#'
                className='flex items-center gap-2 text-slate-100 border p-2'
              >
                {" "}
                <FaPlus className='text-slate-100' /> Read More
              </Link>
            </div>
          </div>

          <div className='p-8 border border-slate-500'>
            <FaComputer className='text-slate-200' size={40} />
            <h3 className='text-xl text-slate-50 font-semibold mt-4 mb-2'>
              Branding
            </h3>
            <p className='text-slate-100 leading-6'>
              Let&apos;s transform your business with a memorable brand identity
              that resonates with your audience, elevates your presence, and
              stands out through expert design and strategy.
            </p>

            <div className='flex items-center gap-2 mt-5'>
              <Link
                href='#'
                className='flex items-center gap-2 text-slate-100 border p-2'
              >
                {" "}
                <FaPlus className='text-slate-100' /> Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-cyan-600 py-4 mt-16'>
        <p className='text-center text-2xl tracking-wider'>
          Let&apos;s{" "}
          <span className='underline italic font-bold text-slate-50'>
            Talk and Start
          </span>{" "}
          IT Consultation
        </p>
      </div>
    </section>
  );
};

export default HomeServices;
