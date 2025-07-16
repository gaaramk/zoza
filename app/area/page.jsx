import RecipesArea from '@/components/recipesNeeds/RecipesArea'
import React from 'react'

export const metadata = {
  title: {
    default: "Area Recipes",
  },
};

const page = () => {
    return (
        <div>
            <RecipesArea />
        </div>
    )
}

export default page