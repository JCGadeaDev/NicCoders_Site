import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-10 text-[#C9E400] backdrop-blur-md bg-[#1C1C22]/90">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="NicCoders Logo"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#C9E400] text-[#1C1C22] font-semibold uppercase tracking-wide shadow-md hover:shadow-lg transition transform duration-300 hover:scale-105 hover:bg-[#D7E219]">
              <Mail size={20} />
              contact@niccoders.com
            </Button>
          </Link>
        </div>
        {/* Mobile Nav */}
        <div className="xl:hidden"><MobileNav/></div>
        
      </div>
    </header>
  );
};

export default Header;
