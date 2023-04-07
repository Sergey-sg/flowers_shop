import React, { useCallback, useEffect, useRef, useState } from "react";
import { MdClose, MdOutlineFilterList } from "react-icons/md";
import { useAppSelector } from "../redux/hooks";
import DropDownList from "./DropDownList";

const FilterMenu = (props: {
  filterParams: any;
  setFilterParams: any;
  submitFilters: any;
  resetAllFilters: any;
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const categories = useAppSelector((state) => state.categories);
  const filterMenuRef = useRef<HTMLDivElement>(null);

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
      props.setFilterParams({ category: params });
    },
    [props]
  );

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
            values={
              props.filterParams.category instanceof Object
                ? props.filterParams.category
                : [props.filterParams.category]
            }
          />
          <div className="flex flex-row w-max mx-auto mt-4">
            <button
              className="text-[#E1E1E6] hover:text-cyan-500 w-max my-auto py-2 px-3"
              onClick={() => props.submitFilters()}
            >
              Submit
            </button>
            <button
              className="text-[#E1E1E6] hover:text-cyan-500 w-max my-auto py-2 px-3"
              onClick={() => props.resetAllFilters()}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterMenu;
