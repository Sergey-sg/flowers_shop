import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/shopLogo.png";
import MenuCategories from "./MenuCategories";

const Header: React.FC = () => {
  return (
    <div className="w-full bg-[#00111A]">
      <div className="flex py-4 px-6 text-center w-11/12 mx-auto">
        <Link to={"/"} className="text-[#FFFFFF] hover:text-cyan-500">
          <img
            className="rounded-full float-left"
            width={"50px"}
            src={logo}
            alt={"flower logo"}
          />
          <div className="ml-8 my-auto">flowers shop</div>
        </Link>
        <MenuCategories />
        <input
          placeholder="Search your flower"
          type={"text"}
          name="searchFlower"
          className="block w-8/12 my-auto text-[#E1E1E6] bg-[#0D1D25] border border-none rounded-3xl py-4 px-9 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 sm:text-sm"
        />
        <button className="mx-8 bg-red-700 hover:bg-red-800 w-1/6 rounded-3xl">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
