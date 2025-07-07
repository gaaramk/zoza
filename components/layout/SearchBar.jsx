"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchRecipesByName } from "@/lib/api";
import { Button } from "../ui/button";
import RecipeCard from "../recipesNeeds/RecipeCard";
import LoadingPage from "../ui/LoadingPage";

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



  if (isLoading) {
    return <LoadingPage />;
  }





  return (
    <section className="font-body my-5 border border-[#C4E5FC] rounded-3xl">
      <div className="max-w-[600px] mx-auto text-center flex flex-col justify-center items-center mt-20 mb-16">
        <h4 className="w-fit px-3 py-1 bg-[#EE6352] rounded-full uppercase text-white text-sm">
          explore
        </h4>

        <h2 className="font-title text-4xl uppercase font-bold">
          search recipes by name
        </h2>

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
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-[600px] p-2 rounded-full border border-[#EE6352] focus:outline-none 
          focus:border-[#C4E5FC] focus:ring-0"
          placeholder="Search for recipes..."
        />
      </div>

      {isError && (
        <p className="text-center text-red-500">Error: {error.message}</p>
      )}

      {results && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto p-4">
          {results.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}

      {!results && query.trim().length > 0 && (
        <p className="text-center text-gray-600">
          No recipes found for "{query}"
        </p>
      )}
    </section>
  );
};

export default SearchBar;
