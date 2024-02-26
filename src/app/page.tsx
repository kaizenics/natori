import { Navbar } from "~/components/navbar";
import Image from "next/image";

import natori from "~/assets/images/natori-cover.jpeg";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <div className="flex justify-center">
          <Image className="opacity-40" src={natori} alt="Natori Logo" width={2000} height={2000} />
        </div>
      
      </div>
    </main>
  );
}
