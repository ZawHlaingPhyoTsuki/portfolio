"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SkillBadge from "./skill-badge";

export default function SkillCategory({
  title,
  skills,
  description,
  icon: Icon,
}: {
  title: string;
  skills: readonly { name: string; icon: string }[];
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center space-y-0 pb-3">
        <div className="flex items-center gap-3">
          <motion.div
            className="p-2 bg-primary/10 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="h-5 w-5 text-primary" />
          </motion.div>
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <SkillBadge skill={skill} />
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
