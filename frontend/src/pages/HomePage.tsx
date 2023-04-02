import React, { useEffect } from "react";
import BannerFlowers from "../components/BannerFlowers";
import { RecommendationPresentationWithScroll } from "../components/RecommendationPresentationWithScroll";
import { useAppDispatch } from "../redux/hooks";
import { fetchRecommendations } from "../redux/slice/recommendation/recommendationActions";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("start useEffect in HomePage");

    dispatch(fetchRecommendations());
  }, []);

  return (
    <div>
      <BannerFlowers />
      <br />
      <RecommendationPresentationWithScroll />
    </div>
  );
};

export default HomePage;
