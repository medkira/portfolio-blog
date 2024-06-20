'use client';

import Image from 'next/legacy/image';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { Button } from '@nextui-org/react';

import personalImage from '../../public/images/personal-image.jpeg';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { title } from '@/components/primitives';
import { roboto } from '@/config/fonts';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // const container = useRef<HTMLElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: container as any,

  //   offset: ['start start', 'end end'],
  // });

  return (
    // <div className=" flex h-[100%] flex-col content-center justify-end bg-black">
    <section className={`${roboto.className}  `}>
      <HeroSection />
      <Section1 />
      <Section2Title />
      <Section2 />
      {/* <Section3 /> */}
      <Footer />
      <p className="-mt-3 mb-3 flex items-center justify-center text-center text-sm sm:ml-2 sm:justify-start">
        &copy; 2024 [totaltechtn]. All rights reserved.
      </p>
    </section>
  );
}

const HeroSection = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div className="mt-[1vh]  flex w-full flex-col  items-center justify-center  gap-3 overflow-hidden p-5 ">
      {/* relative mt-[8vh] flex w-full flex-col justify-between gap-4
      overflow-hidden rounded-2xl bg-[#F0EFEB] px-6 pt-5 sm:mt-[10vh]
      sm:flex-row sm:gap-x-16 md:items-center md:px-[200px] lg:h-[70vh] */}
      <div
        className=" relative mt-[8vh] flex w-full flex-col justify-around gap-4
        overflow-hidden rounded-2xl bg-[#F0EFEB] p-5 pt-5 sm:mt-[10vh] sm:flex-row
        md:items-center  md:p-5 md:px-[35px] lg:h-[75vh]  "
      >
        <div className="  flex flex-col gap-2 lg:w-[95vw] ">
          <div className=" flex w-full flex-col justify-center  text-center">
            <div className="-mb-2 flex flex-col items-start  sm:mb-1 ">
              <h1 className={title({ className: '-mb-6 sm:mb-0' })}>
                CUTS. EDITS.
              </h1>
              <h1 className={title()}>MONTAGES</h1>
            </div>
          </div>
          <div
            className=" sm:text-md   flex w-full  text-start text-lg font-medium 
          leading-6 text-black lg:text-xl "
          >
            <h2>
              As an editor I help agencies, filmmakers and creatives in
              achieving their goals. Tools like video editing, sounddesign and
              color correction empower us in telling your story. From social
              media content to feature films: I will tackle every obstacle with
              you until the result is satisfying.
            </h2>
          </div>
          <div>
            {' '}
            <Button className="mb-4 mt-3 rounded-lg bg-[#c9fd74] p-7 text-lg font-bold text-black sm:mt-5">
              CONTACT ME
            </Button>
          </div>
        </div>
        {/* mb-5  rounded-2xl bg-[#A9E920] */}
        <div className=" flex rounded-2xl bg-[#A9E920] sm:m-5 ">
          <Image
            // alt="Woman listing to music"
            className=" rounded-2xl object-cover"
            // height={800}
            src={personalImage}
            // width={800}
          />
        </div>
      </div>
    </div>
  );
};

const Section1 = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div className="w-full  overflow-hidden  p-5 ">
      <div
        className="relative
       flex  w-full flex-col items-start 
      gap-4 overflow-hidden rounded-2xl
         bg-[#FFF1E6] px-6 pt-5 sm:flex-row 
          sm:gap-6 md:items-center  md:px-14  lg:h-[70vh]  "
      >
        <div className="flex flex-col gap-2">
          <div className=" flex w-full flex-col items-center justify-center   text-center">
            <div className="flex gap-2 pt-5 sm:mb-1 ">
              <h1 className={title({ size: 'md' })}>
                The way you can awaken feelings just by putting one picture
                after the other is magical to me.{' '}
              </h1>
              {/* <h1 className={title({ size: 'md' })}>To</h1>
              <h1 className={title({ size: 'md' })}>Get</h1>
              <h1 className={title({ size: 'md' })}>Productive</h1> */}
            </div>
          </div>
          <div className=" flex  w-full items-center justify-center pb-5 text-center text-lg font-medium leading-7 text-black sm:text-xl ">
            <h2>
              „This passion drives me to dedicate my life to video editing”
            </h2>
          </div>
        </div>
        {/* <div className="white mt-14">
          <Image
            // alt="Woman listing to music"
            className=" scale-95 rounded-md object-cover"
            // height={800}
            src={section1Image}
            // width={800}
          />
        </div> */}
      </div>
    </div>
  );
};

const Section2Title = () => {
  return (
    <div className="flex flex-col gap-2 p-5">
      <div className=" -mb-8 flex w-full flex-col items-center  justify-center pt-6 text-center  sm:mb-1">
        <h1 className={title({ size: 'lg', className: 'text-white' })}>
          Latest Projects
        </h1>
      </div>
    </div>
  );
};

