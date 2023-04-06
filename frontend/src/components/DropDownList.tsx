import React, { useCallback, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const DropDownList = (props: {
  menuName: string;
  elems: any[];
  changeFunc: any;
  values: any;
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [params, setParams] = useState<string[]>(props.values || []);

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
        {showDropDown ? <MdArrowDropUp /> : <MdArrowDropDown />}
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
                checked={params?.includes(elem.slug)}
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

export default DropDownList;
