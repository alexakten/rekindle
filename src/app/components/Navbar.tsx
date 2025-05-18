import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

export default function Navbar() {
  return (
    <nav className="absolute h-full font-helvetica text-sm top-0 left-0 flex w-full justify-between flex-col items-center p-4">
      <div className="flex justify-between w-full items-start">
        <p>The Growth Accelerator</p>
        <Link className="flex items-center gap-1" href="/">
          Let&apos;s talk <ArrowUpRightIcon weight="bold" size={14} />
        </Link>
      </div>
      <div className="flex justify-between w-full items-end">
        <div className="flex text-xl font-thin gap-4">
          <p className="w-[16rem] ">
            Multidisciplinary Creative Venture Platform
          </p>
          <p className="w-[16rem]">Two Engagement Models: Cash or Equity</p>
        </div>
        <p className="opacity-35 font-thin">© reKindle 2025</p>
      </div>
    </nav>
  );
}
