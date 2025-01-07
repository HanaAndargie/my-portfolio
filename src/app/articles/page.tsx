"use client";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import article1 from "../../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../../public/images/articles/create loading screen in react js.jpg";
import { motion } from "framer-motion";
import article3 from "../../../public/images/articles/What is higher order component in React.jpg";

const FramerImage = motion(Image);

const Article = ({
  img,
  title,
  date,
  link,
}: {
  img: any;
  title: any;
  date: any;
  link: any;
}) => {
  return (
    <li className="w-full relative p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4">
      <Link href={link} target={"_blank"} className="">
        <h2 className="capitalize text-xl font-semibold hover:underline">
          {title}
        </h2>
      </Link>
      <span className="text-red-400 font-semibold p-4">{date}</span>
    </li>
  );
};

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: {
  img: any;
  title: any;
  time: any;
  summary: any;
  link: any;
}) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-white border border-solid border-black rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl" />
      <Link
        href={link}
        target={"_blank"}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-foreground font-semibold">{time}</span>
      </Link>
    </li>
  );
};
function page() {
  return (
    <>
      <Head>
        <title>CodeBucks | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        {/* <main className="w-full mb-16 flex flex-col items-center"> */}
        <div className="pt-16">
          <AnimatedText text="Words Can Change The World! " className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              img={article1}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
            <FeaturedArticle
              img={article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="March 22, 2022"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="March 22, 2022"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="March 22, 2022"
              link="/"
            />
          </ul>
        </div>
      </main>
    </>
  );
}
export default page;
