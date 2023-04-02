import React, { useEffect } from "react";
import ToCartButton from "../components/ToCartButton";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchOneFlowerBySlug } from "../redux/slice/flower/flowerActions";
import { useParams } from "react-router-dom";

export function FlowerDetail() {
  const dispatch = useAppDispatch();
  const { flowerSlug } = useParams()
  const [flower] = useAppSelector((state) => state.flowers.filter((flower) => flower.slug === flowerSlug));

  useEffect(() => {
    console.log("start useEffect in FlowerDetail page");

    if (!flower) {
      dispatch(fetchOneFlowerBySlug(flowerSlug || ''));
    }
  }, []);

  return (
    <div className="w-11/12 mx-auto mb-8">
      <div className="pt-6 pb-2 px-4 text-2xl hover:text-cyan-500 font-bold leading-snug text-[#E1E1E6] mb-14 max-w-max">
        &lt; back
      </div>
      { flower && 
        <div className="flex">
          <img 
            src={`${flower.image}`} 
            alt={flower.img_alt}
            className="ml-8 mr-20 mt-8 max-h-[500px]" 
          />
          <div className="text-[#E1E1E6] max-w-4xl my-auto">
            <p className="font-medium text-4xl leading-snug">{flower.name}</p>
            <br />
            <p className="font-normal text-2xl leading-snug">{flower.description}</p>
            <br />
            <div className="flex">
              <span className="text-[#82F3FF] font-normal text-3xl leading-relaxed mr-4">$ {flower.price}</span><ToCartButton />
            </div>
          </div>
        </div>
      }
    </div>
  );
}
