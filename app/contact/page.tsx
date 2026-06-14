import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin, FaX } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

const ContactPage = () => {
  return (
    <section className='pt-10 pb-24 contact-us px-40'>
      <div className='mt-10 pl-16 flex justify-center'>
        <div>
          <h2 className='text-slate-100 font-bold text-3xl md:text-4xl lg:text-6xl mt-3 text-center'>
            Contact Us
          </h2>
          <div className='mt-10 flex justify-center'>
            <div className='flex gap-3 items-center'>
              <p className='text-slate-200 text-xl font-bold text-center'>
                Home
              </p>
              <div className='h-2 w-2 bg-amber-50 rounded-full'></div>
              <p className='text-cyan-500 text-xl font-bold text-center'>
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-24 gap-24 flex'>
        <div className='w-2/5 pt-5'>
          <p className='text-slate-200 text-xl font-bold text-start'>
            Get In Touch
          </p>
          <h2 className='text-slate-100 font-bold text-2xl md:text-3xl lg:text-5xl mt-3 text-start'>
            Lta&apos;s Talk For Your
            <br />
            <span className='font-thin'>Next Project</span>{" "}
          </h2>
          <p className='mt-5 text-slate-200 md:pr-24'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            sit odit eveniet.
          </p>

          <p className='text-slate-200 text-xl font-bold text-start mt-8'>
            Main Office
          </p>

          <div className='flex flex-col gap-5 mt-5'>
            <span className='text-slate-200 flex items-center gap-3'>
              {" "}
              <FaLocationPin size={20} className='text-cyan-500' /> 6 John
              Thorpe, Rokel, Freetown
            </span>
            <span className='text-slate-200 flex items-center gap-3'>
              <FaEnvelope size={20} className='text-cyan-500' />
              amkam@lenosol.com
            </span>
            <span className='text-slate-200 flex items-center gap-3'>
              {" "}
              <FaPhone size={20} className='text-cyan-500' /> +23276 716 997
            </span>
          </div>

          <div>
            <p className='text-slate-200 text-xl font-bold text-start mt-5'>
              Follow Us
            </p>

            <div className='mt-8 flex gap-3'>
              <div className='w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center -mt-5 cursor-pointer'>
                <FaFacebook size={20} />
              </div>
              <div className='w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center -mt-5 cursor-pointer'>
                <FaLinkedin size={20} />
              </div>
              <div className='w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center -mt-5 cursor-pointer'>
                <FaX size={18} />
              </div>
              <div className='w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center -mt-5 cursor-pointer'>
                <FaYoutube size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className='w-3/5 mt-6'>
          <form className='bg-[#0d171b] p-10 rounded-md'>
            <div>
              <div className='flex gap-4 items-center'>
                <div className='flex-1'>
                  <label
                    htmlFor='full-name'
                    className='text-slate-50 font-bold'
                  >
                    Amadu Kamara
                  </label>
                  <div className=' bg-[#18262a]  flex-1 border border-slate-500 rounded-md mt-3'>
                    <div className='relative flex items-center w-full'>
                      <input
                        type='text'
                        id='full-name'
                        placeholder='Name'
                        className='pl-4 py-2 md:py-3 w-full text-slate-50'
                      />
                      <FaUser className='absolute top-0 right-0 mt-4 mr-4 text-gray-500' />
                    </div>
                  </div>
                </div>
                <div className='flex-1'>
                  <label htmlFor='email' className='text-slate-50 font-bold'>
                    Email Address
                  </label>
                  <div className=' bg-[#18262a]  flex-1 border border-slate-500 rounded-md mt-3'>
                    <div className='relative flex items-center w-full'>
                      <input
                        type='email'
                        id='email'
                        placeholder='youremail@gmail.com'
                        className='pl-4 py-2 md:py-3 w-full text-slate-50'
                      />
                      <FaEnvelope className='absolute top-0 right-0 mt-4 mr-4 text-gray-500' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex gap-4 items-center mt-8'>
                <div className='flex-1'>
                  <label
                    htmlFor='phone-number'
                    className='text-slate-50 font-bold'
                  >
                    Phone Number
                  </label>
                  <div className=' bg-[#18262a]  flex-1 border border-slate-500 rounded-md mt-3'>
                    <div className='relative flex items-center w-full'>
                      <input
                        type='tel'
                        id='phone-number'
                        placeholder='+232 76 716997'
                        className='pl-4 py-2 md:py-3 w-full text-slate-50'
                      />
                      <FaPhone className='absolute top-0 right-0 mt-4 mr-4 text-gray-500' />
                    </div>
                  </div>
                </div>
                <div className='flex-1'>
                  <label htmlFor='subject' className='text-slate-50 font-bold'>
                    Subject
                  </label>
                  <div className=' bg-[#18262a]  flex-1 border border-slate-500 rounded-md mt-3'>
                    <div className='relative flex items-center w-full pr-3'>
                      <select
                        id='subject'
                        className='focus:outline-none pl-4 py-2 md:py-3 w-full text-slate-50'
                      >
                        <option>I would like to discuss my project</option>
                        <option>I Need a website for my business</option>
                        <option>I would like to discuss my project</option>
                        <option>I would like to discuss my project</option>
                        <option>I would like to discuss my project</option>
                        <option>I would like to discuss my project</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-8'>
                <label htmlFor='message' className='text-slate-50 font-bold'>
                  Messsage
                </label>
                <div className=' bg-[#18262a]  flex-1 border border-slate-500 rounded-md mt-3'>
                  <div className='relative flex items-center w-full'>
                    <textarea
                      rows={4}
                      id='message'
                      placeholder='Message'
                      className='pl-4 py-2 md:py-3 w-full text-slate-50'
                    ></textarea>
                  </div>
                </div>
              </div>

              <div>
                <Link href='/contact' className='mt-8 block'>
                  <button
                    type='button'
                    className='flex items-center cursor-pointer py-4 px-6  bg-cyan-500 text-slate-50 hover:text-cyan-950 font-bold border border-cyan-500 hover:bg-transparent transition-all ease-in-out duration-300 rounded-lg'
                  >
                    Send Message
                    <MdKeyboardArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
