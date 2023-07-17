"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter;
  return (
    <div className="bg-white shadow-2xl items-center px-10 shadow-gray-200 flex justify-between h-20">
      <Link href={"/"}>
        <h className="font-bold text-black text-3xl">Bloging Apilcation</h>
      </Link>
      <Link href={"/new"}>
        <button className="w-28 h-12 bg-[#1572e3] font-semibol text-white">
          Creat Post
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
