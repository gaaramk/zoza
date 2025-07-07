'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories, getRecipesByCategory } from '@/lib/api'
import RecipeCard from '../recipesNeeds/RecipeCard'
import LoadingPage from '../ui/LoadingPage'

const CategZone = () => {
    const [query, setQuery] = useState("Beef");


    const {
        data: categoriesNames,
        isLoading: categoriesLoading,
        isError: categoriesError,
        error: categoriesErrorData,
    } = useQuery({
        queryKey: ["categoriesNames"],
        queryFn: () => getAllCategories(),
    });

    const {
        data: results,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["categories", query],
        queryFn: () => getRecipesByCategory(query),
    });


    if (categoriesLoading || isLoading) {
        return <LoadingPage />
    }

    if (categoriesError || isError) {
        console.error("❌ Error fetching categories:", categoriesErrorData?.message);
        console.error("❌ Error fetching recipes:", error?.message);
    }




    return (
        <section className="font-body my-5 border border-[#C4E5FC] rounded-3xl">
            <div className=''>
                <div className="p-5 py-12 max-w-[600px] mx-auto
                 flex flex-col justify-center items-center text-center">
                    <h4
                        className="w-fit px-3 py-1 bg-[#EE6352] rounded-full 
                        uppercase text-white text-sm"
                    >
                        recipes
                    </h4>

                    <h2 className="font-title text-4xl uppercase font-bold">
                        recipes by category
                    </h2>

                    <p className="mt-5 text-lg">
                        you can select a category to get a list of recipes
                        related to that category
                    </p>
                </div>




                <div className='flex flex-wrap justify-center gap-5'>
                    {categoriesNames?.slice(0, 8).map((category) => {
                        const isActive = category?.strCategory === query;

                        return (
                            <Button
                                key={category?.idCategory}
                                variant={"outline"}
                                className={isActive ? "bg-[#9FDC26] " : ""}
                                onClick={() => setQuery(category?.strCategory)}
                            >
                                {category?.strCategory}
                            </Button>
                        );
                    })}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-7'>
                    {results?.slice(0, 6).map((recipe) => (
                        <RecipeCard key={recipe?.idMeal} recipe={recipe} />
                    ))}
                </div>

                <div className='flex justify-center my-5'>
                    <Link href={`/recipes`}>
                        <Button variant={"outline"}>View all recipes</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CategZone