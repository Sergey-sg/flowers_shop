import React from "react";
import BannerFlowers from "../components/BannerFlowers";
import { CategoriesPresentationWithScroll } from "../components/CategoriesPresentationWithScroll";

const HomePage: React.FC = () => {
  return (
    <div>
      <BannerFlowers />
      <br />
      <CategoriesPresentationWithScroll categories={["Flower suggestions"]} />
      <CategoriesPresentationWithScroll
        categories={["Ready for drop off", "Flower seeds"]}
      />
    </div>
  );
};

export default HomePage;
