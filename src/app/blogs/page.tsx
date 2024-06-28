'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

import { subtitle, title } from '@/components/primitives';
import { Button } from '@nextui-org/button';
import ShineBorder from '@/components/magicui/shine-border';

export default function ProjectsPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const Projects = [
    {
      src: 'https://drive.google.com/file/d/1NLzpdcJMbsbvqbbqHUroJHr96LZCWRSZ/preview',
      title: 'Clean Architecture.',
      subtitle: '',
      description:
        'A Comprehensive Guide to Achieving Decoupled, Maintainable, and Testable Codebases',
    },
    // {
    //   src: 'https://drive.google.com/file/d/1NLzpdcJMbsbvqbbqHUroJHr96LZCWRSZ/preview',
    //   title: 'Editing Your Way',
    //   subtitle: 'TO SUCCESS.',
    //   description:
    //     'Pro Tips and Strategies for Building a Freelance Video Editing Career.',
    // },
    // {
    //   src: 'https://drive.google.com/file/d/1NLzpdcJMbsbvqbbqHUroJHr96LZCWRSZ/preview',
    //   title: 'Editing Your Way',
    //   subtitle: 'TO SUCCESS.',
    //   description:
    //     'Pro Tips and Strategies for Building a Freelance Video Editing Career.',
    // },
    // {
    //   src: 'https://drive.google.com/file/d/1NLzpdcJMbsbvqbbqHUroJHr96LZCWRSZ/preview',
    //   title: 'Editing Your Way',
    //   subtitle: 'TO SUCCESS.',
    //   description:
    //     'Pro Tips and Strategies for Building a Freelance Video Editing Career.',
    // },
  ];

  return (
    <section className="mt-[11vh] flex flex-col  items-center justify-center sm:mb-[2vh] sm:mt-[5vh] ">
      <h1 className={title({ className: 'text-white' })}>Blogs</h1>
      <div className="flex items-center justify-end  space-y-10 p-5  sm:mt-16 sm:w-[55vw]  sm:p-0 ">
        {Projects.map((project, index) => (
          <ProjectsSection
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
    </section>
  );
}

const ProjectsSection = ({
  // titleClass,
  subtitleClass,
  project,
}: {
  // titleClass: string;
  subtitleClass: string;
  project: any;
}) => {
  return (
    <ShineBorder className="">
      <div className="rounded-md bg-gray-700/30 p-5">
        <h1
          className={title({
            className: 'text-white ',
            size: 'md',
          })}
        >
          {project.title}
        </h1>
        <p className={subtitleClass}>{project.description}</p>
        <Button className="mt-3">read more</Button>
      </div>
    </ShineBorder>
  );
};

{
  /* <div className="my-5 flex w-fit flex-col items-center justify-center rounded-2xl bg-transparent  p-3 sm:my-0 sm:p-6  lg:w-[35vw] ">
  <iframe
  allowFullScreen
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
  className="h-[30vh] w-[80vw] rounded-xl sm:h-[35vh] sm:w-[60vw] md:w-[50vw] lg:w-[33vw]"
  referrerPolicy="strict-origin-when-cross-origin"
  src={project.src}
  title="Project"
/>
  <div className="flex w-[80vw] flex-col items-start  justify-start pl-2 pt-3 sm:w-[50vw] lg:h-[20vh] lg:w-[33vw]">
    <div className="-mb-2 flex  flex-wrap  items-start sm:mb-1 sm:flex-row ">
      <h1
        className={title({
          className: 'pr-2 text-white sm:mb-0',
          size: 'md',
        })}
      >
        {project.title}
      </h1>
    </div>
    <p className={subtitleClass}>{project.description}</p>
  </div>
</div>; */
}
