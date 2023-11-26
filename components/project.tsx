"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <motion.div ref={ref} style={{ scale: scaleProgress, opacity: scaleProgress }} className="mb-3 sm:mb-8">
      <section
        className=" bg-white/5 text-white max-w-[24rem] border-[1.5px] border-white/10 backdrop-blur-2xl
        overflow-hidden sm:mb-8 last:mb-0 transition-all duration-300 rounded-lg shadow-lg hover:border-white/25 relative " >
        <img
          src={imageUrl}
          alt="Project image"
          className=" rounded-t-lg shadow-2xl transition-all duration-300 hover:border-white/25 border-white/10"
        />
        <div className="flex flex-col gap-3 py-5 px-5">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="bg-gray-700 h-1 rounded-lg"></div>
          <p className="text-gray-300 text-sm h-[3rem] overflow-hidden">{description}</p>
          <ul className="flex mt-4 gap-2 sm:mt-auto text-left">
            {(tags || []).map((tag, index) => (
              <li
                className="bg-gradient-to-r from-[#715AFF] to-[#64C7FF] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black font-bold rounded-lg"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
