import React from 'react';
import Image from 'next/image';

const Reason = () => {
  return (
    <div className=" max-sm:pt-[5vw] mt-[-28.5rem] pt-16 relative overflow-hidden">
      {/* WHY INTUIT Section */}
      <div className="  max-w-6xl mx-auto">
        <h2 className="max-sm:text-[7vw] text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="font-['BS'] text-black">WHY </span>
          <span className="font-['BS'] text-green-500">INTUIT </span>
          <span className="font-['BS'] text-green-500">?</span>
        </h2>
        <p className="font-['Inter'] text-center text-gray-700 max-w-3xl mx-auto mb-[2em]">
          Discover a world of innovation at CIT&apos;s largest tech exhibition featuring 100+ stalls of 
          groundbreaking ideas and solutions
        </p>
      </div>

      {/* First Discover Section */}
      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
      
        <div className=" max-sm:mb-0 relative w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative z-10">
            <Image 
              src="/r1.svg" 
              alt="Innovation Stalls" 
              width={400} 
              height={300}
              className="mx-auto"
            />
          </div>
          {/* <div className="bg-[red] absolute top-0 left-0 -z-10">
            <div className="w-4 h-4 bg-green-200 rounded-full"></div>
          </div>
          <div className="absolute top-16 left-16 -z-10">
            <div className="w-2 h-2 bg-green-200 rounded-full"></div>
          </div>
          <div className="absolute bottom-8 left-8 -z-10">
            <div className="w-6 h-6 bg-green-200 rounded"></div>
          </div> */}
        </div>
        
        <div className=" max-sm:p-[5vw] relative  md:w-1/2 md:pl-12">
          <div className="relative flex items-start mb-4">
            <div className="absolute left-0 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-4 max-sm:w-12 max-sm:h-12 max-sm:text-2xl">
              1
            </div>
            <div className='max-sm:ml-16'>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Discover +</h3>
              <p className=" text-gray-700">
                Discover a world of innovation at CIT&apos;s largest tech exhibition featuring 100+ stalls 
                of groundbreaking ideas and solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Discover Section */}
      <div className=" max-sm:pb-0  max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between ">
        <div className=" max-sm:mb-0 relative w-full md:w-1/2 mb-8 md:mb-0">
          <div className=" relative z-10">
            <Image 
              src="/reasons_page/r2.svg" 
              alt="Innovation Stalls" 
              width={400} 
              height={300}
              className="mx-auto "
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
        
        <div className=" max-sm:p-[5vw] relative w-full md:w-1/2 md:pr-12">
          <div className="flex items-start mb-4">
            <div className="absolute lg:hidden bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-4 max-sm:w-12 max-sm:h-12 max-sm:text-2xl">
                2
              </div>
            <div className='max-sm:ml-16'>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Discover +</h3>
              <p className="text-gray-700">
                Discover a world of innovation at CIT&apos;s largest tech exhibition featuring 100+ stalls 
                of groundbreaking ideas and solutions
              </p>
            </div>
            <div className="max-sm:hidden right-0 absolute bg-green-500 text-white rounded-[100%] w-[3rem] h-[3rem] flex items-center justify-center text-3xl font-bold max-sm:w-12 max-sm:h-12 max-sm:text-2xl max-sm:right-4">
              2
            </div>
          </div>
        </div>
      </div>

      {/* WHO CAN JOIN Section */}
      <div className="w-full relative">
        <h2 className="max-sm:text-[5vw] text-4xl md:text-5xl font-bold text-center mt-[1em]">
          <span className="font-['BS'] text-black">WHO CAN </span>
          <span className="font-['BS'] text-green-500">JOIN!</span>
        </h2>
        <p className=" max-sm:mt-[1vw] text-center text-gray-700 ">
          PEOPLE WHO ARE GAY, PEOPLE WHO ARE GAY, PEOPLE WHO ARE GAY
        </p>
        <p className="text-center text-gray-700 max-w-3xl mx-auto ">
          Discover a world of innovation at CIT&apos;s largest tech exhibition 
          featuring 100+ stalls of
        </p>

        <div className="relative">
          <div className="flex justify-center">
              <div className="relative w-full">
                <Image 
                  src="/reasons_page/r3.svg" 
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