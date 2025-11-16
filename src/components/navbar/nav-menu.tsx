import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const links: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export function NavMenu({ className, ...props }: NavigationMenuProps) {
  return (
    <NavigationMenu
      className={cn("data-[orientation=vertical]:items-start", className)}
      {...props}
    >
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {links.map((link) => (
          <NavigationMenuItem key={link.title}>
            <NavigationMenuLink asChild>
              <Link href={link.href}>{link.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
