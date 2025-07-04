"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-3 py-3 border border-slate-300 rounded-full my-3 relative z-[10000000]">
      <div className="flex justify-between items-center">
        <figure>image</figure>

        <ul className="hidden md:flex gap-5">
          <li>
            <Link
              href="/"
              className="text-lg underline-offset-4 hover:underline"
            >
              Home
            </Link>{" "}
          </li>
          <li>
            <Link
              href="/recipes"
              className="text-lg underline-offset-4 hover:underline"
            >
              Recipes
            </Link>{" "}
          </li>
        </ul>

        <div className="hidden md:block">
          <input
            type="search"
            placeholder="Search"
            className="border border-slate-300 rounded-full px-3 py-2"
          />
        </div>

        <div className="md:hidden">
          <Menu onClick={handleToggle} />
        </div>

        {isOpen && (
          <div
            className="absolute top-10 right-0 left-0 bg-white dark:bg-slate-800 border border-slate-300 
          rounded-md p-3 my-5"
          >
            <ul>
              <li className="border-b border-slate-300 my-5">
                <Link
                  href="/"
                  className="text-lg underline-offset-4 hover:underline"
                >
                  Home
                </Link>
              </li>

              <li className="border-b border-slate-300 my-5">
                <Link
                  href="/recipes"
                  className="text-lg underline-offset-4 hover:underline"
                >
                  Recipes
                </Link>
              </li>
            </ul>

            <div>
              <input
                type="search"
                placeholder="Search"
                className="w-full border border-slate-300 rounded-full px-3 py-3"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
