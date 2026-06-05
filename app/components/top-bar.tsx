import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin, FaX } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className='py-2 px-16 flex justify-between'>
      <div className='flex gap-5'>
        <span className='text-slate-200 flex items-center gap-3'>
          {" "}
          <FaLocationPin size={12} /> 6 John Thorpe, Rokel, Freetown
        </span>
        <span className='text-slate-200 flex items-center gap-3'>
          <FaEnvelope size={12} />
          amkam@lenosol.com
        </span>
        <span className='text-slate-200 flex items-center gap-3'>
          {" "}
          <FaPhone size={12} /> +23276 716 997
        </span>
      </div>

      <div>
        <div className='flex gap-5 items-center'>
          <ul className='flex gap-5 items-center'>
            <li>
              <Link href='/help' className='text-slate-200'>
                Help
              </Link>
            </li>
            <li>
              <Link href='/help' className='text-slate-200'>
                Support
              </Link>
            </li>
            <li>
              <Link href='/help' className='text-slate-200'>
                FAQs
              </Link>
            </li>
          </ul>
          <ul className='flex gap-5 items-center'>
            <li>
              <a href='#'>
                <FaFacebookF size={10} className='text-slate-100' />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaX size={10} className='text-slate-100' />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaLinkedin size={10} className='text-slate-100' />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaYoutube size={10} className='text-slate-100' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
