const ServicesPage = () => {
  return (
    <section className='pt-10 pb-24 contact-us px-40'>
      <div className='mt-10 pl-16 flex justify-center'>
        <div>
          <h2 className='text-slate-100 font-bold text-3xl md:text-4xl lg:text-6xl mt-3 text-center'>
            Our Services
          </h2>
          <div className='mt-10 flex justify-center'>
            <div className='flex gap-3 items-center'>
              <p className='text-slate-200 text-xl font-bold text-center'>
                Home
              </p>
              <div className='h-2 w-2 bg-amber-50 rounded-full'></div>
              <p className='text-cyan-500 text-xl font-bold text-center'>
                Our Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
