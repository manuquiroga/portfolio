"use client";
import React from "react";
import { workData } from "@/lib/data";
import Work from "./work";
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
