import React from "react";

const HomeHero = () => {
  return (
    <section className='h-screen pt-24 px-24 home-hero'>
      <p className='text-slate-200'>Welcome to Lenosol</p>
      <h1 className='text-3xl md:text-4xl lg:text-5xl text-slate-50 leading-tight'>
        <b>NextGen Tech Innovators</b>
        <p className='font-thin'>
          and{" "}
          <span className='bg-cyan-50 text-gray-800 px-1 md:px-2'>
            DIGITAL SOFTWARE
          </span>{" "}
          Solutions Experts
        </p>
      </h1>
    </section>
  );
};

export default HomeHero;
