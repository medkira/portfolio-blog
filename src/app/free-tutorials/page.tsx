'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

import { subtitle, title } from '@/components/primitives';

export default function FreeTutorialsPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="mt-[11vh] flex flex-col items-center justify-center  sm:mt-[5vh] ">
      <h1 className={title({ className: 'text-white' })}>
        Free <span className="text-[#7ef41d]">Tutorials</span>
      </h1>
      <div
        className=" 
        my-5 flex w-fit flex-col items-center justify-center rounded-xl
       bg-[#F5F5F5]  p-3  sm:mt-5"
      >
        <iframe
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          className="h-[30vh] w-[80vw] rounded-lg sm:h-[55vh] sm:w-[60vw] md:w-[50vw]"
          referrerPolicy="strict-origin-when-cross-origin"
          src="https://drive.google.com/file/d/1NLzpdcJMbsbvqbbqHUroJHr96LZCWRSZ/preview"
          title="Project"
        />
        <div className="flex w-[80vw] flex-col items-start justify-start pl-2  sm:w-[50vw]">
          <div className="-mb-2 flex flex-col items-start  sm:mb-1 ">
            <h1
              className={title({ className: '-mb-1 pt-3 sm:mb-0', size: 'md' })}
            >
              Editing Your Way
            </h1>
            <h1 className={title({ size: 'md', className: 'text-[#7ef41d]' })}>
              TO SUCCESS.
            </h1>
          </div>
          <p
            className={subtitle({
              className:
                'ml-1 mt-6 text-start leading-6 text-gray-700 sm:mt-0 sm:max-w-[45vw]',
            })}
          >
            Pro Tips and Strategies for Building a Freelance Video Editing
            Career.
          </p>
        </div>
      </div>
    </section>
  );
}
