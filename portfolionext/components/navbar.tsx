"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    { href: `/`, label: "Home", active: pathname === `/` },
    {
      href: `/DataGuide`,
      label: "Data Guide",
      active: pathname === `/DataGuide`,
    },
    { href: `/MyStory`, label: "My Story", active: pathname === `/MyStory` },
    {
      href: `/Portfolio`,
      label: "Portfolio",
      active: pathname === `/Portfolio`,
    },
    {
      href: `/ContactMe`,
      label: "Contact Me",
      active: pathname === `/ContactMe`,
    },
  ];

  return (
    <nav className={cn("flex items-center justify-end py-2 px-10")}>
      <div
        className={cn(
          "hidden lg:flex items-center justify-center space-x-2 lg:space-x-4"
        )}
      >
        {routes.map((route) => (
          <Link key={route.href} href={route.href} className={route.active?"text-[#66ABFC]":"text-[#FEFEFE]"}>
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
