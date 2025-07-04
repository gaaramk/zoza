"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchRecipesByName } from "@/lib/api";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const {
    data: results,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["searchRecipes", query],
    queryFn: () => searchRecipesByName(query),
    enabled: query.trim().length > 0,
  });

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className="font-body my-5 border border-[#C4E5FC] rounded-3xl">
      <div className="max-w-[600px] mx-auto text-center flex flex-col justify-center items-center mt-20 mb-16">
        <h4 className="w-fit px-3 py-1 bg-[#EE6352] rounded-full uppercase text-white text-sm">
          explore
        </h4>

        <h2 className="font-title text-4xl uppercase font-bold">search recipes by name</h2>

        <p className="mt-5 text-lg">
          <span className="font-bold">Wasfa</span> is a recipe application that
          allows you to search for recipes and get detailed information about
          them.
        </p>
      </div>

      <div className="flex justify-center items-center my-5">
        <input
          type="search"
          name="search"
          id="search"
          value={query}
          onChange={handleChange}
          className="w-full max-w-[600px] p-2 rounded-full border border-[#EE6352] focus:outline-none 
          focus:border-[#C4E5FC] focus:ring-0"
          placeholder="Search for recipes..."
        />
      </div>

      {isLoading && <p className="text-center text-blue-500">Loading...</p>}
      {isError && (
        <p className="text-center text-red-500">Error: {error.message}</p>
      )}

      {results && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto p-4">
          {results.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="border rounded-lg overflow-hidden shadow-md p-4 text-center"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold">{recipe.strMeal}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchBar;
