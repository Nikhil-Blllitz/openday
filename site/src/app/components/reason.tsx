import React from 'react';
import Image from 'next/image';

const Reason = () => {
  return (
    <div className=" max-sm:pt-[5vw] mt-[0rem] pt-16 relative overflow-hidden">
      {/* WHY INTUIT Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="max-sm:text-[7vw] tracking-tight text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="font-['BS'] text-black">WHY </span>
          <span className="font-['BS'] text-green-500 ">ATTEND</span>
          <span className="font-['BS'] text-green-500">?</span>
        </h2>
        <p className="font-['OSK'] text-center text-gray-700 max-w-3xl mx-auto mb-[2em] tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal">
          Dive into an immersive experience at our exclusive technical exhibition, where innovation meets creativity. Explore visionary ideas, cutting-edge technology, and limitless possibilities!
        </p>
      </div>

      {/* First Discover Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        <div className="max-sm:mb-0 relative w-full md:w-1/2">
          <div className="relative z-10">
            <Image
              src="/r1.webp"
              alt="Innovation Stalls"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="relative w-full md:w-1/2 md:pl-8">
          <div className="relative flex items-start">
            <div className="absolute left-0 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-4 max-sm:w-12 max-sm:h-12 max-sm:text-2xl font-['OSK']">
              1
            </div>
            <div className="ml-20 max-sm:ml-16">
              <h3 className="text-3xl font-bold text-green-700 mb-2 font-['OSK'] tracking-wide md:tracking-wider">Cambrian Open House 2025: Where Ideas Converge</h3>
              <p className="text-gray-700 font-['OSK'] tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal">
                With over 120+ stalls, Cambrian open house 2025, brings together a vibrant mix of technology, creativity, and culture. From food and flea markets to interactive panel discussions with industry experts, experience a dynamic environment where ideas and insights come together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Discover Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-8 px-4 mt-12">
        <div className="max-sm:mb-0 relative w-full md:w-1/2">
          <div className="relative z-10">
            <Image
              src="/reasons_page/r2.webp"
              alt="Innovation Stalls"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="absolute top-8 right-8 -z-10">
            <div className="w-4 h-4 bg-green-200 rounded"></div>
          </div>
          <div className="absolute top-24 right-24 -z-10">
            <div className="w-2 h-2 bg-green-200 rounded-full"></div>
          </div>
          <div className="absolute bottom-16 right-16 -z-10">
            <div className="w-6 h-6 bg-green-200 rounded-full"></div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 md:pr-12">
          <div className="flex items-start mb-4">
            <div className="absolute left-0 lg:hidden bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-4 max-sm:w-12 max-sm:h-12 max-sm:text-2xl font-['OSK']">
              2
            </div>
            <div className='max-sm:ml-16'>
              <h3 className="text-3xl font-bold text-green-700 mb-2 font-['OSK'] tracking-wide md:tracking-wider">Fueling Future Minds</h3>
              <p className="text-gray-700 font-['OSK'] tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal">
                Discover exclusive startups and research from Cambridge Institute of Technology, along with innovative student projects and club showcases. Witness the power of creativity and collaboration as future leaders present solutions that shape tomorrow.
              </p>
            </div>
            <div className="max-sm:hidden right-0 absolute bg-green-500 text-white rounded-[100%] w-[3rem] h-[3rem] flex items-center justify-center text-3xl font-bold font-['Audiowide']">
              2
            </div>
          </div>
        </div>
      </div>


{/* Inauguration Highlight Section */}
<div className="max-w-6xl mx-auto flex flex-col items-center justify-center md:flex-row items-center gap-8 px-6 py-12 mt-20 bg-white rounded-3xl shadow-lg border border-gray-200">
  
  {/* Image */}
  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-green-500 shadow-lg flex-shrink-0">
    <Image
      src="/reasons_page/AicteeChairman.webp" // replace with actual path
      alt="Prof. TG Sitharam"
      layout="fill"
      objectFit="cover"
    />
  </div>

  {/* Text Content */}
  <div className="text-center items-center md:text-left max-w-2xl">

    {/* Tag */}
    <p className="inline-block bg-gradient-to-r from-green-00 to-green-700 text-white text-[3.5vw] sm:text-sm md:text-base px-6 py-2 rounded-full mb-4 font-['OSK'] tracking-wide shadow-md uppercase">
  Grand Inauguration by AICTE Chairman
</p>

    {/* Name */}
    <h3 className="text-[7vw] sm:text-3xl md:text-4xl font-bold text-green-700 font-['BS'] mb-1 leading-snug">
      TG Sitharam
    </h3>

    {/* Designation */}
    <p className="text-[4vw] sm:text-lg md:text-xl text-gray-700 font-['OSK'] mb-3">
      Chairman, AICTE — Govt. of India
    </p>

    {/* Description */}
    <p className="text-gray-600 font-['OSK'] text-[3.8vw] sm:text-base md:text-lg leading-relaxed tracking-wide">
      Cambrian Open House 2025 is honored to be inaugurated by 
      <span className="font-semibold text-green-600"> Prof. (Dr.) T G Sitharam</span>, 
      Chairman of the All India Council for Technical Education (AICTE), Government of India.
      His presence elevates the event’s national importance — celebrating creativity, leadership, and the limitless potential of India’s young innovators.
    </p>

    {/* Callout */}
    <p className="text-green-600 font-semibold text-[4vw] sm:text-lg md:text-xl mt-4 font-['BS']">
      Be there to witness this historic moment!
    </p>

  </div>
</div>





      {/* WHO CAN JOIN Section */}
      <div className="w-full relative mt-16">
        <h2 className="max-sm:text-[5vw] text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="font-['BS'] text-black">WHO CAN </span>
          <span className="font-['BS'] text-green-500">JOIN!</span>
        </h2>
        <p className="font-['OSK'] max-sm:mt-[1vw] text-center text-gray-700 tracking-wider md:tracking-widest text-lg md:text-xl font-light leading-snug md:leading-normal max-w-4xl mx-auto px-4">
          Cambrian Open House 2025 welcomes everyone! Whether you are a tech enthusiast, student, entrepreneur, or a curious mind eager to explore new ideas and experience innovative demonstrations, this event is for you. Entry is absolutely free!!!<br></br>
          Register now and join us for an immersive experience!
        </p>

        <div className="relative">
          <div className="flex justify-center">
            <div className="relative w-full">
              <Image
                src="/reasons_page/r3.webp"
                alt="Innovation Stalls"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom blur effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[1vw] backdrop-blur-md pointer-events-none"></div>
    </div>
  );
};

export default Reason;