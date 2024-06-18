'use client';

import Image from 'next/legacy/image';
import { useEffect } from 'react';
import Lenis from 'lenis';
import {
  CardFooter,
  Button,
  CardBody,
  Input,
  Textarea,
  AccordionItem,
  Accordion,
} from '@nextui-org/react';
import emailjs from '@emailjs/browser';

import landing from '../../public/images/rent/big-sale-banner.png';
import section1Image from '../../public/images/rent/time-to-get-productive.png';

import section2Image1 from '../../public/images/rent/chairs-rug.png';
import section2Image2 from '../../public/images/rent/salon.png';

import phoneOptimization from '../../public/images/app.png';
import phone from '../../public/images/phone.png';
import responsiveDesign from '../../public/images/responsive-design.png';

import { useContactUsFormStore } from './lib/store';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { title, subtitle } from '@/components/primitives';
import { roboto } from '@/config/fonts';
import { toast } from '@/components/ui/use-toast';

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
      <Section2 />
      {/* <Section3 /> */}
      <Footer />
    </section>
  );
}

const HeroSection = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div className="  w-full  overflow-hidden  p-5 ">
      {/* <Image
        priority
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        src={landing}
      /> */}

      <div
        className="relative
       mt-[8vh] flex  w-full flex-col items-start 
      gap-4 overflow-hidden rounded-md
         bg-[#F0EFEB] px-6 pt-5 sm:mt-[10vh] sm:flex-row 
          sm:gap-6 md:items-center  md:px-14  lg:h-[70vh]  "
      >
        <div className="  flex flex-col gap-2 lg:w-[30vw]">
          <div className=" flex w-full flex-col justify-center  text-center">
            <div className="-mb-4 flex gap-2 sm:mb-1 ">
              <h1 className={title()}>S</h1>
              <h1 className={title()}>A</h1>
              <h1 className={title()}>L</h1>
              <h1 className={title()}>E</h1>
            </div>
          </div>
          <div className=" flex  w-full text-start  text-lg font-medium leading-7 text-black sm:text-xl  ">
            <h2>
              The first step in determining your ideal working hours is to
              figure out when your mind and body naturally work the best.
            </h2>
          </div>
          <div>
            {' '}
            <Button className="mt-6 rounded-md bg-black p-7 text-lg">
              See our big sale
            </Button>
          </div>
        </div>
        <div className="white mt-14">
          <Image
            // alt="Woman listing to music"
            className=" scale-85 rounded-sm object-cover"
            // height={800}
            src={landing}
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
      gap-4 overflow-hidden rounded-md
         bg-[#FFF1E6] px-6 pt-5 sm:flex-row 
          sm:gap-6 md:items-center  md:px-14  lg:h-[70vh]  "
      >
        <div className="flex flex-col gap-2">
          <div className=" flex w-full flex-col justify-center   text-center">
            <div className="flex gap-2 pt-5 sm:mb-1 ">
              <h1 className={title({ size: 'md' })}>Time</h1>
              <h1 className={title({ size: 'md' })}>To</h1>
              <h1 className={title({ size: 'md' })}>Get</h1>
              <h1 className={title({ size: 'md' })}>Productive</h1>
            </div>
          </div>
          <div className=" flex  w-full text-start  text-lg font-medium leading-7 text-black sm:text-xl  ">
            <h2>
              The first step in determining your ideal working hours is to
              figure out when your mind and body naturally work the best.
            </h2>
          </div>
        </div>
        <div className="white mt-14">
          <Image
            // alt="Woman listing to music"
            className=" scale-95 rounded-md object-cover"
            // height={800}
            src={section1Image}
            // width={800}
          />
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col  items-start justify-center p-5 md:flex-row md:gap-5">
      <div className="flex w-full flex-col items-center justify-center  p-5 pt-6 md:w-[33vw]">
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
      </div>

      <div className="w-full overflow-hidden  pb-5  md:w-[33vw]">
        <div
          className="relative
       flex  w-full flex-col items-start 
      gap-4 overflow-hidden rounded-md
         bg-[#F5F5F5] px-6 pt-5 sm:flex-row sm:gap-6
          md:items-center md:px-14  lg:flex-col  lg:gap-0"
        >
          <div className="flex flex-col gap-2">
            <div className=" flex w-full flex-col justify-center   text-center">
              <div className="flex gap-2 pt-5 sm:mb-1 ">
                <h1 className={title({ size: 'md' })}>Japandi Design</h1>
              </div>
            </div>
            <div className=" flex  w-full text-start  text-lg font-medium leading-7 text-black sm:text-xl  ">
              <h2>
                Japandi blends the smooth, modern lines of Scandinavian design
                with the sleek, functional, elegance of the Japanese aesthetic.
              </h2>
            </div>
            {/* <div>
            {' '}
            <Button className="mt-6 rounded-md bg-black p-7 text-lg">
              See our big sale
            </Button>
          </div> */}
          </div>
          <div className="white mt-14">
            <Image
              // alt="Woman listing to music"
              className=" scale-95 rounded-md object-cover"
              // height={800}
              src={section2Image1}
              // width={800}
            />
          </div>
        </div>
      </div>
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
                sometimes feel like you are trying to solve a puzzle. We are
                here to help you decide what rug is right for your space.
              </h2>
            </div>
            {/* <div>
            {' '}
            <Button className="mt-6 rounded-md bg-black p-7 text-lg">
              See our big sale
            </Button>
          </div> */}
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
      </div>
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
    <div className="  h-[100vh]  w-full overflow-hidden  p-5 ">
      <div
        className="relative
       mt-[8vh] flex  h-[85vh] w-full flex-col 
      items-start gap-4 overflow-hidden
         rounded-md bg-[#17282B]  px-6 
          sm:flex-row sm:gap-6  md:items-center md:px-14    "
      >
        <div className="  flex flex-col gap-2 lg:w-[30vw]">
          <div className=" flex w-full flex-col justify-start  text-start">
            <div className="-mb-4 flex flex-col gap-2 pt-5  sm:mb-1">
              <h1 className={title({ size: 'md' })}>contact@rent.com</h1>
              <h1 className={title({ size: 'md' })}>+216 27 33 42 41</h1>
              <h1 className={title({ size: 'md' })}>
                {' '}
                Main st. 10, EAC2CQ, London
              </h1>
            </div>
          </div>
          <div className="flex h-[50vh] flex-col pt-5">
            <h1 className={title({ className: 'pt-6', size: 'md' })}>
              About Us
            </h1>
            <section className="w-[80vw] pt-5 sm:w-[90vw]">
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Who are we?"
                >
                  <p>
                    Total Tech is a cutting-edge agency specializing in web and
                    mobile development. Our team of expert developers and
                    designers is dedicated to creating innovative and
                    user-friendly solutions tailored to your business needs.
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="What services do we offer?"
                >
                  <ul className="flex flex-col items-center justify-center gap-6">
                    <li className="flex flex-col gap-3">
                      <strong>Web Development</strong> We build responsive and
                      robust websites using the latest technologies and best
                      practices to ensure optimal performance and user
                      experience.
                    </li>
                  </ul>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Contact Us"
                >
                  <p>
                    You can reach us at any time by making an appointment.
                    Provide your email or phone number, and choose a convenient
                    day and time. We will call you to discuss your website
                    creation needs and pricing.
                  </p>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>
      </div>

      <p className="p-2">
        powered by{' '}
        <a
          href="https://www.totaltechtn.com"
          className="font-bold text-blue-600 underline"
        >
          Totaltechtn
        </a>
      </p>
    </div>
  );
};
