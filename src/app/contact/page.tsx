'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';
import { Button } from '@nextui-org/button';

import { title } from '@/components/primitives';

export default function ContactPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="mt-[11vh] flex flex-col items-center  justify-center    sm:mt-[5vh] ">
      <h1 className={title({ className: 'text-white' })}>
        Contact <span className="text-[#674a86]">Me</span>
      </h1>
      <div
        className="relative
          mb-[3vh]  mt-[5vh]
          flex
          h-[75vh]
          min-h-[550px]
          w-[90vw]
          flex-col
           items-center
          overflow-hidden rounded-2xl  bg-[#674a86] sm:h-[81vh]  sm:w-[75vw] sm:justify-center  lg:w-[45vw]"
      >
        {/* <Image className="scale-[35%] rounded-full" src={personalImage} /> */}
        <h1
          className="mt-11   text-[6.8vw] font-bold text-black sm:mt-5 sm:text-[1.7rem] lg:mt-0"
          style={{ transform: 'scaleY(1.25)', display: 'inline-block' }}
        >
          Got a project? Let&rsquo;s connect.
        </h1>
        <form className="mt-8 w-full max-w-md rounded-lg p-4 text-start  sm:p-3 ">
          <div className="mb-4">
            <label
              className="mb-2 block text-lg font-bold text-gray-700 lg:text-2xl"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-[#674a86] shadow focus:outline-none"
              id="name"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block  text-lg font-bold text-gray-700 lg:text-2xl"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full
              appearance-none rounded-xl border px-3 py-2 leading-tight
               text-[#674a86] shadow focus:outline-none"
              id="email"
              placeholder="Your email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block rounded-xl text-lg font-bold text-gray-700 lg:text-2xl"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-[#674a86] shadow focus:outline-none"
              id="message"
              placeholder="Your message"
              rows={4}
            />
          </div>
          <div className=" flex items-center justify-between">
            <Button
              className="focus:shadow-outline rounded-lg bg-black px-4 py-2 font-bold text-white focus:outline-none"
              type="button"
            >
              Send
            </Button>
          </div>
        </form>
      </div>

      {/* <p className="sticky bottom-5 p-2">
        powered by{' '}
        <a
          className="font-bold text-blue-600 underline"
          href="https://www.totaltechtn.com"
        >
          Totaltechtn
        </a>
      </p> */}
    </section>
  );
}
