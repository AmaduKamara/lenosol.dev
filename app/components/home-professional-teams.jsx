"use client";

import CaseStudy from "./case-study";
import Teams from "./teams";

const HomeProfessionalTeams = () => {
  return (
    <>
      <section className='home-teams py-10 pb-24'>
        <h2
          id='footer-text'
          className='font-bold text-[9.1vw] text-center text-slate-400'
        >
          Our <span className='text-cyan-200'>Professional</span>{" "}
          <span className='text-cyan-500'>Team</span>
        </h2>

        <Teams />
        <CaseStudy />
      </section>
    </>
  );
};

export default HomeProfessionalTeams;
