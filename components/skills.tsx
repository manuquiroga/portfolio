"use client";
import React from 'react'
import ComponentHeading from './component-heading'
import { frontSkills, backSkills, languagesSkills, toolsSkills } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Skill from './skill';


export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40">
      <ComponentHeading title="My Skills"></ComponentHeading>
      <div className="flex flex-col gap-14 sm:flex-row">
        <Skill skillsTitle="Front-end" skills={frontSkills} />
        <Skill skillsTitle="Back-end" skills={backSkills} />
        <Skill skillsTitle="Languages" skills={languagesSkills} />
        <Skill skillsTitle="Tools" skills={toolsSkills} />
      </div>
    </section>
  );
}
