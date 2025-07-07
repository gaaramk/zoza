'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { getEgyptianRecipes } from '@/lib/api';
import RecipeCard from '../recipesNeeds/RecipeCard';
import LoadingPage from '../ui/LoadingPage';

export default function SwipRecipes() {


    const {
        data: results,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["egyptianRecipes"],
        queryFn: () => getEgyptianRecipes(),
    });


    if (isLoading) {
        return <LoadingPage />
    }

    if (isError) {
        return <p>Error: {error.message}</p>
    }







    return (
        <>
            <section className='my-5'>

                <div className='font-body my-5 border border-[#C4E5FC] rounded-3xl p-5'>
                    <div className='py-5'>
                        <h2 className='font-title text-2xl font-bold'>Egyptian Recipes</h2>
                    </div>


                    <Swiper
                        slidesPerView={
                            window.innerWidth < 768
                                ? 1
                                : window.innerWidth < 1024
                                    ? 2
                                    : 3
                        }
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >





                        {results?.map((recipe) => (
                            <SwiperSlide key={recipe.idMeal}>
                                <RecipeCard recipe={recipe} />
                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div>




            </section>
        </>
    );
}
