"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SearchNav from "./SearchNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      // ✅ يظهر لما تسحب لفوق، ويختفي عند الأعلى أو عند السحب لتحت
      setShowNavbar(currentScrollY > 0 && currentScrollY < lastScrollY);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed px-3 py-3 z-[10000000] w-full transition-all duration-300 
        ${scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md border border-slate-300"
          : "bg-transparent border border-transparent"
        } 
        ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} 
        rounded-full`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        {/* Logo */}
        <figure>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-20 object-cover rounded-full"
          />
        </figure>

        {/* Links */}
        <ul className="hidden md:flex gap-5">
          <li>
            <Link href="/" className="text-lg underline-offset-4 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/recipes" className="text-lg underline-offset-4 hover:underline">
              Recipes
            </Link>
          </li>
          <li>
            <Link href="/area" className="text-lg underline-offset-4 hover:underline">
              Area
            </Link>
          </li>
        </ul>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <SearchNav />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Menu onClick={handleToggle} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-3 left-3 bg-white dark:bg-slate-800 border border-slate-300 rounded-md p-3 my-5">
          <ul>
            {["/", "/recipes", "/area"].map((path, idx) => (
              <li key={idx} className="border-b border-slate-300 my-5">
                <Link href={path} className="text-lg underline-offset-4 hover:underline">
                  {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>

          <SearchNav />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
