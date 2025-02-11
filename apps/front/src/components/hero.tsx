const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-sky-500 to-indigo-500 text-white pt-20 sm:pt-18 md:pt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center flex-wrap px-3">
        {/* Left Col */}
        <div className="flex flex-col w-full justify-center items-start md:w-2/5 text-center md:text-left">
          <p className="capitalize tracking-wide w-full">
            Explore insights, tutorials and stories for curious minds.
          </p>
          <h2 className="my-5 text-5xl font-bold leading-tight">
            Welcome to MAS Blog
          </h2>

          <p className="capitalize leading-normal text-xl">
            Join a community that enjoys learning, creating and growing
            togather.
          </p>
        </div>
        {/* Right Col */}
        <div className="w-full flex justify-center text-center py-7 md:w-3/5">
          <img src="/hero.svg" alt="hero section" className="w-full md:w-3/4 z-30" />
        </div>
      </div>
      <div className="relative -mt-10 lg:-mt-24">

      </div>
    </div>
  );
};

export default Hero;
