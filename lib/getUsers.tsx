import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function getStaticProps() {
  const folders = fs.readdirSync(path.join("posts"));
  const files = folders.filter((folder) => folder.endsWith(".md"));
  const posts = files.map((fileName: any) => {
    const slug = fileName.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return posts;
}
