import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAllCategories } from "../redux/slice/category/categoryActions";
import { MdMenu, MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const MenuCategories: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);
  const [showCategories, setShowCategories] = useState(false);
  const MenuCategoriesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActiveLink = (
    event: { preventDefault: () => void },
    path: string
  ) => {
    if (location.pathname === path) {
      event.preventDefault();
    }
  };

  const handleClickOutside = (event: any) => {
    if (
      MenuCategoriesRef.current &&
      !MenuCategoriesRef.current.contains(event.target)
    ) {
      setShowCategories(false);
    }
  };

  useEffect(() => {
    console.log("in useEffect ref categories");

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [MenuCategoriesRef]);

  useEffect(() => {
    console.log("start useEffect in LeftMenuCategories");

    if (!categories.length) {
      dispatch(fetchAllCategories());
    }
  }, [categories, dispatch]);

  return (
    <>
      <button
        className="text-[#E1E1E6] hover:text-cyan-500 text-3xl mx-4 my-auto pb-1 px-2"
        onClick={() => setShowCategories(!showCategories)}
      >
        <MdMenu />
      </button>
      {showCategories && (
        <div
          ref={MenuCategoriesRef}
          className={`p-4 fixed top-0 left-0 h-screen w-2/12 min-w-max pl-10 text-white z-50 ease-in-out duration-700 backdrop-blur-sm bg-[#0D1D25]/70 ${
            showCategories ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <button
            className="text-[#FFFFFF] hover:text-red-800 p-3 w-max mb-4 float-right text-2xl"
            onClick={() => setShowCategories(!showCategories)}
          >
            <MdClose />
          </button>
          <div className="mt-20 mr-6 text-[#E1E1E6] font-normal leading-relaxed">
            <Link
              to={"/flowers-catalog"}
              className="hover:text-cyan-500"
              onClick={(e) => isActiveLink(e, "/flowers-catalog")}
            >
              <p className="my-4">Flowers catalog</p>
            </Link>
            <br />
            {categories?.map((category) => (
              <Link
                key={category.pk}
                to={`/flowers-catalog?category=${category.slug}`}
                className="hover:text-cyan-500"
              >
                <p className="my-4">{category.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCategories;
