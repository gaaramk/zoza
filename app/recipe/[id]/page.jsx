import SwipRecipe from '@/components/recipesNeeds/SwipRecipe';
import { getRecipeById, getRecipesByCategory, searchYoutube } from '@/lib/api'
import { BookMarked, MapPin, Refrigerator } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const page = async ({ params }) => {
  const { id } = await params
  const recipe = await getRecipeById(id)
  const ingredients = []
  const youtube = await searchYoutube(recipe.strMeal)
  const videos = youtube?.contents.slice(0, 3)

  const sameCategory = await getRecipesByCategory(recipe.strCategory)
  const sameCategoryFiltered = sameCategory.filter((item) => item.idMeal !== id)


  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(
        `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
      )
    }
  }

  // console.log(sameCategoryFiltered);




  return (
    <section>
      <div>
        {/* banner */}
        <div className="max-w-[600px] mx-auto text-center flex flex-col justify-center items-center mt-20 mb-16">
          <h4 className="w-fit px-3 py-1 bg-[#EE6352] rounded-full uppercase text-white text-sm">
            Recipe
          </h4>

          <h2 className="font-title text-5xl md:text-7xl uppercase font-bold">
            {recipe.strMeal}
          </h2>

          <p className="mt-5 text-lg overflow-hidden">
            _{recipe.strInstructions.slice(0, 100)}
          </p>


          <ul className='flex items-center gap-10 mt-5 capitalize'>
            <li className='flex items-center gap-2'>
              <MapPin />
              <p>
                {recipe.strArea}
              </p>
            </li>

            <li className='flex items-center gap-2'>
              <Refrigerator />
              <p>
                {recipe.strCategory}
              </p>
            </li>


            <li className='flex items-center gap-2 text-blue-600 underline'>
              <BookMarked />
              <Link href={recipe.strSource} target='_blank'>
                reference
              </Link>
            </li>

          </ul>
        </div>


        {/* image */}
        <figure className='md:max-h-[700px] rounded-3xl overflow-hidden'>
          <Image
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            width={1000}
            height={600}
            unoptimized
            className='w-full h-full object-cover'
          />
        </figure>


        {/* details */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 mt-12' >

          {/* instructions */}
          <div className='md:w-1/2 w-full'>
            <p className='text-lg leading-relaxed '>
              {recipe.strInstructions}
            </p>
          </div>


          {/* ingredients */}
          <div className='md:w-1/3 w-full'>
            <h3 className='font-title text-4xl font-bold text-[#EE6352] '>ingredients</h3>

            <ul className='mt-5'>
              {ingredients && ingredients.map((ingredient, index) => (
                <li key={index} className='my-2 text-lg '>{ingredient}</li>
              ))}
            </ul>

            <ul>

            </ul>
          </div>
        </div>

        {/* video */}
        <div className='mt-12'>

          <h2 className='font-title text-4xl font-bold text-[#EE6352] my-15'>Related Videos</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {youtube && videos.map((video) => (
              <div>
                <iframe
                  key={video?.video?.videoId}
                  className='rounded-3xl shadow-xl'
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${video?.video?.videoId}`}
                  title={video?.video?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <figcaption className='mt-2 flex flex-col gap-1'>
                  <h3>{video?.video?.title}</h3>
                  <small>{video?.video?.channelName}</small>
                  <small>{video?.video?.publishedTimeText}</small>
                </figcaption>
              </div>


            ))}
          </div>
        </div>


        <SwipRecipe recipes={sameCategoryFiltered} />





      </div>
    </section>
  )
}

export default page