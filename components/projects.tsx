"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { IoMdDesktop } from "react-icons/io";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="flex gap-3 items-center mb-12">
        <IoMdDesktop className="text-white w-8 h-8" />
        <h2 className="text-3xl font-semibold text-white">My projects</h2>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
