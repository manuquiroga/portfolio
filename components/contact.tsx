"use client";
import React from 'react'
import ComponentHeading from './component-heading'
import { FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    
  return (
    <motion.section id="contact" 
    ref={ref}
    className="mb-20 sm:mb-18 w-[min(100%,38rem)]"
    initial={{ opacity: 0, }}
    whileInView={{ opacity: 1, }}
    transition={{ duration: 1, }}
    viewport={{ once: true, }}
    >
      <ComponentHeading title="Contact Me"></ComponentHeading>

      <form className=" flex flex-col" action={async formData => {
        await sendEmail(formData);
      }}>
        <input
          className="h-14 px-4 text-white bg-white/5 rounded-md border border-white/10 outline-none focus:bg-opacity-100"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 text-white bg-white/5 rounded-md border border-white/10 p-4 outline-none resize-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          className=" flex items-center justify-center gap-2 text-white bg-black/50 border transition-all duration-300 border-white/10 hover:border-white/25 h-[3rem] w-[8rem] rounded-md outline-none"
          type="submit"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
