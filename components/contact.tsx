"use client";
import React from 'react'
import ComponentHeading from './component-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './submit-button';
import toast from 'react-hot-toast';


export default function Contact() {
    const { ref } = useSectionInView("Contact");
    
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 sm:mb-18 w-[min(100%,38rem)] px-6 sm:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <ComponentHeading title="Contact Me"></ComponentHeading>

      <form
        className=" flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfuly!");
        }}
      >
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
        <SubmitButton></SubmitButton>
      </form>

      
    </motion.section>
  );
}
