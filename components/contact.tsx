"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [formData, setFormData] = useState({
    senderEmail: "",
    message: "",
  });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:tro2233zhp@gmail.com">
          tro2233zhp@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          setFormData({
            senderEmail: "",
            message: "",
          });
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack bg-white text-gray-800 placeholder-gray-500 dark:bg-gray-800 dark:text-white/90 dark:placeholder-gray-400 dark:focus:bg-gray-700 transition-all dark:outline-none border dark:border-gray-600"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={formData.senderEmail}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, senderEmail: e.target.value }));
          }}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 bg-white text-gray-800 placeholder-gray-500 dark:bg-gray-800 dark:text-white/90 dark:placeholder-gray-400 dark:focus:bg-gray-700 transition-all dark:outline-none border dark:border-gray-600"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={formData.message}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, message: e.target.value }));
          }}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
