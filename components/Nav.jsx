"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "services", path: "/services" },
    { name: "pages", path: "/pages" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="hidden md:flex gap-10 text-lg font-semibold capitalize">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`relative pb-1 transition-all duration-300 ${
                        pathname === link.path
                            ? "text-[#C9E400]"  // active lime
                            : "text-[#E0E0E0]"  // inactive gray/white
                    } hover:text-[#D7E219]`}
                >
                    {link.name}
                    {/* Underline effect */}
                    <span
                        className={`absolute left-0 bottom-0 h-0.5 w-full bg-[#D7E219] transform transition-transform duration-300 ${
                            pathname === link.path ? "scale-x-100" : "scale-x-0"
                        } hover:scale-x-100 origin-left`}
                    />
                </Link>
            ))}
        </nav>
    );
};

export default Nav;


