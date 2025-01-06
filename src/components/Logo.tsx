"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgb(131,58, 180,1",
            "rgb(253, 29,29,1)",
            "rgb(252,176,69,1)",
            "rgb(131,58180,1)",
            "#121212",
          ],
        }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        HA
      </MotionLink>
    </div>
  );
}

export default Logo;
