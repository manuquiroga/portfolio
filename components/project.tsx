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
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: scaleProgress }}
      className=" group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className=" bg-gray-950 text-white max-w-[42rem] border border-black/60
        overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 group-even:pl-8 hover:bg-black/90 transition rounded-lg"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]">
          <h3 className="text 2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-300">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {(tags || []).map((tag, index) => (
              <li
                className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black font-semibold rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={imageUrl}
          alt="Project image"
          className="absolute top-8 -right-[350px] w-[28.25] rounded-t-lg shadow-2xl group-even:right-[inital] group-even:-left-[350px] 
      group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04]
      group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
}
