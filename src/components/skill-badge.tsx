import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function SkillBadge({
  skill,
}: {
  skill: { name: string; icon: string };
}) {
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
}
