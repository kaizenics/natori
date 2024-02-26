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
        <div className="flex items-center justify-center relative bg-black">
          <Image
            className="opacity-40"
            src={natori}
            alt="Natori Cover"
            width={2000}
            height={2000}
          />
          <div className="absolute w-[500px] right-0 bottom-0 mb-10 mr-10">
            <Image
              src={natoriLogo}
              alt="Natori Logo"
              width={500}
              height={500}
            />
            <p className="text-center text-md text-white">
              natori / なとり a Singer-Songwriter from Japan.
            </p>
            <div className="flex justify-center space-x-10 items-center mt-6">
              <a
                href="https://twitter.com/siritoriyowai_?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter className="w-[25px] h-[25px] text-white" />
              </a>
              <a
                href="https://www.instagram.com/siritoriyowai_/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="w-[25px] h-[25px] text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@siritoriyowai_"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok className="w-[25px] h-[25px] text-white" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC4GXMHCwmONp6XFRB5SayAg"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="w-[25px] h-[25px] text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-center my-14">
          <div className="grid grid-cols-2 gap-3">
            {metadata.map((data, index) => (
              <Card
                key={index}
                className="relative w-[100%] min-h-[500px] border dark:border-zinc-800"
              >
                <div className="w-[650px] min-h-[300px]">
                  <div>{data.badge}</div>
                  <Image
                    src={data.image}
                    alt="Overdose"
                    className="aspect-[16/9]"
                    objectFit="cover"
                  />
                  <CardHeader>
                    <CardTitle>{data.title}</CardTitle>
                    <p>{data.singer}</p>
                  </CardHeader>

                  <CardContent>
                    <CardDescription>
                      <p className="line-clamp-3">{data.description}</p>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="space-x-2">
                    <a href={data.youtube} target="_blank" rel="noreferrer">
                      <Button variant="outline">
                      <FaYoutube className="w-5 h-5 mr-1"/>YouTube
                      </Button>
                    </a>
                    <a href={data.spotify} target="_blank" rel="noreferrer">
                      <Button variant="outline">
                      <FaSpotify className="w-5 h-5 mr-1"/> Spotify
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
