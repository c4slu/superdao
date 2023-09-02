import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.svg";

export const Navbar = (): JSX.Element => {
  return (
    <div className="w-screen h-[6.5rem] flex justify-between items-center px-64 ">
      <div>
        <Image src={logo} alt="Logo" width={130} />
      </div>
      <div>
        <ul className="flex gap-11 text-sm text-white">
          <li className="hover:text-500 transition-colors cursor-pointer">
            Product
          </li>
          <li className="hover:text-500 transition-colors cursor-pointer">
            Use Cases
          </li>
          <li className="hover:text-500 transition-colors cursor-pointer">
            Learn
          </li>
          <li className="hover:text-500 transition-colors cursor-pointer">
            About
          </li>
          <li className="hover:text-500 transition-colors cursor-pointer">
            Jobs
          </li>
        </ul>
      </div>
      <div>
        <button className="px-4 py-1.5 text-sm bg-100  hover:bg-500 hover:text-black transition-colors  rounded">
          Login
        </button>
      </div>
    </div>
  );
};
