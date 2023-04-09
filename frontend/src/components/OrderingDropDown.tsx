import React, { useCallback, useEffect, useRef, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const OrderingDropDown = (props: {
  elems: any[];
  changeFunc: any;
  value: any;
  nameOfFilter: string;
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target)
    ) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef]);

  const checkElem = useCallback(
    (slug: string, checked: boolean) => {
      props.changeFunc(checked ? slug : "");
    },
    [props]
  );

  return (
    <div className="p-4 relative">
      <button
        onClick={() => setShowDropDown(!showDropDown)}
        className="text-[#E1E1E6] bg-[#033857] hover:bg-[#042a40] rounded-lg p-3 text-center inline-flex w-max items-center mb-2"
      >
        Order by
        {showDropDown ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </button>
      {/* Dropdown menu */}
      <div
        ref={dropDownRef}
        className={`z-50 absolute ${
          showDropDown ? "" : "hidden"
        } w-max p-4 text-[#E1E1E6] backdrop-blur-sm bg-[#033857]/40 rounded-lg shadow`}
      >
        <div className="mb-3 text-sm">orders</div>
        <ul className="space-y-2 text-sm">
          {props.elems?.map((elem) => (
            <li key={elem.slug} className="flex items-center">
              <input
                id={elem.slug}
                type="radio"
                checked={props.value === elem.slug}
                onChange={(event) => checkElem(elem.slug, event.target.checked)}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"
              />
              <label htmlFor={elem.slug} className="ml-2 text-sm">
                {elem.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderingDropDown;