const Section2 = () => {
  const sections = [
    {
      title: 'Lorem ipsum',
      description: 'description description',
      image: personalImage,
    },
    {
      title: 'Lorem ipsum',
      description: 'description description',
      image: personalImage,
    },
    {
      title: 'Lorem ipsum',
      description: 'description description',
      image: personalImage,
    },
  ];

  return (
    <div className="flex flex-col  items-start justify-center  p-5 md:flex-row md:gap-5">
      {sections.map((section) => (
        <div
          key={section.title}
          className="w-full overflow-hidden pb-5 md:w-[33vw]"
        >
          <div
            className="sm:gap-6md relative flex w-full flex-col items-start  gap-4 overflow-hidden rounded-xl 
          bg-[#F5F5F5] px-6 pt-5  md:px-6 lg:flex-col lg:gap-0"
          >
            <div className="flex flex-col gap-2">
              <div className="flex w-full flex-col items-start justify-start text-start">
                <div className="flex gap-2 pt-5 sm:mb-1">
                  <h1 className={title({ size: 'md' })}>{section.title}</h1>
                </div>
              </div>
              <div className="flex w-full text-start text-lg font-medium leading-7 text-black sm:text-xl">
                <h2>{section.description}</h2> {/* Add description if needed */}
              </div>
              {/* Add Button or other elements here */}
            </div>
            <div className="white mt-2 sm:mt-6">
              <Image
                // alt="..." // Add alt text for accessibility
                className="scale-95 rounded-md object-cover"
                // height={800} // Set height and width as needed
                // width={800}
                src={section.image}
              />
            </div>
          </div>
        </div>
      ))}
      {/* 
      <div className="w-full overflow-hidden md:w-[33vw]  ">
        <div
          className="relative
       flex  w-full flex-col items-start 
      gap-4 overflow-hidden rounded-md
         bg-[#F5F5F5] px-6 pt-5 sm:flex-row 
          sm:gap-6 md:items-center  md:px-14 lg:flex-col lg:gap-0 "
        >
          <div className="flex flex-col gap-2">
            <div className=" flex w-full flex-col justify-center   text-center">
              <div className="flex gap-2 pt-5 sm:mb-1 ">
                <h1 className={title({ size: 'md' })}>Dark colors in 2024</h1>
              </div>
            </div>
            <div className=" flex  w-full text-start  text-lg font-medium leading-7 text-black sm:text-xl  ">
              <h2>
                Choosing the right rug for your living space can be hard. It can

              </h2>
            </div>
       
          </div>
          <div className="white mt-14">
            <Image
              // alt="Woman listing to music"
              className=" scale-95 rounded-md object-cover"
              // height={800}
              src={section2Image2}
              // width={800}
            />
          </div>
        </div>
      </div> */}

      {/* <div className="flex w-full flex-col items-center justify-center  p-5 pt-6 md:w-[33vw]">
        <div className="w-full  pb-5 text-start">
          <h1
            className={title({
              size: 'md',
              color: 'white',
              className: ' text-start',
            })}
          >
            To plant a garden is to believe in tomorrow
          </h1>
        </div>

        <h2 className="flex  w-full text-start  text-medium font-medium leading-7 text-white sm:text-xl ">
          The first step in determining your ideal working hours is to figure
          out when your mind and body naturally work the best.
        </h2>
        <div className="max-w-s flex w-[70vw] items-center justify-center pt-5">
          <CarouselSize />
        </div>
      </div> */}
    </div>
  );
};

const CarouselSize = () => {
  return (
    <Carousel
      className="w-full max-w-sm"
      opts={{
        align: 'start',
      }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const Footer = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div className="flex  h-[98vh] w-full items-center justify-center overflow-hidden  p-5 ">
      <div
        className="relative 
          mt-[8vh]  flex
          h-[85vh] 
          w-[100vw]
          flex-col
           items-center 
          justify-center overflow-hidden rounded-2xl bg-[#c9fd74] sm:w-[50vw]"
      >
        {/* <Image className="scale-[35%] rounded-full" src={personalImage} /> */}
        <h1
          className=" mt-5 text-[1.75rem] font-bold text-black"
          style={{ transform: 'scaleY(1.25)', display: 'inline-block' }}
        >
          Got a project? Let&rsquo;s connect.
        </h1>
        <form className="mt-8 w-full max-w-md rounded-lg  p-4 ">
          <div className="mb-4">
            <label
              className="mb-2 block text-lg font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-[#c9fd74] shadow focus:outline-none"
              id="name"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block  text-lg font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full 
              appearance-none rounded-xl border px-3 py-2 leading-tight
               text-[#c9fd74] shadow focus:outline-none"
              id="email"
              placeholder="Your email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block rounded-xl text-lg font-bold text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded-xl border px-3 py-2 leading-tight text-[#c9fd74] shadow focus:outline-none"
              id="message"
              placeholder="Your message"
              rows={4}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded-lg bg-black px-4 py-2 font-bold text-white focus:outline-none"
              type="button"
            >
              Send
            </button>
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
    </div>
  );
};

// const Section1 = () => {
//   // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

//   return (
//     <div className="w-full  overflow-hidden  p-5 ">
//       <div
//         className="relative
//        flex  w-full flex-col items-start
//       gap-4 overflow-hidden rounded-md
//          bg-[#FFF1E6] px-6 pt-5 sm:flex-row
//           sm:gap-6 md:items-center  md:px-14  lg:h-[70vh]  "
//       >
//         <div className="flex flex-col gap-2">
//           <div className=" flex w-full flex-col justify-center   text-center">
//             <div className="flex gap-2 pt-5 sm:mb-1 ">
//               <h1 className={title({ size: 'md' })}>Time</h1>
//               <h1 className={title({ size: 'md' })}>To</h1>
//               <h1 className={title({ size: 'md' })}>Get</h1>
//               <h1 className={title({ size: 'md' })}>Productive</h1>
//             </div>
//           </div>
//           <div className=" flex  w-full text-start  text-lg font-medium leading-7 text-black sm:text-xl  ">
//             <h2>
//               The first step in determining your ideal working hours is to
//               figure out when your mind and body naturally work the best.
//             </h2>
//           </div>
//         </div>
//         <div className="white mt-14">
//           <Image
//             // alt="Woman listing to music"
//             className=" scale-95 rounded-md object-cover"
//             // height={800}
//             src={section1Image}
//             // width={800}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
