import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { skillsData, allSkills } from '@/data/lib/skill-icons';
import { SectionHeading } from '@/components/section-heading';
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@/components/ui/marquee';
import { OutlineDashedBadge } from '@/components/outline-dashed-badge';
import { SkillIcon } from '@/components/skill-icon';

type Skill = { name: string; icon: string };

const ROW_SIZE = 15;

function SkillChip({ name }: Skill) {
  return (
    <OutlineDashedBadge className="gap-2 px-3 py-1.5 text-sm text-muted-foreground">
      <SkillIcon name={name} />
      {name}
    </OutlineDashedBadge>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Skill[]; reverse?: boolean }) {
  return (
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeContent speed={10} direction={reverse ? 'right' : 'left'}>
        {items.map((skill) => (
          <MarqueeItem key={skill.name}>
            <SkillChip {...skill} />
          </MarqueeItem>
        ))}
      </MarqueeContent>
      <MarqueeFade side="right" />
    </Marquee>
  );
}

export function TechStack() {
  const rows = [
    allSkills.slice(0, ROW_SIZE),
    allSkills.slice(ROW_SIZE, ROW_SIZE * 2),
    allSkills.slice(ROW_SIZE * 2),
  ];

  return (
    <section id="technologies" className="scroll-mt-20">
      <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
        <SectionHeading>Technologies</SectionHeading>
        <Link
          href="/tech-stack"
          className="group inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <span>View All</span>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
      <div className="space-y-3">
        {rows.map((items, index) => (
          <MarqueeRow key={index} items={items} reverse={index === 1} />
        ))}
      </div>
    </section>
  );
}

export function TechStackCategories() {
  return (
    <div className="space-y-8">
      {Object.values(skillsData).map((category) => (
        <div key={category.title}>
          <h2 className="text-xl font-light tracking-tight text-foreground sm:text-2xl">
            {category.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <SkillChip key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
