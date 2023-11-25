"use client";
import React, { useRef } from "react";
import ComponentHeading from "./component-heading";
import { projectsData } from "@/lib/data";
import { motion, useScroll } from "framer-motion";
import Project from "./project";

export default function projects() {
  return (
    <section id="projects">
      <ComponentHeading title="My Projects"></ComponentHeading>
      <div className="grid sm:grid-cols-[repeat(2,1fr)] sm:grid-rows-[repeat(3,1fr)] gap-x-[0.75rem] grid-cols-1 grid-rows-1 sm:gap-x-[2rem] ">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}




