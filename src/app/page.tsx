import Image from "next/image";
import profilepic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <main
      // className="flex items-center text-black w-full min-h-screen"
      className="w-full h-full inline-block z-0 bg-white p-32 pt-0"
    >
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <Image src={profilepic} alt="acabhdca" className="w-full h-auto" />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="!text-6xl !text-left"
          />
          <p className="my-4 text-base font-medium ">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center self-startmt-2">
            <Link
              href="/dummy.pdf"
              target={"_blank"}
              className="flex items-center bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold 
              hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black"
              download={true}
            >
              Resume <LinkArrow className="w-6 ml-1" />
            </Link>
            <Link
              href="mailto:hanaandargie00@gmail.com"
              target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-black underline "
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image src={lightBulb} alt="adcadjcna" className="w-full h-auto" />
      </div>
    </main>
  );
}
