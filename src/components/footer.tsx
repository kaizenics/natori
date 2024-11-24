import { FaRegCirclePlay } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <footer className="py-4 md:py-6 px-4 md:px-6">
        <div className="flex justify-center items-center">
          <a
            href="https://www.youtube.com/channel/UC4GXMHCwmONp6XFRB5SayAg"
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto"
          >
            <button className="w-full md:w-auto flex justify-center items-center font-regular text-lg md:text-2xl bg-red-600 text-white py-3 md:py-4 px-8 md:px-14 rounded-full hover:bg-red-700 transition ease-in-out">
              <FaRegCirclePlay className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] mr-2 text-white" />
              Subscribe
            </button>
          </a>
        </div>
        
        <div className="flex justify-center space-x-8 md:space-x-12 items-center mt-4 md:mt-6">
          <a
            href="https://twitter.com/siritoriyowai_?lang=en"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaXTwitter className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
          </a>
          <a
            href="https://www.instagram.com/siritoriyowai_/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaInstagram className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
          </a>
          <a
            href="https://www.tiktok.com/@siritoriyowai_"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaTiktok className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC4GXMHCwmONp6XFRB5SayAg"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaYoutube className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
          </a>
        </div>

        <p className="text-zinc-500 text-center mt-4 md:mt-6 text-sm md:text-base">
          <a
            href="https://www.facebook.com/kaizernics"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-zinc-500 hover:text-zinc-600 transition-colors">
              Niko Soriano
            </span>
          </a>{" "}
          © 2024 All Rights Reserved
        </p>
      </footer>
    </>
  );
};
