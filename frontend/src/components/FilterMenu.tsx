import React, { useCallback, useEffect, useRef, useState } from "react";
import { MdClose, MdOutlineFilterList, MdArrowDropDown } from "react-icons/md";
import { useAppSelector } from "../redux/hooks";
import queryString from "query-string";
import { useLocation, useSearchParams } from "react-router-dom";

const DropDownList = (props: {
  menuName: string;
  elems: any[];
  changeFunc: any;
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [params, setParams] = useState<string[]>([]);

  const checkElem = useCallback(
    (elem: string, checked: boolean) => {
      let outParams = [];
      if (checked) {
        outParams = [...params, elem];
      } else {
        outParams = params.filter((param) => param !== elem);
      }

      setParams(outParams);
      props.changeFunc(outParams);
    },
    [params]
  );

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button
        onClick={() => setShowDropDown(!showDropDown)}
        className="text-[#E1E1E6] bg-[#033857] hover:bg-[#042a40] rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mb-2"
      >
        Filter by {props.menuName}
        <MdArrowDropDown />
      </button>
      {/* Dropdown menu */}
      <div
        className={`z-10 ${
          showDropDown ? "" : "hidden"
        } w-max p-4 bg-white rounded-lg shadow`}
      >
        <h6 className="mb-3 text-sm text-gray-900 dark:text-white">
          {props.menuName.charAt(0).toUpperCase() + props.menuName.slice(1)}
        </h6>
        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
          {props.elems?.map((elem) => (
            <li key={elem.pk} className="flex items-center">
              <input
                id={elem.slug}
                type="checkbox"
                onChange={(event) => checkElem(elem.slug, event.target.checked)}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={elem.slug}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                {elem.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FilterMenu: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const loader = useAppSelector((state) => state.loader);
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = useAppSelector((state) => state.categories);
  const queryParams = queryString.parse(useLocation().search);
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
      setSearchParams(queryString.stringify({ category: params }));
    },
    [queryParams, searchParams]
  );

  return (
    <>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="border border-sky-300 bg-[#00111A] hover:bg-[#0D1D25] rounded-xl text-[#E1E1E6] px-4 pt-4 pb-3.5 my-4 mr-8 ml-auto w-max"
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
          />
          {/* <button
            className="text-[#E1E1E6] hover:text-cyan-500 w-max my-auto py-2 px-3"
            onClick={() => setFilters()}
          >
            Submit
          </button> */}
        </div>
      )}
    </>
  );
};

export default FilterMenu;
