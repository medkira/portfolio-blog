import fs from 'fs';

import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

import styles from './style.module.scss';

import getBlogtMetadata from '@/utils/getBlogMetadata';

function getBlogContent(slug: string) {
  const folder = 'src/Blogs/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf-8');

  const matterResult = matter(content);

  return matterResult;
}

export const generateStaticParams = async () => {
  const blogs = getBlogtMetadata('src/Blogs/');

  return blogs.map((blog) => ({ slug: blog.slug }));
};

// export async function generateMetadata({ params, searchParams }) {
//     const id = params?.slug ? ' ⋅ ' + params?.slug : ''
//     return {
//         title: `The Bubbly Baker ${id.replaceAll('_', ' ')}`
//     }
// }

export default function BlogPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const blogs = getBlogContent(slug);

  return (
    <div className="mt-[11vh] flex flex-col  items-center justify-center rounded-lg bg-slate-200/10 p-5 sm:mb-[2vh] sm:mt-[10vh] sm:p-20">
      <article>
        <Markdown className={styles.markdown}>{blogs.content}</Markdown>
      </article>
    </div>
  );
}
