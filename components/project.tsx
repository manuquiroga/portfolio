import React, { useRef } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];
export default function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="sm:w-5/12">
        <img src={imageUrl} alt={`Project image: ${title}`} />
      </div>
      <div className="sm:w-1/2 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-xl text-gray-100 mb-2">{title}</h4>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
        </div>
        <ul className="flex gap-2 ">
          {tags.map((tag, index) => (
            <li className="py-1 px-3 bg-white/5 text-gray-300 rounded-full text-xs " key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
