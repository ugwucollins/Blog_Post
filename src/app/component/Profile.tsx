import Link from "next/link";

export default function Profile() {
  return (
    <>
      <section className="flex justify-center flex-col text-center mb-7">
        <Link href="/">
          <img
            src="/cc.png"
            alt="Tony Collins"
            className="rounded-full w-full max-w-[250px] h-auto max-h-[250px] ring-4 mb-5 dark:ring-slate-200 shadow-lg shadow-slate-500 ring-slate-600 mx-auto object-cover"
          />
        </Link>
        <div className="mt-4 sm:text-2xl text-xl font-semibold">
          Hello and Welcome🖐I'm
          <span className="font-bold"> Tony Collins</span>
        </div>
      </section>
    </>
  );
}
