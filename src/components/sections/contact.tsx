"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 1);

  return (
    <section ref={ref} id="contact" className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Let's work together
          </p>
        </div>
        {/* Add your contact form here */}
      </div>
    </section>
  );
}
