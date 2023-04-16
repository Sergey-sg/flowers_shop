import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/shopLogo.png";
import LeftMenu from "./LeftMenu";
import SearchInputForm from "./SearchInputForm";

const Header: React.FC = () => {
  return (
    <div className="w-full bg-[#00111A]">
      <div className="flex py-4 text-center w-11/12 mx-auto">
        <Link to={"/"} className="text-[#FFFFFF] hover:text-cyan-500">
          <img
            className="rounded-full float-left"
            width={"50px"}
            src={logo}
            alt={"flower logo"}
          />
          <div className="ml-8 my-auto">flowers shop</div>
        </Link>
        <LeftMenu />
        <SearchInputForm />
        <Link to={"/cart"} className="mx-8 my-auto bg-red-700 hover:bg-red-800 rounded-xl py-3 px-4">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
