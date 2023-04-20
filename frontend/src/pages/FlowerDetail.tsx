import React, { useEffect } from "react";
import ToCartButton from "../components/ToCartButton";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchOneFlowerBySlug } from "../redux/slice/flower/flowerActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

export function FlowerDetail() {
  const dispatch = useAppDispatch();
  const { flowerSlug } = useParams()
  const [flower] = useAppSelector((state) => state.flowers);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("start useEffect in FlowerDetail page");

    if (flowerSlug) {
      dispatch(fetchOneFlowerBySlug(flowerSlug));
    }
  }, [flowerSlug, dispatch]);

  return (
    <div className="w-10/12 mx-auto mb-14">
      <button 
        onClick={() => navigate(-1)}
        className="pt-6 pb-2 px-4 text-2xl hover:text-cyan-500 font-bold leading-snug text-[#E1E1E6] mb-14 w-max"
      >
        <MdArrowBackIos className="float-left mt-1"/> back
      </button>
      { flower && 
        <div className="xl:flex">
          <img 
            src={`${flower.image}`} 
            alt={flower.img_alt}
            className="xl:ml-8 xl:mr-20 mt-8 max-h-[500px] max-w-full mb-8 xl:float-left" 
          />
          <div className="text-[#E1E1E6] max-w-4xl my-auto">
            <p className="font-medium text-4xl leading-snug">{flower.name}</p>
            <br />
            <p className="font-normal text-2xl leading-snug text-justify">{flower.description}</p>
            <div className="flex flex-row justify-center">
              {flower.category.map((cat) => (
                <Link key={cat.pk} to={`/flowers-catalog?category=${cat.slug}`} className="hover:text-cyan-500 px-2 py-1 mx-1 bg-[#033857] rounded">
                  {cat.name}
                </Link>
              ))}
            </div>  
            <br />
            <div className="flex">
              <span className="text-[#82F3FF] font-normal text-3xl leading-relaxed mr-4">$ {flower.price/100}</span><ToCartButton productId={flower.pk}/>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
