"use client";
import { motion } from 'framer-motion';
import React from 'react'

interface SkillProps {
  skillsTitle: string;
  skills: string[];
}

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skill({ skillsTitle, skills }: SkillProps) {
  return (
    <aside>
      <h2 className="text-white text-xl mb-2 text-center py-2 border-b-2 border-b-[#A682FF] font-semibold">
        {skillsTitle}
      </h2>
      <ul className="flex flex-col justify-center gap-2 text-gray-300 text-lg text-center">
        {skills.map((skill, index) => (
          <motion.li
            className="bg-white/5 border border-white/10 rounded-md px-5 py-3"
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{
              once: true,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </aside>
  );
}
