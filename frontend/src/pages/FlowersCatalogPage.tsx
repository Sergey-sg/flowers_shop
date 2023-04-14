import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchAllFlowers,
  fetchNextPageOfFlowers,
} from "../redux/slice/flower/flowerActions";
import { FlowerCard } from "../components/FlowerCard";
import FilterMenu from "../components/FilterMenu";
import queryString from "query-string";
import { useLocation, useSearchParams } from "react-router-dom";
import OrderingDropDown from "../components/OrderingDropDown";

const FlowersCatalogPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const flowers = useAppSelector((state) => state.flowers);
  const loader = useAppSelector((state) => state.loader);
  const pagination = useAppSelector((state) => state.pagination);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFilters = queryString.parse(useLocation().search);
  const [filterParams, setFilterParams] = useState(queryFilters);
  const {search} = queryFilters;

  useEffect(() => {
    console.log("start useEffect in AllFlowersPage");

    dispatch(fetchAllFlowers(queryString.stringify({...filterParams, search}))); 
    // eslint-disable-next-line
  }, [searchParams, dispatch, search]);

  const loadNextPage = () => {
    if (pagination.next) {
      dispatch(fetchNextPageOfFlowers(pagination.next));
    }
  };

  const submitFilters = () => {
    const newSearchParams = queryString.stringify({...filterParams, search});
    setSearchParams(newSearchParams);
    dispatch(fetchAllFlowers(newSearchParams));
  };

  const resetAllFilters = () => {
    setSearchParams(undefined);
    setFilterParams({});
    dispatch(fetchAllFlowers(""));
  };

  const setOrdering = (slug: string) => {
    const newSearchParams = queryString.stringify({
      ...filterParams,
      ordering: slug,
    });
    setFilterParams({ ...filterParams, ordering: slug });
    setSearchParams(newSearchParams);
    dispatch(fetchAllFlowers(newSearchParams));
  };

  return (
    <>
      <div className="flex flex-row justify-between w-11/12 mx-auto pt-4">
        <OrderingDropDown
          elems={[
            { name: "cheaper first", slug: "price" },
            { name: "first more expensive", slug: "-price" },
          ]}
          changeFunc={setOrdering}
          value={filterParams.ordering}
          nameOfFilter={"ordering"}
        />
        <FilterMenu
          filterParams={filterParams}
          setFilterParams={setFilterParams}
          submitFilters={submitFilters}
          resetAllFilters={resetAllFilters}
        />
      </div>

      {!flowers.length ? (
        <div className="m-auto text-3xl text-white">
          Not see flowers, try change filters
        </div>
      ) : (
        <div className="w-11/12 mx-auto mt-14 flex flex-wrap justify-center">
          {flowers?.map((flower) => (
            <FlowerCard key={flower.pk} flower={flower} />
          ))}
        </div>
      )}
      {pagination.next && (
        <button
          disabled={loader}
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
