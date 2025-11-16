"use client";

import { Badge } from "@/components/ui/badge";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { experiences } from "@/lib/data";
import ExperienceItem from "../experience-item";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 1);

  return (
    <section ref={ref} id="experience" className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.description} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
