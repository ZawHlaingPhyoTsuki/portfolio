// import { HugeiconsIcon } from '@hugeicons/react';
// import { Message01Icon } from '@hugeicons/core-free-icons';
import { profile } from '@/data';
import { OutlineDashedBadge } from '@/components/outline-dashed-badge';

// function ChatFab() {
//   return (
//     <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-5 sm:justify-end sm:px-6 sm:pb-6">
//       <a
//         href={`mailto:${profile.email}?subject=Portfolio%20inquiry`}
//         className="pointer-events-auto inline-flex items-center gap-3 rounded-lg bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-lg outline-none transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring/50"
//       >
//         <HugeiconsIcon icon={Message01Icon} className="h-5 w-5" />
//         Chat with Zaw
//       </a>
//     </div>
//   );
// }

export function Footer() {
  return (
    <>
      <div className="mx-auto w-full max-w-3xl px-4 pb-10 sm:px-6 sm:pb-14">
        <footer className="border-t border-dashed border-border pt-6 text-sm sm:pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="max-w-xl text-center sm:text-left">
              <p className="italic text-subtle-foreground">
                Curious by nature, builder by practice.
              </p>
              <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-muted-foreground sm:justify-start">
                <span className="font-normal tracking-tight text-foreground">{profile.name}</span>
                <span className="text-border">/</span>
                <span>Full-Stack Web Developer</span>
                <span className="text-border">/</span>
                <span>{profile.location}</span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 sm:justify-end">
              <OutlineDashedBadge className="px-3 py-1 text-xs font-medium text-muted-foreground">
                {profile.availableForWork ? 'Open to work' : 'Not looking right now'}
              </OutlineDashedBadge>
            </div>
          </div>
        </footer>
      </div>
      {/* <ChatFab /> */}
    </>
  );
}
