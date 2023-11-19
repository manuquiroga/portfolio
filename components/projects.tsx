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
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}




