"use client";

import Image from "next/image";
import { useState } from "react";
import { ModeToggle } from "~/components/ui/toggle";
import { Footer } from "~/components/footer";

import natoriLogo from "~/assets/images/natori.png";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleHamburgerClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <nav className="flex justify-between px-12 py-5 sticky top-0 bg-transparent bg-opacity-10 backdrop-filter backdrop-blur-lg z-10">
        <div className="flex-row justify-between items-center pt-1">
          <div className="cursor-pointer" onClick={handleHamburgerClick}>
            {!showSidebar ? (
              <>
                <div className="w-[30px] h-[2px] my-[6px] bg-black dark:bg-white -translate-y-0  duration-200"></div>
                <div className="w-[30px] h-[2px] my-[6px] bg-black dark:bg-white  duration-200"></div>
                <div className="w-[30px] h-[2px] my-[6px] bg-black dark:bg-white translate-y-0 duration-200"></div>
              </>
            ) : (
              <>
                <div className="w-[30px] h-[2px] my-[6px] opacity-0  translate-y-2 duration-300"></div>
                <div className="w-[30px] h-[2px] my-[6px] bg-black dark:bg-white duration-400"></div>
                <div className="w-[30px] h-[2px] my-[6px] opacity-0 -translate-y-2 duration-300"></div>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ModeToggle />
        </div>
      </nav>

      <div
        className={`fixed top-15 transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-10 w-screen h-screen text-white dark:text-white bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg`}
      >
        <div className="flex flex-col justify-center items-center">
          <Image src={natoriLogo} alt="Natori Logo" width={300} height={300} />
        </div>
        <div className="flex justify-center items-center mt-10 mb-20 space-x-72">
          <ul className="text-2xl text-center uppercase space-y-7 text-zinc-400 cursor-pointer">
            <li>News</li>
            <li>Live</li>
            <li>Discography</li>
            <li>Video</li>
            <li>Biography</li>
            <li>Goods</li>
            <li>Official Home</li>
          </ul>
          <ul className="text-2xl text-center uppercase space-y-7 text-zinc-400 cursor-pointer">
            <li>News</li>
            <li>Live</li>
            <li>Discography</li>
            <li>Video</li>
            <li>Biography</li>
            <li>Goods</li>
            <li>Official Home</li>
          </ul>
        </div>

        <Footer />
      </div>
    </>
  );
};
