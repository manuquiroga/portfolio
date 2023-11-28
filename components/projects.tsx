"use client";
import React, { useRef } from "react";
import ComponentHeading from "./component-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function projects() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <ComponentHeading title="My Projects"></ComponentHeading>
      <div className="grid sm:grid-cols-[repeat(2,1fr)] gap-x-[0.75rem] grid-cols-1 grid-rows-1 sm:gap-x-[2rem] ">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}




