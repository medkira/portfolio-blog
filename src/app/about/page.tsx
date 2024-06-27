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
        About <span className="text-[#7ef41d]">Me</span>
      </h1>
      <div className="flex h-[80vh] w-full flex-col items-center justify-center  gap-3 overflow-hidden  p-3 sm:p-6 ">
        <div
          className=" relative  flex w-full flex-col justify-around gap-4 overflow-hidden
        rounded-2xl bg-[#F0EFEB] p-5   sm:flex-row
        md:items-center  md:p-5 md:px-[35px] lg:h-[79vh]  "
        >
          <div className="  flex flex-col gap-2 lg:w-[85vw] ">
            <div className=" flex w-full flex-col justify-center  text-center">
              <div className="-mb-2 flex flex-col items-start  sm:mb-1 ">
                <h1 className={title({ className: '-mb-6 sm:mb-0' })}>
                  SAIF DHIFI
                </h1>
                <h1 className={title()}>VIDEO EDITOR</h1>
              </div>
            </div>
            <div
              className=" sm:text-md   flex w-full   text-start text-lg
          font-medium leading-6 text-black lg:text-xl"
            >
              <h2>
                {/*
              As an editor I help agencies, filmmakers and creatives in
              achieving their goals. Tools like video editing, sounddesign and
              color correction empower us in telling your story. From social
              media content to feature films: I will tackle every obstacle with
              you until the result is satisfying. */}
                I&apos;m a passionate video editor dedicated to transforming raw
                footage into captivating narratives. I collaborate with
                agencies, filmmakers, and creative minds to bring their visions
                to life, from social media snippets to full-length features. My
                editing expertise goes beyond technical proficiency. I focus on
                understanding your goals and collaborating closely to craft a
                final product that resonates with your target audience. Your
                satisfaction is my priority, and I&apos;m committed to exceeding
                expectations at every stage of the editing process.
              </h2>
            </div>
            <div>
              {/* <Button className="mb-0 mt-2 rounded-lg bg-[#c9fd74] p-7 text-lg font-bold text-black sm:mt-5">
                CONTACT ME
              </Button> */}
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
}
