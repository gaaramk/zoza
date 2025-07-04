import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <section
      className="my-5 h-[600px] rounded-3xl relative font-body"
      id="home"
      style={{
        backgroundImage: `url('./images/header.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-3xl
       bg-black opacity-50"
      ></div>

      {/* banner */}
      <div
        className="absolute top-1/2 left-1/2 
      transform -translate-x-1/2 -translate-y-1/2
      text-white"
      >
        <h2 className="font-title text-center text-3xl md:text-6xl font-bold">
          ZOZA| Recipe App
        </h2>

        <p className="text-center mt-5 text-lg md:text-2xl py-3 min-w-[300px]">
          <span className="font-bold">ZOZA</span> is a recipe application that
          allows you to search for recipes and get detailed information about
          them.
        </p>

        <div className="flex justify-center mt-5">
          <Button variant={"header"} size={"header"}>
            <Link href="/recipes">Explore Recipes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
