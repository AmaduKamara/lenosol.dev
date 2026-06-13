import Image from "next/image";

import project from "@/app/images/project.jpg";
import Link from "next/link";
import { FaDotCircle, FaPlus } from "react-icons/fa";

const CaseStudy = () => {
  return (
    <section className='pt-10'>
      <div className='mt-10 pl-16'>
        <div>
          <p className='text-slate-200 text-xl font-bold text-center'>
            Our Completed Projects
          </p>
          <h2 className='text-slate-100 font-bold text-2xl md:text-3xl lg:text-5xl mt-3 text-center'>
            Explore Our Most
            <br />
            <span className='font-thin'>
              Successful Projects Case Studes
            </span>{" "}
          </h2>
        </div>

        {/* Case Studies Sliders */}
        <div>
          <div className='flex gap-6 overflow-hidden'>
            <div className='border border-slate-500 p-2 pl-10 w-350 mt-16'>
              <div className='flex gap-24 relative'>
                <div className='w-2/5 pt-10'>
                  <p className='text-slate-200 text-lg font-bold'>
                    Our Completed Projects
                  </p>
                  <Link href={`/projects/1`}>
                    <h4 className='text-3xl font-bold mt-6 text-cyan-500 hover:text-cyan-400'>
                      Our Completed Projects
                    </h4>
                  </Link>
                  <p className='mt-5 text-slate-200 leading-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi ipsa nemo at possimus aut blanditiis deserunt sint,
                    sequi, nulla cumque, suscipit eum ad in commodi repudiandae
                    illo neque voluptate labore!
                  </p>

                  <div className='flex items-center gap-2 absolute bottom-0 mb-16'>
                    <Link
                      href='#'
                      className='flex items-center gap-2 text-slate-100 border p-2 hover:bg-cyan-500 hover:border-cyan-500 transition-all ease-in-out duration-500 rounded-full py-2 px-5'
                    >
                      {" "}
                      <FaPlus className='text-slate-100' /> Read More
                    </Link>
                  </div>
                </div>
                <div className='3/5'>
                  <Image src={project} alt='Project 1' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center mt-10'>
            <div className='flex gap-3'>
              <FaDotCircle className='text-slate-50 cursor-pointer' />
              <FaDotCircle className='text-slate-50 cursor-pointer' />
              <FaDotCircle className='text-slate-50 cursor-pointer' />
              <FaDotCircle className='text-slate-50 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
