"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Name() {

  return (
    <section id="home" className="h-[100vh] flex items-center justify-center flex-col">
      <motion.div className="flex items-center justify-center flex-col mb-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-white font-semibold">Hello 👋, I&apos;m</p>
        <h1 className="text-9xl font-extrabold bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-center tracking-wide text-transparent mb-5">
          Manuel
          <br />
          Quiroga
        </h1>
        <p className="text-white font-semibold text-lg">Full-stack Developer</p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group text-white bg-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
        >
          Contact me <BsEnvelope />
        </Link>

        <a
          className="group text-white bg-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          download
        >
          Download CV <HiDownload />
        </a>
      </motion.div>
    </section>
  );
  
}
