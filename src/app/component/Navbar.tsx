import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="flex justify-center w-full bg-slate-200 m-0 shadow-md shadow-slate-500 dark:bg-slate-700/60 dark:shadow-slate-400 sticky top-0 mb-6 z-10">
      <div className="flex flex-row justify-around place-content-center w-full p-4 max-[400px]:flex-col max-[400px]:justify-center max-[400px]:text-center">
        <div className="text-2xl font-bold stroke dark:text-slate-50/20">
          <div className="flex sm:gap-x-3 gap-x-1 flex-row max-[210px]:flex-col">
            <Link href="/cc.png">
              <img
                src="/cc.png"
                alt="Collins"
                className="w-11 h-11 -mt-1 rounded-full"
              />
            </Link>
            <Link
              href="/"
              className="flex sm:gap-x-3 gap-x-1 flex-row max-[210px]:flex-col"
            >
              Tony Collins Blog
            </Link>
          </div>
        </div>

        <div className="flex text-[26px] max-[400px]:justify-center mt-1 gap-x-2 flex-wrap">
          <Link
            href="https://www.facebook.com/tonycollins.ugwu.18?mibextid=rS40aB7S9Ucbxw6v"
            className="transition duration-150 delay-100 scale-125 hover:scale-150 ease-in-out"
          >
            <TiSocialFacebook />
          </Link>

          <Link
            href="https://instagram.com/tonycollinsu?igshid=YWYwM2I1ZDdmOQ=="
            className="transition duration-150 delay-100 scale-110 hover:scale-125 ease-in-out"
          >
            <FaInstagramSquare />
          </Link>

          <Link
            href="https://twitter.com/ugwu_somto5?t=b32VnJTFlyDSqqUnMx_eg&s=08"
            className="transition duration-150 delay-100 scale-125 hover:scale-150 ease-in-out"
          >
            <TiSocialTwitter />
          </Link>

          <Link
            href="https://wa.me/+2348101245121"
            className="transition duration-150 delay-100 scale-110 hover:scale-125 ease-in-out"
          >
            <IoLogoWhatsapp />
          </Link>

          <Link
            href="https://github.com/ugwucollins"
            className="transition duration-150 delay-100 scale-110 hover:scale-125 ease-in-out"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </header>
  );
}
