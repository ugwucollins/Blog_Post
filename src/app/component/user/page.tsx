import getStaticProps from "../../../../lib/getUsers";
import Link from "next/link";

export default function UserDate() {
  const posts = getStaticProps();
  console.log(posts);

  return (
    <div>
      <div className="grid mt-2 lg:grid-cols-[repeat(auto-fit,minmax(50px,_350px))] grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-y-3 gap-x-0 justify-center mb-5">
        {posts.map((post) => (
          <div key={post.frontmatter.id}>
            <div className="flex text-left flex-1 mx-1 flex-col shadow-lg bg-slate-100 ring-2 rounded ring-slate-700/10">
              <div className="p-1">
                <img
                  src={post.frontmatter.cover_img}
                  alt="React loge"
                  className="w-full h-[24vh]"
                />
                <p className="font-semibold cursor-pointer text-[15px] text-slate-700">
                  {post.frontmatter.subtitle}
                </p>
              </div>
              <div className="px-2 font-medium hover:underline text-[17px]">
                {/* <Link href={`/blog/${post.slug}`} key={post.frontmatter.id}>
                  {post.frontmatter.Title}
                </Link> */}
                {/* <Link href={`/blog/${post.slug}`} key={post.frontmatter.id}>
                  {post.frontmatter.Title}
                </Link> */}
                <Link href={`/blog/${post.slug}`}>{post.slug}</Link>
              </div>
              <div className="px-2 text-slate-600 text-xs font-medium mb-2">
                {post.frontmatter.DateTimeLine}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
