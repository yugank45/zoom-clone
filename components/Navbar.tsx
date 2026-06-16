import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="Yoom-logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        ></Image>
        <p className="text-center font-extrabold text-[26px] text-white max-sm:hidden ">
          Yoom
        </p>
      </Link>
      <div className="flex-between gap-5 ">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
