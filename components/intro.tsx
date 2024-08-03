"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FiDownload } from "react-icons/fi";
import pfp from "@/public/pfp.webp";

export default function Home() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="py-20 sm:py-40 flex items-center justify-center flex-col">
      <motion.div
        className="flex items-center 
         flex-col mb-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-6 sm:gap-8 flex-col sm:flex-row ">
          <Image
            width={150}
            height={150}
            src={pfp}
            alt="Profile Picture"
            priority
            className="object-cover rounded-full h-40 w-40 flex-shrink-0"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="flex flex-col gap-3 sm:gap-2  ">
            <h1 className="text-4xl font-semibold text-white ">
              Hey, I&apos;m <span className="text-[#A682FF]">Manuel</span>
            </h1>
            <p className="text-lg text-gray-300">Software developer from Argentina with experience in Front-end development.</p>

            <motion.div
              className="flex  sm:items-center gap-5 sm:gap-3 pt-6 sm:pt-3 text-sm sm:text-base"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <Link
                href="mailto:contact@manuquiroga.dev"
                target="_blank"
                className="group text-white bg-black/50 border border-white/10 px-4 py-1 flex items-center gap-2 rounded-full outline-none focus:border-white/20 hover:border-white/20 active:border-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                <BsEnvelope />
                Contact me
              </Link>
              {/*
              <Link
                href="/CV.pdf"
                download
                className="group text-gray-300 underline hover:text-white sm:px-4 py-1 flex items-center gap-2 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                <FiDownload />
                Download CV
              </Link>
              */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
