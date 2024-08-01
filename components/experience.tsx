"use client";
import React from "react";
import { workData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { HiOutlineBriefcase } from "react-icons/hi";

export default function Experience() {
  const { ref } = useSectionInView("Work");

  return (
    <section ref={ref} id="work" className="scroll-mt-28 pb-32">
      <div className="flex gap-3 items-center mb-12">
        <HiOutlineBriefcase className="text-white w-8 h-8" />
        <h2 className="text-3xl font-semibold text-white">My experience</h2>
      </div>
      <div className="relative border-l border-white/20 ml-4 space-y-8">
        {workData.map((item, index) => (
          <Work key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof workData)[number];
function Work({ title, description, link, company, year }: ProjectProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-3 h-3 bg-[#A682FF] rounded-full -translate-x-[7px]" />

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-32 text-white/60 font-medium">{year}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-white/80 font-medium mb-2">{company}</p>
          <p className="text-white/60 mb-4">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              See more
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
