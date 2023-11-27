"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Home() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="h-[100vh] flex items-center justify-center flex-col">
      <motion.div
        className="flex items-center justify-center flex-col mb-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-white font-semibold">Hello 👋, I&apos;m</p>
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-[#715AFF] to-[#64C7FF] bg-clip-text text-center tracking-wide text-transparent mb-5 sm:text-9xl ">
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
          className="group text-white bg-black/50 border backdrop-blur-md border-white/10 px-10 py-3 flex items-center gap-2 rounded-full outline-none focus:border-white/25 hover:border-white/25 active:border-white/25 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me <BsEnvelope />
        </Link>

        <div className="flex flex-row gap-8">
          <a
            href="https://www.linkedin.com/in/manuquiroga/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 hover:text-gray-400 hover:scale-[1.3] transition-all duration-300"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/manuquiroga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 hover:text-gray-400 hover:scale-[1.3] transition-all duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.instagram.com/manu.quiroga_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-2 hover:text-gray-400 hover:scale-[1.3] transition-all duration-300"
          >
            <FaInstagram size={32} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
