import React, { useCallback, useEffect, useRef, useState } from "react";
import { MdClose, MdOutlineFilterList } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import queryString from "query-string";
import { useLocation, useSearchParams } from "react-router-dom";
import DropDownList from "./DropDownList";
import { fetchAllFlowers } from "../redux/slice/flower/flowerActions";

const FilterMenu: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = useAppSelector((state) => state.categories);
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const [filterParams, setFilterParams] = useState(queryString.parse(useLocation().search));
  const dispatch = useAppDispatch();

  const handleClickOutside = (event: any) => {
    if (
      filterMenuRef.current &&
      !filterMenuRef.current.contains(event.target)
    ) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterMenuRef]);

  const setCategory = useCallback(
    (params: string[]) => {
      setFilterParams({ category: params });
    },
    [setSearchParams]
  );

  const submitFilters = () => {
    if (filterParams) {
      const newSearchParams = queryString.stringify(filterParams);
      setSearchParams(newSearchParams);
      dispatch(fetchAllFlowers(newSearchParams));
    }
  };

  return (
    <>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="bg-[#033857] hover:bg-[#042a40] rounded-xl text-[#E1E1E6] p-4 my-4 mr-8 ml-auto w-max"
      >
        <div className="flex justify-center">
          <MdOutlineFilterList size={20} />
          <span className="pl-3">Filters</span>
        </div>
      </button>

      {showSidebar && (
        <div
          ref={filterMenuRef}
          className={`p-4 fixed top-0 right-0 h-screen w-2/12 min-w-max pl-10 z-50 ease-in-out duration-700 backdrop-blur-sm bg-[#0D1D25]/70 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <button
            className="text-[#E1E1E6] hover:text-red-800 p-3 w-max mb-4 text-2xl"
            onClick={() => setShowSidebar(false)}
          >
            <MdClose />
          </button>
          <DropDownList
            menuName="categories"
            elems={categories}
            changeFunc={setCategory}
            values={filterParams.category}
          />
          <button
            className="text-[#E1E1E6] hover:text-cyan-500 w-max my-auto py-2 px-3"
            onClick={() => submitFilters()}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default FilterMenu;
