import React from "react";
import { workData } from "@/lib/data";
import Link from "next/link";

type ProjectProps = (typeof workData)[number];
export default function Work({ title, description, link, company, year }: ProjectProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-3 h-3 bg-[#A682FF] rounded-full -translate-x-[7px]" />

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-32 text-white/60 font-medium">{year}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-white/80 font-medium mb-2">{company}</p>
          <p className="text-white/60 mb-4">{description}</p>
          {/*{link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              See more
            </Link>
          )}*/}
        </div>
      </div>
    </div>
  );
}
