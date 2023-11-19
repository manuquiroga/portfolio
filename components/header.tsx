"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative z-[99]">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-opacity-40 shadow-lg 
            backdrop-blur-[1rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full  bg-gray-950 border-black/30 bg-opacity-80"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 text-white">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center px-3 py-3 hover:text-gray-400 transition"
              key={link.href}
              initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
              <Link className="flex w-full items-center justify-center" href={link.href}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
