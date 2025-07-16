import { RecipesFiltre } from "@/components/recipesNeeds/RecipesFiltre";

export const metadata = {
  title: {
    default: "Recipes",
  },
};

const page = () => {
  return <>
    <section>
      <RecipesFiltre />
    </section>
  </>;
};

export default page;
