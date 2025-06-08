"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1C1C22]/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      >
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
          {/* <Link href="/contact">
            <Button className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#C9E400] text-[#1C1C22] font-semibold uppercase tracking-wide shadow-md hover:shadow-lg transition transform duration-300 hover:scale-105 hover:bg-[#D7E219]">
              <Mail size={20} />
              contact@niccoders.com
            </Button>
          </Link> */}
          <a href="mailto:contact@niccoders.com">
            <Button className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#C9E400] text-[#1C1C22] font-semibold uppercase tracking-wide shadow-md hover:shadow-lg transition transform duration-300 hover:scale-105 hover:bg-[#D7E219]">
              <Mail size={20} />
              contact@niccoders.com
            </Button>
          </a>
        </div>
        {/* Mobile Nav */}
        <div className="xl:hidden"><MobileNav/></div>
        
      </div>
    </header>
  );
};

export default Header;
