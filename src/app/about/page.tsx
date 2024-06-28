'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';
import { Button } from '@nextui-org/button';
import Image from 'next/legacy/image';

import personalImage from '../../../public/images/personal-image.jpg';

import { title } from '@/components/primitives';

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="mt-[11vh] flex flex-col items-center justify-start  sm:mt-[5vh] ">
      <h1 className={title({ className: 'text-white' })}>
        About <span className="text-[#674a86]">Me</span>
      </h1>
      <div className="flex h-[80vh] w-full flex-col items-center justify-center  gap-3 overflow-hidden  p-3 sm:p-6 ">
        <div
          className=" relative  flex w-full flex-col justify-around gap-4 overflow-hidden
        rounded-2xl bg-[#F0EFEB] p-5   sm:flex-row
        md:items-center  md:p-5 md:px-[35px] lg:h-[79vh]  "
        >
          {/* mb-5  rounded-2xl bg-[#A9E920] */}
          {/* <div className=" rounded-2xl bg-[#A9E920]"> */}
          <Image
            // alt="Woman listing to music"
            className="invisible scale-0 rounded-2xl object-cover sm:visible sm:scale-95"
            // height={1100}
            src={personalImage}
            // width={500}
          />

          {/* </div> */}
          <div className="  flex flex-col gap-2 lg:w-[85vw] ">
            <div className=" flex w-full flex-col justify-center  text-center">
              <div className="-mb-2 flex flex-col items-start  sm:mb-1 ">
                <h1 className={title({ className: '-mb-6 sm:mb-0' })}>
                  Dahmani Med
                </h1>
                <h1 className={title()}>Software Engineer</h1>
              </div>
            </div>
            <div
              className=" sm:text-md   flex w-full   text-start text-lg
          font-medium leading-6 text-black lg:text-xl"
            >
              <h2>
                As a dedicated software engineer with a passion for creating
                user- friendly applications, I specialize in crafting
                high-quality solutions for both mobile and web platforms. I
                thrive on solving problems and take pride in delivering the best
                possible user experience. My commitment to excellence extends to
                writing clean and efficient code to ensure the optimal
                performance of the applications I develop.
              </h2>
            </div>
            <div>
              {/* <Button className="mb-0 mt-2 rounded-lg bg-[#c9fd74] p-7 text-lg font-bold text-black sm:mt-5">
                CONTACT ME
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
