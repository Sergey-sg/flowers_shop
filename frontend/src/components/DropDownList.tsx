import React, { useCallback, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const DropDownList = (props: {
  menuName: string;
  elems: any[];
  changeFunc: any;
  values: any;
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const checkElem = useCallback(
    (elem: string, checked: boolean) => {
      let outParams = [];
      if (checked) {
        outParams = [...props.values, elem];
      } else {
        outParams = props.values.filter((value: any) => value !== elem);
      }
      props.changeFunc(outParams);
    },
    [props]
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
        } w-max p-4 text-[#E1E1E6] backdrop-blur-sm bg-[#033857]/40 rounded-lg shadow`}
      >
        <div className="mb-3 text-sm">
          {props.menuName.charAt(0).toUpperCase() + props.menuName.slice(1)}
        </div>
        <ul className="space-y-2 text-sm">
          {props.elems?.map((elem) => (
            <li key={elem.pk} className="flex items-center">
              <input
                id={elem.slug}
                type="checkbox"
                checked={props.values?.includes(elem.slug)}
                onChange={(event) => checkElem(elem.slug, event.target.checked)}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
              />
              <label
                htmlFor={elem.slug}
                className="ml-2 text-sm"
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
