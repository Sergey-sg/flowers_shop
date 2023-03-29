import React from "react";
import bannerImage from "../assets/images/bannerFlowers.png";

const BannerFlowers: React.FC = () => {
  const divStyle = {
    background: "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
  };

  return (
    <div className="relative m-0">
      <div className="h-3/6 mb-14 mx-auto pt-24">
        <img
          className="absolute top-0"
          style={{ width: undefined, height: "120%" }}
          src={bannerImage}
          alt={"flowers"}
        />
        <div className="top-10 rounded-lg flex m-auto w-11/12" style={divStyle}>
          <div className="text-slate-50 my-auto py-40 mr-40 ml-auto">
            <p className="font-medium text-4xl leading-10">Unrivaled choice</p>
            <span className="font-normal text-xs leading-4">
              Feel cared for with selected flowers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFlowers;
