import Link from "next/link";
import UserDate from "./component/user/page";

export default function Home() {
  return (
    <>
      <main className="flex justify-center w-full">
        <div className="w-full sm:max-w-[950px] max-w-[700px] mx-10 sm:mx-28 max-[300px]:mx-5 max-[170px]:mx-1">
          <h1 className="text-3xl font-bold ml-1 mb-6 dark:text-black">Blog</h1>
          <UserDate />
        </div>
      </main>
    </>
  );
}

//
{
  /* <div>
          {Blogs.map((blog: any) => (
            <Link href={`/user/${blog.id}`}>
              <h1
                key={blog.id}
                className="mb-3 text-xl font-semibold dark:text-white underline hover:font-bold transition-all duration-150 delay-150 ease-in-out ml-1"
              >
                {blog.Title}
              </h1>
              {/* <h1 key={blog.id}>{blog.Title}</h1> 
            </Link>
          ))}
        </div> */
}
// <div>
//   {Blogs.map((blog: any) => (
//     <Link href={`/user/${blog.id}`}>
//       <h1
//         key={blog}
//         className="mb-3 text-xl font-semibold dark:text-white underline hover:font-bold transition-all duration-200 delay-200 ease-in-out ml-1"
//       >
//         {blog.Title}
//       </h1>
//       {/* <h1 key={blog.id}>{blog.Title}</h1> */}
//     </Link>
//   ))}
// </div>;
{
  /* <div>
          {Blogs.map((blog: any) => (
            <>
              <div
                key={blog.id}
                onClick={() => setselect(blog.id)}
                className="mb-3 text-xl font-semibold dark:text-black underline hover:font-bold transition-all duration-150 delay-150 ease-in-out ml-1 cursor-pointer"
              >
                {blog === select ? blog.body : blog.Title}
              </div>
              <div></div>
            </>
          ))}
        </div> */
}
//  AnimatePresence: react.FunctionComponent<react.PropsWithChildren<AnimatePresenceProps>>
