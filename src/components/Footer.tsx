import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg">
      <div className="py-8 flex items-center justify-around ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With{" "}
          <span className="text-foreground text-2xl px-1">&#9825;</span>
          by &nbsp;
          <Link
            href="/"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            CodeBucks
          </Link>
        </div>
        <Link
          href="/"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Say hello
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
