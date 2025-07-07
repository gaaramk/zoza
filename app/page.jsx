import CategZone from "@/components/layout/CategZone";
import Contact from "@/components/layout/Contact";
import CulinaryChronicle from "@/components/layout/CulinaryChronicle";
import Header from "@/components/layout/Header";
import Palette from "@/components/layout/Palette";
import SearchBar from "@/components/layout/SearchBar";
import SwipRecipes from "@/components/layout/SwipRecipes";

export default function Home() {
  return (
      <>
        <Header />
        <Palette />
        <SearchBar />
        <SwipRecipes />
        <CategZone />
        <CulinaryChronicle />
        <Contact />
      </>
  );
}
