"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { contactInfo } from "@/lib/data";
import ContactForm from "../contact-form";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="relative py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto"
          >
            Please contact me directly at{" "}
            <a
              href="mailto:tro2233zhp@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              tro2233zhp@gmail.com
            </a>{" "}
            or through this form.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-3xl lg:max-w-full mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start gap-5 transition-transform duration-300">
                    {/* Icon */}
                    <div className="shrink-0 p-2">
                      <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-foreground font-medium text-base group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
