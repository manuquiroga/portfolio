/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ComponentHeading from "./component-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const imageUrl = "https://i.ibb.co/PgDG6s4/IMG-20230531-161812-460-2.webp";
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="flex flex-col justify-center items-center mb-32 scroll-mt-28"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <ComponentHeading title="About me"></ComponentHeading>
      <div className="flex justify-center items-center gap-16 flex-col sm:flex-row">
        <div className="w-[250px] h-[250px] rounded-full object-cover">
          <img src={imageUrl} alt="Profile image" className="w-full h-full object-cover max-w-full rounded-full"></img>
        </div>

        <div className="flex flex-col gap-3 w-[23rem] sm:w-[35rem]">
          <p className="text-white text-lg font-medium ">
            I was born in Argentina on June 10, 2002, and I graduated as a technical programmer from the National
            Technological University (UTN) in 2023.
          </p>
          {/* <p className="text-white text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p> */}
          <p className="text-white text-lg font-medium">
            When I&apos;m not coding, I enjoy gaming, playing the guitar, and going to the gym.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

