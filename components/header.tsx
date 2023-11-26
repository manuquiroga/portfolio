"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="relative z-[99]">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border shadow-lg 
            backdrop-blur-[1rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full border-opacity-40 bg-black/50 border-white/10 "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      {/* border-[#715AFF] */}

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 text-white">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative py-3 px-3"
              key={link.href}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx("flex w-full items-center justify-center relative  hover:text-gray-400 transition", {
                  "border-b-2 border-b-[#A682FF]": activeSection === link.name,
                })}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
