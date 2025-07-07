import Link from "next/link";
import { Button } from "../ui/button";

const RecipeCard = ({ recipe }) => {
  return (
    <section className="mb-5">
      <div
        key={recipe?.idMeal}
        className="border rounded-lg overflow-hidden shadow-md text-start"
      >
        <img
          src={recipe?.strMealThumb}
          alt={recipe?.strMeal}
          className="w-full h-48 object-cover rounded"
        />

        <div className="p-4">
          <h3 className="my-3 font-semibold">{recipe?.strMeal}</h3>

          <p className="my-3 text-gray-600 text-sm line-clamp-2">
            {recipe?.strInstructions}
          </p>

          <div className="flex justify-between items-center mt-15 mb-5">
            <span className=" text-sm font-semibold capitalize">
              {recipe?.strCategory} - {recipe?.strArea}
            </span>

            <Button variant={"outline"}>
              <Link href={`/recipe/${recipe?.idMeal}`}>View Recipe</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeCard;
