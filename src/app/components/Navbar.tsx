//   "use client";

// import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import KindredLogo from "./KindredLogo";

export default function Navbar() {
  // const pathname = usePathname();

  return (
    <nav className="absolute h-full font-helvetica text-sm top-0 left-0 flex w-full justify-between flex-col items-center p-4">
      <div className="flex justify-between w-full items-center">
        <p className="text-sm flex items-center gap-0.5">
          Powered by <KindredLogo />
        </p>
        <Link
          className="flex items-center gap-1 relative group"
          href="mailto:hello@kindredlab.io"
        >
          Let&apos;s talk <ArrowUpRightIcon weight="bold" size={14} />
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
      </div>
      {/* <div className="flex w-full items-start flex-col gap-6">
        {["/", "/about", "/work", "/services", "/contact"].map(
          (path, index) => (
            <Link
              key={index}
              className={`relative group ${
                pathname === path ? "text-black" : "text-opacity-50"
              }`}
              href={path}
            >
              {path === "/"
                ? "Home"
                : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              <span
                className={`absolute left-0 bottom-0 w-full h-[1px] bg-black transform ${
                  pathname === path ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></span>
            </Link>
          )
        )}
      </div> */}
      <div className="flex justify-between w-full items-end">
        <div className="flex text-base sm:text-xl font-thin gap-2 sm:gap-4">
          <p className="w-[12rem] sm:w-[16rem] ">
            Digital Brand Experience Agency
          </p>
          <p className="hidden sm:block w-[12rem] sm:w-[18rem]">
            Strategy, Design, Development, and Performance
          </p>
        </div>
        <p className="opacity-35 font-thin">© reKindle 2025</p>
      </div>
    </nav>
  );
}
