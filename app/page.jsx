'use client'
import React from 'react'
import {ReactTyped}  from 'react-typed';
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  const handleDownloadCV = () => {
    // Logic để tải CV
    window.open('/path/to/your/cv.pdf', '_blank');
  };
  return (
    <section className="h-full">

      {/* Section intro */}
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none home-left xl:w-[60%]">
            <span className="text-xl">Wordpress Developer</span>
            <h1 className="h1 mb-6">
           
              Hello I&apos;m <br/><span className="text-accent">
                   <ReactTyped
                    strings={['Toan Web']}
                    typeSpeed={200}
                    backSpeed={50}
                    loop
                  />
                  </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I am currently a WordPress developer and aspire to become a React.js developer. </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button  variant="outline" size="lg" className="uppercase flex items-center gap-2" onClick={handleDownloadCV}>
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent  hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 home-right xl:w-[40%] ">
            <Photo/>
          </div>
        </div>
      </div>
      {/* end intro */}

      {/* Stats */}
      <Stats/>
      {/* end Stats */}

    </section>
  )
}

export default Home