// oxlint-disable next/no-img-element
import { cn } from 'cn';
import { findSkill } from '@/data/lib/skill-icons';

export function SkillIcon({
  name,
  alt = '',
  className,
}: {
  name: string;
  alt?: string;
  className?: string;
}) {
  const skill = findSkill(name);
  if (!skill) return null;

  const classes = cn('h-4 w-auto object-contain shrink-0', className);

  if (!skill.iconDark) {
    return <img src={skill.icon} alt={alt} className={classes} />;
  }

  return (
    <>
      <img src={skill.icon} alt={alt} className={cn('dark:hidden', classes)} />
      <img src={skill.iconDark} alt={alt} className={cn('hidden dark:block', classes)} />
    </>
  );
}
