"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { HiOutlineBriefcase } from "react-icons/hi";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="flex gap-3 items-center mb-12">
        <HiOutlineBriefcase className="text-white w-8 h-8" />
        <h2 className="text-3xl font-semibold text-white">My projects</h2>
      </div>

      <div className="flex flex-col gap-3 sm:gap-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
