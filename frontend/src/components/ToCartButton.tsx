import React from "react";

const ToCartButton: React.FC = () => {
  return (
    <div className="inline-block grid grid-rows-1 grid-flow-col">
      <button className="py-2 px-3 text-3xl hover:text-red-800">
        &#8722;
      </button>
      <span className="text-2xl my-auto">01</span>
      <button className="py-2 px-3 text-3xl hover:text-cyan-500">+</button>
      <button className="p-3 ml-3 bg-red-700 hover:bg-red-800 rounded-[5px]">
        to cart
      </button>
    </div>
  );
};

export default ToCartButton;
