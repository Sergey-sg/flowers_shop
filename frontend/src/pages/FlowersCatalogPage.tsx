import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchAllFlowers,
  fetchNextPageOfFlowers,
} from "../redux/slice/flower/flowerActions";
import { FlowerCard } from "../components/FlowerCard";

const FlowersCatalogPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const flowers = useAppSelector((state) => state.flowers);
  const loader = useAppSelector((state) => state.loader);
  const pagination = useAppSelector((state) => state.pagination);

  useEffect(() => {
    console.log("start useEffect in AllFlowersPage");

    if (!flowers.length) {
      dispatch(fetchAllFlowers());
    }
  });

  const loadNextPage = () => {
    if (pagination.next) {
      dispatch(fetchNextPageOfFlowers(pagination.next));
    }
  };

  return (
    <>
      <div className="w-11/12 mx-auto mt-14 flex flex-wrap justify-center">
        {flowers?.map((flower) => (
          <FlowerCard key={flower.pk} flower={flower} />
        ))}
      </div>
      {pagination.next && (
        <button
          // disabled={!loader}
          className="text-[#E1E1E6] hover:text-cyan-500 font-normal text-2xl leading-relaxed p-3 mb-8"
          onClick={loadNextPage}
        >
          Load More
        </button>
      )}
    </>
  );
};

export default FlowersCatalogPage;
