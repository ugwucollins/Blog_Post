import getPosts from "../../../../lib/getPosts";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function page({ params }: { params: any }) {
  console.log({ looks: params });
  const finding = decodeURI(params.slug);
  const usersPost = getPosts(finding);
  console.log(`Data Logged: ${usersPost}`);

  return (
    <>
      <main className="flex justify-center mx-5 bg-slate-100">
        <div className="">
          <div className="font-bold text-xl my-2">Blogs content </div>
          {usersPost.then((files) => (
            <>
              <h1 className=" underline font-semibold text-xl cursor-pointer my-2 mb-5">
                {files.frontmatter.Title}
              </h1>

              <img
                src={files.frontmatter.cover_img}
                alt={files.frontmatter.cover_img}
                className="w-full h-[50vh]"
              />
              <h2 className="mb-6">{files.frontmatter.subtitle}</h2>

              <article className="prose lg:prose-xl mb-5">
                <MDXRemote source={files.content}></MDXRemote>
              </article>
            </>
          ))}
        </div>
      </main>
    </>
  );
}
