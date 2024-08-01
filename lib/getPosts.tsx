import fs from "fs";
import matter from "gray-matter";
import path from "path";
import getProps from "./getProps";

export default async function getPosts(blog: any) {
  console.log({ pathNamesblog: blog });
  const slug = await getProps();
  const pathName = path.join("posts", blog + ".md");

  const markdownWith = fs.readFileSync(pathName, "utf-8");
  const { data: frontmatter, content } = matter(markdownWith);
  return { frontmatter, content };
}
