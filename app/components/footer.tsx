import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationPin, FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='footer py-12 md:py-16'>
      <h2
        id='footer-text'
        className='font-bold text-4xl md:text-[7.9vw] text-center text-cyan-500 px-4'
      >
        Get In Touch <span className='text-slate-300'>- Contact</span> US
      </h2>

      <div className='px-6 md:px-16 lg:px-56 mt-10 md:mt-16 flex flex-col md:flex-row gap-10 md:gap-5'>
        {/* Left: Newsletter */}
        <div className='w-full md:w-2/3'>
          <h3 className='text-slate-100 text-2xl font-bold'>Newsletter</h3>
          <div className='mt-5 md:pr-24'>
            <p className='text-slate-200 leading-6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus corporis, optio minus dolores veniam perspiciatis
              quidem debitis dolor quis quaerat.
            </p>
            <form className='mt-8 md:mt-12'>
              <div className='flex flex-col sm:flex-row gap-3'>
                <div className='border border-slate-100 flex items-center gap-3 px-4 grow'>
                  <FaEnvelope className='text-slate-200' size={20} />
                  <input
                    type='text'
                    placeholder='Email address'
                    className='w-full bg-transparent text-slate-200 py-3 focus:outline-0'
                  />
                </div>
                <button
                  type='submit'
                  className='py-3 px-6 bg-cyan-500 text-white cursor-pointer whitespace-nowrap'
                >
                  Sign Up
                </button>
              </div>
              <p className='text-slate-200 mt-6 text-lg'>
                By subscribing, you accept to our{" "}
                <Link
                  href='/privacy-policy'
                  className='text-cyan-500 font-bold'
                >
                  Privacy Policy
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>

        {/* Right: Services & Location */}
        <div className='w-full md:w-2/3 flex flex-col sm:flex-row gap-10 md:gap-24'>
          <div>
            <h3 className='text-slate-100 text-2xl font-bold'>Services</h3>
            <div className='mt-5'>
              <ul className='flex flex-col gap-3'>
                <li className='text-slate-200'>Web Design</li>
                <li className='text-slate-200'>Web Development</li>
                <li className='text-slate-200'>UI/UX Design</li>
                <li className='text-slate-200'>IT Consultancy</li>
                <li className='text-slate-200'>Graphics Design</li>
                <li className='text-slate-200'>SaaS Development</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className='text-slate-100 text-2xl font-bold'>Location</h3>
            <div className='mt-5'>
              <p className='text-slate-100 flex gap-2 items-center'>
                <FaLocationPin className='shrink-0' /> 6 John Thorpe, Rokel, Freetown
              </p>
            </div>
            <div className='mt-6'>
              <h3 className='text-slate-100 text-lg font-semibold'>Contacts</h3>
              <p className='text-slate-100 flex gap-2 items-center my-2'>
                <FaEnvelope className='shrink-0' />
                amkam@lenosol.com
              </p>
              <p className='text-slate-100 flex gap-2 items-center mb-2'>
                <FaPhone className='shrink-0' />
                +23276716997
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className='px-6 md:px-16 lg:px-56 mt-16'>
        <div className='border border-slate-600 relative'>
          <a
            href='#'
            title='Back to top'
            aria-label='Back to top'
            className='bg-slate-100 w-12 h-12 absolute top-0 left-[50%] -ml-6 -mt-6 rounded-full flex justify-center items-center shadow-2xl cursor-pointer'
          >
            <FaArrowUp size={20} />
          </a>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center gap-5 mt-10 md:mt-6 text-center md:text-left'>
          <div>
            <p className='text-slate-200'>
              &copy; 2026 Lenosol - IT Solutions. All rights reserved.
            </p>
          </div>
          <div>
            <ul className='flex flex-wrap justify-center items-center gap-4 md:gap-6'>
              <li>
                <Link href='/' className='text-slate-200'>Home</Link>
              </li>
              <li>
                <Link href='/about' className='text-slate-200'>About Us</Link>
              </li>
              <li>
                <Link href='/services' className='text-slate-200'>Services</Link>
              </li>
              <li>
                <Link href='/privacy-policy' className='text-slate-200'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/contact' className='text-slate-200'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
