import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";
import metadata from "~/data/metadata";
import Image from "next/image";

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa6";

import natori from "~/assets/images/natori-cover.jpg";
import natoriLogo from "~/assets/images/natori.png";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden">
          <Image
            className="opacity-40 object-cover"
            src={natori}
            alt="Natori Cover"
            fill
            priority
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center md:items-end pb-8 md:pb-12 px-4 md:px-12">
            <div className="w-full max-w-[300px] md:max-w-[500px]">
              <Image
                src={natoriLogo}
                alt="Natori Logo"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
              <p className="text-center text-sm md:text-base text-white mt-2 md:mt-4">
                natori / なとり a Singer-Songwriter from Japan.
              </p>
              <div className="flex justify-center space-x-6 md:space-x-8 items-center mt-4 md:mt-6">
                {/* Social Icons - adjusted size for better mobile display */}
                <a
                  href="https://twitter.com/siritoriyowai_?lang=en"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <FaXTwitter className="w-5 md:w-6 h-5 md:h-6 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/siritoriyowai_/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <FaInstagram className="w-5 md:w-6 h-5 md:h-6 text-white" />
                </a>
                <a
                  href="https://www.tiktok.com/@siritoriyowai_"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <FaTiktok className="w-5 md:w-6 h-5 md:h-6 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC4GXMHCwmONp6XFRB5SayAg"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <FaYoutube className="w-5 md:w-6 h-5 md:h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the content */}
        <div className="flex justify-center align-center my-8 md:my-14 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[1400px]">
            {metadata.map((data, index) => (
              <Card
                key={index}
                className="relative w-full border dark:border-zinc-800"
              >
                <div className="w-full">
                  <div>{data.badge}</div>
                  <Image
                    src={data.image}
                    alt={data.title}
                    className="aspect-[16/9] w-full"
                    objectFit="cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">{data.title}</CardTitle>
                    <p className="text-sm md:text-base">{data.singer}</p>
                  </CardHeader>

                  <CardContent>
                    <CardDescription>
                      <p className="line-clamp-3 text-sm md:text-base">{data.description}</p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="space-x-2 flex flex-wrap gap-2">
                    <a href={data.youtube} target="_blank" rel="noreferrer">
                      <Button variant="outline" className="text-sm md:text-base">
                        <FaYoutube className="w-4 h-4 md:w-5 md:h-5 mr-1"/>YouTube
                      </Button>
                    </a>
                    <a href={data.spotify} target="_blank" rel="noreferrer">
                      <Button variant="outline" className="text-sm md:text-base">
                        <FaSpotify className="w-4 h-4 md:w-5 md:h-5 mr-1"/> Spotify
                      </Button>
                    </a>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
