import fs from 'fs';

import matter from 'gray-matter';

export default function getBlogMetadata(basePath: string) {
    const folder = basePath + '/';
    const files = fs.readdirSync(folder);
    const markdownBlogs = files.filter(file => file.endsWith('.md'));

    //? get the file data
    const blogs = markdownBlogs.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`);
        const matterResult = matter(fileContents);

        return {
            // title: matterResult.data.title
            slug: filename.replace('.md', '')
        }
    })

    return blogs;
}