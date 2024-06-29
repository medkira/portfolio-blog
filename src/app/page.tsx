'use client';

import Image from 'next/legacy/image';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

import personalImage from '../../public/images/personal-image.jpg';

import { subtitle, title } from '@/components/primitives';
import { roboto } from '@/config/fonts';
import BlogSection from '@/components/blogs/BlogSection';

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
    </section>
  );
}

const HeroSection = () => {
  return (
    <div className="mt-[2.2vh] flex h-[99vh] w-full flex-col items-center justify-center  gap-3 overflow-hidden  p-3 sm:mt-[1.7vh] sm:p-6 ">
      <div
        className=" relative mt-[8vh] flex w-full flex-col justify-around gap-4 overflow-hidden
        rounded-2xl  p-5 pt-5 sm:mt-[5vh] sm:flex-row
        md:items-center  md:p-5 md:px-[35px] lg:h-[79vh]  "
      >
        {/* mb-5  rounded-2xl bg-[#A9E920] */}
        {/* <div className=" rounded-2xl bg-[#A9E920]"> */}
        <Image
          // alt="Woman listing to music"
          className="scale-95 rounded-lg object-cover"
          // height={1100}
          src={personalImage}
          // width={500}
        />

        {/* </div> */}
        <div className="  flex flex-col gap-2 lg:w-[85vw] ">
          <div className=" flex w-full flex-col justify-center  text-center">
            <div className="-mb-2 flex  items-start  sm:mb-1 ">
              <h1 className={title({ className: '-mb-0 text-white sm:mb-0' })}>
                Software Engineer.
              </h1>
              {/* <h1 className={title()}>MONTAGES</h1> */}
            </div>
          </div>
          <div
            className=" sm:text-md   flex w-full   text-start text-lg
          font-medium leading-6 text-white lg:text-xl"
          >
            <h2>
              As a passionate software engineer, I create high-quality solutions
              for mobile and web platforms. I thrive on problem-solving and take
              pride in delivering top-notch user experiences with clean,
              efficient code.
            </h2>
          </div>
          <div>
            <Button
              as={Link}
              className="mb-0 mt-2 rounded-lg bg-[#674086] p-7 text-lg font-bold text-black sm:mt-5"
              href="/contact"
            >
              CONTACT ME
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section1 = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div className="w-full  overflow-hidden  p-3 sm:p-5">
      <div
        className="relative
       flex  w-full flex-col items-start
      gap-4 overflow-hidden rounded-2xl
         bg-[#674a86] px-6 pt-5 sm:flex-row
          sm:gap-6 md:items-center  md:px-14  lg:h-[70vh]  "
      >
        <div className="flex flex-col gap-2">
          <div className=" flex w-full flex-col items-center justify-center   text-center">
            <div className="flex gap-2 pt-5 sm:mb-1 ">
              <h1 className={title({ size: 'md' })}>
                Success in software development comes from a relentless pursuit
                of knowledge, a commitment to clean and scalable architecture,
                and the courage to tackle complex challenges head-on.
              </h1>
              {/* <h1 className={title({ size: 'md' })}>To</h1>
              <h1 className={title({ size: 'md' })}>Get</h1>
              <h1 className={title({ size: 'md' })}>Productive</h1> */}
            </div>
          </div>
          <div className=" flex  w-full items-center justify-center pb-5 text-center text-lg font-medium leading-7 text-black sm:text-xl ">
            <h2>
              „Always keep learning, stay flexible, and never underestimate the
              power of a well-organized codebase”
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
      <div className=" -mb-4 flex w-full flex-col items-center  justify-center pt-6 text-center  sm:mb-1">
        <h1 className={title({ size: 'lg', className: 'text-white' })}>
          Latest Blogs
        </h1>
      </div>
    </div>
  );
};

const Section2 = () => {
  const Blogs = [
    {
      title: 'Clean Architecture.',
      subtitle: '',
      description:
        'A Comprehensive Guide to Achieving Decoupled, Maintainable, and Testable Codebases',
    },
  ];

  return (
    <div className="flex flex-col  items-start justify-center p-3 sm:p-6  md:flex-row md:gap-5">
      {Blogs.map((project, index) => (
        <BlogSection
          key={index}
          project={project}
          subtitleClass={subtitle({
            className:
              'ml-1 mt-4 text-start leading-6 text-gray-400 sm:mt-0 sm:max-w-[45vw]',
          })}
          // titleClass={title({ size: 'md', className: 'text-[#7ef41d]' })}
        />
      ))}
    </div>
  );
};

const Footer = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div className="flex   h-[98vh] min-h-[590px] w-full items-end justify-center overflow-hidden p-3  sm:p-6 ">
      <div
        className="relative
          mb-[3vh]  flex
          h-[80vh]
          min-h-[550px]
          w-[100vw]
          flex-col
           items-center
          overflow-hidden rounded-2xl  bg-[#674a86] sm:h-[81vh] sm:w-[70vw] sm:justify-center md:w-[45vw]"
      >
        {/* <Image className="scale-[35%] rounded-full" src={personalImage} /> */}
        <h1
          className="mt-11  text-[6.8vw] font-bold text-black sm:mt-5 sm:text-[1.7rem]"
          style={{ transform: 'scaleY(1.25)', display: 'inline-block' }}
        >
          Got a project? Let&rsquo;s connect.
        </h1>
        <form className="mt-8 w-full max-w-md rounded-lg p-4  sm:p-3 ">
          <div className="mb-4">
            <label
              className="mb-2 block text-lg font-bold text-gray-700"
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
              className="mb-2 block  text-lg font-bold text-gray-700"
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
              className="mb-2 block rounded-xl text-lg font-bold text-gray-700"
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
    </div>
  );
};

// const CarouselSize = () => {
//   return (
//     <Carousel
//       className="w-full max-w-sm"
//       opts={{
//         align: 'start',
//       }}
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// };

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

// THE BLOGS
{
  /* {sections.map((section) => (
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
                <h2>{section.description}</h2> 
              </div>
        
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
      ))} */
}
