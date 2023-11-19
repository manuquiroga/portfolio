/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import ComponentHeading from "./component-heading";
import { motion } from "framer-motion";

export default function About() {
  const imageUrl = "https://aiventure-images.up.railway.app/imagen/male-human-warrior-1.jpeg";
  return (
    <motion.section
      className="flex flex-col justify-center items-center mb-32"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <ComponentHeading title="About me"></ComponentHeading>
      <div className="flex justify-center items-center gap-16 flex-col sm:flex-row">
        <img src={imageUrl} alt="Profile image" width={250} height={250} className="rounded-full"></img>

        <div className="flex flex-col gap-3 w-[23rem] sm:w-[35rem]">
          <p className="text-white text-lg font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-white text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <p className="text-white text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </motion.section>
  );
}
