"use client";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: {
  type: any;
  title: any;
  summary: any;
  img: any;
  link: any;
  github: any;
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-black bg-white shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl" />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-red-400 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-black">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target={"_blank"} className="w-10 ">
            <GithubIcon className="" />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-black text-white p-2 px-6  text-lg font-semibold"
          >
            Visist Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  title,
  type,
  img,
  link,
  github,
}: {
  title: any;
  type: any;
  img: any;
  link: any;
  github: any;
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl" />
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-red-400 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className="w-8 ">
            <GithubIcon className="" />
          </Link>
        </div>
      </div>
    </article>
  );
};

function page() {
  return (
    <>
      <Head>
        <title>CodeBucks | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center ">
        <div className="p-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="/"
                type="Featured Project"
                github=""
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github=""
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github=""
                img={project1}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="/"
                type="Featured Project"
                github=""
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github=""
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Featured Project"
                github=""
                img={project1}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
