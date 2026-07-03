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

/**
 * ContactPage Component
 * Improvements made:
 * - Fixed typos ("Let's Talk").
 * - Corrected accessibility: Labels now represent the input purpose instead of hardcoded values.
 * - Cleaned up styling: Removed negative margins, standardized input wrappers.
 * - Refined layout: Improved mobile responsiveness with better padding and flex control.
 */
const ContactPage = () => {
  return (
    <section className='pt-10 pb-24 contact-us px-4 md:px-10 lg:px-40'>
      {/* Header Area */}
      <div className='mt-10 flex flex-col items-center text-center'>
        <h2 className='text-slate-100 font-bold text-3xl md:text-4xl lg:text-6xl mt-3'>
          Contact Us
        </h2>
        <div className='mt-6 flex gap-3 items-center'>
          <p className='text-slate-200 text-lg font-medium'>Home</p>
          <div className='h-2 w-2 bg-amber-50 rounded-full'></div>
          <p className='text-cyan-500 text-lg font-medium'>Contact Us</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className='container mx-auto mt-16 lg:mt-24 flex flex-col lg:flex-row gap-16 lg:gap-24'>
        {/* Info Column */}
        <div className='lg:w-2/5 flex flex-col'>
          <p className='text-cyan-400 font-bold tracking-wider uppercase text-sm'>
            Get In Touch
          </p>
          <h2 className='text-slate-100 font-bold text-3xl md:text-5xl mt-3 leading-tight'>
            Let&apos;s Talk For Your
            <br />
            <span className='font-thin'>Next Project</span>
          </h2>
          <p className='mt-5 text-slate-400 max-w-md'>
            Have a project in mind? We&apos;d love to hear from you. Drop us a
            message and our team will get back to you promptly.
          </p>

          <p className='text-slate-100 text-xl font-bold mt-10'>Main Office</p>
          <div className='flex flex-col gap-6 mt-6'>
            <div className='text-slate-300 flex items-center gap-4 hover:text-cyan-400 transition-colors'>
              <FaLocationPin size={22} className='text-cyan-500' />
              <span>6 John Thorpe, Rokel, Freetown</span>
            </div>
            <div className='text-slate-300 flex items-center gap-4 hover:text-cyan-400 transition-colors'>
              <FaEnvelope size={22} className='text-cyan-500' />
              <span>amkam@lenosol.com</span>
            </div>
            <div className='text-slate-300 flex items-center gap-4 hover:text-cyan-400 transition-colors'>
              <FaPhone size={22} className='text-cyan-500' />
              <span>+232 76 716 997</span>
            </div>
          </div>

          <p className='text-slate-100 text-xl font-bold mt-10'>Follow Us</p>
          <div className='mt-6 flex gap-4'>
            {[FaFacebook, FaLinkedin, FaX, FaYoutube].map((Icon, idx) => (
              <button
                key={idx}
                className='w-12 h-12 bg-slate-800 hover:bg-cyan-500 text-slate-100 hover:text-slate-950 transition-all rounded-full flex items-center justify-center cursor-pointer'
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>

        {/* Form Column */}
        <div className='lg:w-3/5'>
          <form className='bg-[#0d171b] p-8 md:p-10 rounded-xl border border-slate-800'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Name */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='full-name'
                  className='text-slate-50 font-medium'
                >
                  Full Name
                </label>
                <div className='bg-[#18262a] border border-slate-600 rounded-md flex items-center focus-within:border-cyan-500 transition-colors'>
                  <input
                    type='text'
                    id='full-name'
                    placeholder='John Doe'
                    className='pl-4 py-3 w-full text-slate-50 bg-transparent focus:outline-none'
                  />
                  <FaUser className='mr-4 text-slate-500' />
                </div>
              </div>

              {/* Email */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-slate-50 font-medium'>
                  Email Address
                </label>
                <div className='bg-[#18262a] border border-slate-600 rounded-md flex items-center focus-within:border-cyan-500 transition-colors'>
                  <input
                    type='email'
                    id='email'
                    placeholder='youremail@gmail.com'
                    className='pl-4 py-3 w-full text-slate-50 bg-transparent focus:outline-none'
                  />
                  <FaEnvelope className='mr-4 text-slate-500' />
                </div>
              </div>

              {/* Phone */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='phone-number'
                  className='text-slate-50 font-medium'
                >
                  Phone Number
                </label>
                <div className='bg-[#18262a] border border-slate-600 rounded-md flex items-center focus-within:border-cyan-500 transition-colors'>
                  <input
                    type='tel'
                    id='phone-number'
                    placeholder='+232 76 716997'
                    className='pl-4 py-3 w-full text-slate-50 bg-transparent focus:outline-none'
                  />
                  <FaPhone className='mr-4 text-slate-500' />
                </div>
              </div>

              {/* Subject */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='subject' className='text-slate-50 font-medium'>
                  Subject
                </label>
                <div className='bg-[#18262a] border border-slate-600 rounded-md flex items-center focus-within:border-cyan-500 transition-colors'>
                  <select
                    id='subject'
                    className='pl-4 py-3 w-full text-slate-50 bg-transparent focus:outline-none'
                  >
                    <option>Discuss my project</option>
                    <option>Business inquiry</option>
                    <option>Support</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className='mt-6 flex flex-col gap-2'>
              <label htmlFor='message' className='text-slate-50 font-medium'>
                Message
              </label>
              <textarea
                id='message'
                rows={4}
                placeholder='How can we help you?'
                className='pl-4 py-3 w-full text-slate-50 bg-[#18262a] border border-slate-600 rounded-md focus:border-cyan-500 transition-colors focus:outline-none'
              ></textarea>
            </div>

            <button
              type='submit'
              className='mt-8 flex items-center justify-center gap-2 py-4 px-8 bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all rounded-lg'
            >
              Send Message
              <MdKeyboardArrowRight size={22} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
