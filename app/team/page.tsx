"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPlus,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import teamMember1 from "@/app/images/team-member.png";

const teamMembers = [
  { id: 1, name: "Amadu Kamara", role: "C.E.O & Founder" },
  { id: 2, name: "Samuel Amkam", role: "C.T.O & Lead Dev" },
  { id: 3, name: "Ejatu Bah", role: "H.R Manager" },
  { id: 4, name: "Dev Amkam", role: "FullStack Dev" },
  { id: 5, name: "Sarah Johnson", role: "UI/UX Designer" },
  { id: 6, name: "Michael Scott", role: "Project Manager" },
  { id: 7, name: "Jane Doe", role: "QA Engineer" },
  { id: 8, name: "Robert Smith", role: "Cloud Architect" },
];

const TeamPage = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className='home-teams py-20'>
      {/* Header */}
      <div className='container mx-auto px-6 text-center mb-16'>
        <h2 className='text-white font-bold text-5xl'>Our Team</h2>
        <div className='mt-6 flex justify-center items-center gap-3 text-lg font-bold'>
          <span className='text-slate-300'>Home</span>
          <div className='h-2 w-2 bg-amber-50 rounded-full'></div>
          <span className='text-cyan-500'>Our Team</span>
        </div>
      </div>

      {/* Team Grid */}
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className='border border-slate-700 p-3 bg-[#1d2d31] transition-transform duration-300'
            >
              <Image src={teamMember1} alt={member.name} className='w-full' />

              <div className='flex justify-center relative h-12 mt-[-24px]'>
                <button
                  onClick={() =>
                    setActiveId(activeId === member.id ? null : member.id)
                  }
                  className='w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all z-10'
                >
                  {activeId === member.id ? <FaTimes /> : <FaPlus />}
                </button>

                {activeId === member.id && (
                  <div className='absolute bottom-16 bg-cyan-600 py-3 px-6 flex items-center gap-4 shadow-xl z-20'>
                    <Link href='#'>
                      <FaFacebook className='text-white' />
                    </Link>
                    <Link href='#'>
                      <FaLinkedinIn className='text-white' />
                    </Link>
                    <Link href='#'>
                      <FaX className='text-white' />
                    </Link>
                    <Link href='#'>
                      <FaYoutube className='text-white' />
                    </Link>
                  </div>
                )}
              </div>

              <div className='text-center mt-6 pb-6'>
                <h4 className='text-xl text-white font-bold'>{member.name}</h4>
                <p className='text-cyan-400 mt-1'>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
