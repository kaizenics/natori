import { FaRegCirclePlay } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <footer className="py-6">
        <div className="flex justify-center items-center">
          <a
            href="https://www.youtube.com/channel/UC4GXMHCwmONp6XFRB5SayAg"
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex font-regular text-2xl bg-red-600 text-white py-4 px-14 rounded-full hover:bg-red-700 transition ease-in-out">
              <FaRegCirclePlay className="w-[32px] h-[32px] mr-2 text-white" />
              Subscribe
            </button>
          </a>
        </div>
        <div className="flex justify-center space-x-12 items-center mt-6">
          <a
            href="https://twitter.com/siritoriyowai_?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="w-[25px] h-[25px]" />
          </a>
          <a
            href="https://www.instagram.com/siritoriyowai_/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="w-[25px] h-[25px]" />
          </a>
          <a
            href="https://www.tiktok.com/@siritoriyowai_"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok className="w-[25px] h-[25px]" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC4GXMHCwmONp6XFRB5SayAg"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="w-[25px] h-[25px]" />
          </a>
        </div>
        <p className="text-zinc-500 text-center mt-6">
          <a
            href="https://www.facebook.com/kaizernics"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-zinc-500 hover:text-zinc-600">
              Niko Soriano
            </span>
          </a>{" "}
          © 2024 All Rights Reserved
        </p>
      </footer>
    </>
  );
};
