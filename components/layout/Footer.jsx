import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{'{'}" "{'}'}
          <Link href="https://github.com/gaaramk" className="hover:underline" target="_blank" />
          MRNOBODY™
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="https://www.linkedin.com/in/mohamed-kamal-el-dien-383889359" className="hover:underline me-4 md:me-6" target="_blank" />
            About
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6" target="_blank" />
            Privacy Policy
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6" target="_blank" />
            Licensing
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/mohamed-kamal-el-dien-383889359" className="hover:underline" target="_blank" />
            Contact
          </li>
        </ul>
      </div>
    </footer>

  );
};

export default Footer;
