import React from "react";
import { FaLink } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { linksData } from "@/lib/data";

export default function Links() {
  return (
    <div id="links" className="flex flex-col gap-6 pb-32">
      <div className="flex gap-3 items-center mb-6">
        <FaLink className="text-white w-8 h-8" />
        <h2 className="text-3xl font-semibold text-white">Links</h2>
      </div>
      <ul className="flex flex-col gap-3">
        {linksData.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="sm:flex text-gray-200 hover:text-white transition-colors group">
              <span className="w-1/4 text-gray-400">{link.name}: </span>

              <div className="flex items-center gap-2">
                <span>{link.title}</span>
                <FaArrowUpRightFromSquare className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
