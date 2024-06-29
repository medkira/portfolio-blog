import { Button } from '@nextui-org/button';
import Link from 'next/link';

import ShineBorder from '../magicui/shine-border';
import { title } from '../primitives';

export default function BlogSection({
  // titleClass,
  subtitleClass,
  project,
}: {
  // titleClass: string;
  subtitleClass: string;
  project: any;
}) {
  return (
    <ShineBorder>
      <div className="rounded-md bg-gray-700/30 p-5 sm:pl-5">
        <Link
          className="flex cursor-pointer flex-col items-start "
          href="/blogs/clean-architecture-implementation"
        >
          <h1
            className={title({
              className: 'text-white ',
              size: 'md',
            })}
          >
            {project.title}
          </h1>
          <p className={subtitleClass}>{project.description}</p>
        </Link>
        <Button
          as={Link}
          className="mt-3"
          href="/blogs/clean-architecture-implementation"
        >
          read more
        </Button>
      </div>
    </ShineBorder>
  );
}
