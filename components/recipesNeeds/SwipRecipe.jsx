'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import RecipeCard from './RecipeCard';

export default function SwipRecipe({ recipes }) {


    console.log(recipes);




    return (
        <>
            <section className='my-15'>




                <h1 className='font-title text-4xl font-bold text-[#EE6352] my-15'>Similar Recipes</h1>




                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >




                    {recipes && recipes?.map((recipe) => (
                        <SwiperSlide key={recipe?.idMeal}>
                            <RecipeCard recipe={recipe} />
                        </SwiperSlide>
                    ))}


                </Swiper>
            </section>
        </>
    );
}
