import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
   image?: string;
  featured?: boolean;
  trending?: boolean;
   tags?: string[];   // ✅ ADD THIS
};

export type BlogPost = BlogMeta & {
  content: string;
};

export function getAllBlogs(): BlogMeta[] {
  if (!fs.existsSync(blogsDirectory)) return [];

  const now = new Date();

  const blogs = fs.readdirSync(blogsDirectory).map((file) => {
    const slug = file.replace(".md", "");
    const fullPath = path.join(blogsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      category: data.category,
      readTime: data.readTime,
      image: data.image ?? null,
      featured: data.featured ?? false,
      trending: data.trending ?? false,
      tags: data.tags || [],
      
    };
  });

  // ✅ SCHEDULED BLOG FILTER
  const publishedBlogs = blogs.filter((blog: any) => {
    if (!blog.date) return true;

    const publishDate = new Date(blog.date);
    return publishDate <= now;
  });

  // newest first
  return publishedBlogs.sort(
    (a: any, b: any) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
export async function getBlogBySlug(
  slug: string
): Promise<BlogPost | null> {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    category: data.category,
    readTime: data.readTime,
    image: data.image ?? null,   // ✅ THIS LINE (IMPORTANT)
    featured: data.featured ?? false,
    trending: data.trending ?? false,
    tags: data.tags || [],
    content: processed.toString(),
  };
  
}

