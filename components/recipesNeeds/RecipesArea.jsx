'use client'
import { getAllLocations, getRecipeByLocation } from '@/lib/api';
import React, { useState } from 'react'
import LoadingPage from '../ui/LoadingPage';
import { Button } from '../ui/button';
import RecipeCard from './RecipeCard';
import { useQuery } from '@tanstack/react-query';

const RecipesArea = () => {
    const [query, setQuery] = useState("Egyptian");


    const {
        data: areasNames,
        isLoading: areaLoading,
        isError: areaError,
        error: areaErrorData,
    } = useQuery({
        queryKey: ["AreaNames"],
        queryFn: () => getAllLocations(),
    });

    const {
        data: results,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["Area", query],
        queryFn: () => getRecipeByLocation(query),
    });



    if (areaLoading || isLoading) {
        return <LoadingPage />
    }

    if (areaError || isError) {
        console.error("❌ Error fetching categories:", areaErrorData?.message);
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
                        recipes by area
                    </h2>

                    <p className="mt-5 text-lg">
                        you can select a specific area to get a list of recipes
                        related to that area of the world
                    </p>
                </div>




                <div className='flex flex-wrap justify-center gap-5'>
                    {areasNames?.map((area, index) => {
                        const isActive = area?.strArea === query;

                        return (
                            <Button
                                key={index}
                                variant={"outline"}
                                className={isActive ? "bg-[#9FDC26] " : ""}
                                onClick={() => setQuery(area?.strArea)}
                            >
                                {area?.strArea}
                            </Button>
                        );
                    })}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-7'>
                    {results?.map((recipe) => (
                        <RecipeCard key={recipe?.idMeal} recipe={recipe} />
                    ))}
                </div>


            </div>
        </section>
    )
}

export default RecipesArea