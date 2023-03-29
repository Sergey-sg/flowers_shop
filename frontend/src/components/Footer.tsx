import React from "react";
import logo from "../assets/images/shopLogo.png";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between py-4 px-6 bg-[#00111A] mt-auto">
      <img
        className="rounded-full ml-10"
        width={"50px"}
        src={logo}
        alt={"flower logo"}
      />
      <div className="text-[#FFFAF1] my-auto font-normal text-sm leading-relaxed mr-10">
        © 2023 - Serhii Hlushak.
      </div>
    </div>
  );
};

export default Footer;
