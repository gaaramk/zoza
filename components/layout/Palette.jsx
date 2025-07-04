import React from "react";
import { Button } from "../ui/button";
import { Cake, Egg, Hamburger, Popcorn, Sandwich, Soup } from "lucide-react";
import Link from "next/link";

const Palette = () => {
  return (
    <section className="my-5 font-body">
      <div className="bg-[#C4E5FC] rounded-3xl">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="p-5 py-12 max-w-[600px]">
            <h4
              className="w-fit px-3 py-1 bg-[#EE6352] rounded-full uppercase text-white
                text-sm"
            >
              explore
            </h4>

            <h2 className="font-title text-4xl uppercase font-bold">
              our diverse palette
            </h2>

            <p className="mt-5 text-lg">
              <span className="font-bold">ZOZA</span> is a recipe application
              that allows you to search for recipes and get detailed information
              about them. You can also save your favorite recipes and access
              them anytime, anywhere.
            </p>

            <Button variant={"outline"} className="mt-5">
              <Link href="/recipes">See more recipes</Link>
            </Button>
          </div>

          <div className="px-5 py-7 max-w-[550px] w-full">
            <span className="flex justify-between my-9 border-b border-[#B7D5EA] pb-1 ">
              <Sandwich className="w-8 h-8" />

              <h3 className="uppercase text-base md:text-lg">breakfast</h3>
            </span>

            <span className="flex justify-between my-9 border-b border-[#B7D5EA] pb-1 ">
              <Hamburger className="w-8 h-8" />
              <h3 className="uppercase text-base md:text-lg">lunch</h3>
            </span>

            <span className="flex justify-between my-9 border-b border-[#B7D5EA] pb-1 ">
              <Soup className="w-8 h-8" />

              <h3 className="uppercase text-base md:text-lg">dinner</h3>
            </span>

            <span className="flex justify-between my-9 border-b border-[#B7D5EA] pb-1 ">
              <Cake className="w-8 h-8" />

              <h3 className="uppercase text-base md:text-lg">dessert</h3>
            </span>

            <span className="flex justify-between my-9 border-b border-[#B7D5EA] pb-1 ">
              <Popcorn className="w-8 h-8" />

              <h3 className="uppercase text-base md:text-lg">snacks</h3>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Palette;
