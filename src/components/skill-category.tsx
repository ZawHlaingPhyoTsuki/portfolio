"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

// Skill badge component with icon
const SkillBadge = ({ skill }: { skill: { name: string; icon: string } }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Badge
        variant="secondary"
        className="rounded-full px-3 py-1.5 text-sm border transition-colors hover:bg-accent/50 flex items-center gap-2 cursor-pointer"
      >
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Image
            width={16}
            height={16}
            src={skill.icon}
            alt={skill.name}
            className="h-4 w-4"
          />
        </motion.div>
        {skill.name}
      </Badge>
    </motion.div>
  );
};
