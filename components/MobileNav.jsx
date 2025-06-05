"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import useScrollSpy from "@/app/hooks/useScrollSpy";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "#about-section" },
  { name: "services", path: "#services-section" },
  // { name: "pages", path: "/pages" },
  // { name: "work", path: "/work" },
  { name: "contact", path: "#contact-section" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const activeSection = useScrollSpy(["about-section", "services-section", "contact-section"]);

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              NicCoders <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) =>
            link.path.startsWith("#") ? (
              <SheetClose asChild key={index}>
                <a
                  href={link.path}
                  className={`text-xl capitalize transition-all hover:text-accent ${
                    link.path === `#${activeSection}` ? "text-accent" : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              </SheetClose>
            ) : (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`text-xl capitalize hover:text-accent transition-all ${
                    pathname === link.path ? "text-accent border-b-2 border-accent" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
