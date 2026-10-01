import type { ComponentProps } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from 'cn';

export function OutlineDashedBadge({ className, ...props }: ComponentProps<typeof Badge>) {
  return (
    <Badge
      variant="outline"
      className={cn('h-auto border-dashed bg-card rounded-sm', className)}
      {...props}
    />
  );
}
