"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 1);

  return (
    <section ref={ref} id="skills" className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Technologies I work with
          </p>
        </div>
        {/* Add your skills content here */}
      </div>
    </section>
  );
}
