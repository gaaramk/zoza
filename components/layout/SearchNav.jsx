"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchRecipesByName } from "@/lib/api";
import Link from "next/link";

const SearchNav = () => {
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

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-slate-300 rounded-full px-3 py-2 w-[200px] md:w-[300px]"
      />

      {query && (
        <div className="absolute top-12 left-0 w-full max-h-60 overflow-auto z-50 bg-white dark:bg-slate-900 border border-slate-300 rounded-md shadow-md">
          {isLoading && (
            <p className="p-3 text-sm text-gray-500">⏳ Loading...</p>
          )}

          {isError && (
            <p className="p-3 text-sm text-red-500">
              ❌ Error: {error.message}
            </p>
          )}

          {results?.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {results.map((recipe) => (
                <li key={recipe.idMeal}>
                  <Link
                    href={`/recipes/${recipe.idMeal}`}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 text-sm"
                  >
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-8 h-8 mr-2" /> {recipe.strMeal}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            !isLoading &&
            query.length > 1 && (
              <p className="p-3 text-sm text-gray-500">No results found.</p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchNav;
