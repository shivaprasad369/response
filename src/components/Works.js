import React from "react";
import logo from "./home.jpg";
import { motion } from "framer-motion";
import Images from "./Images";

export default function Works() {
  // const {scrollY} =useScroll()
  // const opacities=useTransform(scrollY,[1500,1520,1800,2000],[1,0.6,0.3,0.1])
  const data = [
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
    {
      image: logo,
    },
  ];
  return (
    <motion.div style={{}} className="flex flex-col justify-center md:items-center text-center items-center">
      <div className="text-center gap-1">
        <div className="text-center items-center justify-center">
          <h5 className="font-bold text-sm "> web development</h5>
          <div>
            <p className="font-bold text-[2rem] max-[383px]:pb-4">WORKS</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 4 }}
          animate={{ opacity: 1, scale: 1.4, rotate: 0 }}
          transition={{ type: "spring" }}
          className="max-[755px]:grid-cols-2 flex gap-2 max-[386px]:font-bold max-md:py-10 py-6 mb-8 max-md:flex-col justify-center max-[386px]:text-sm max-[386px]:mx-3 translate-x-1"
        >
          <button className="border-2 px-3 py-1 max-[386px]:hover:bg-orange-400 max-[386px]:rounded-md  max-md:hover:text-white border-black ">
            demo
          </button>
          <button className="border-2 px-3 py-1 max-[386px]:hover:bg-orange-400 max-[386px]:rounded-md  max-md:hover:text-white border-black ">
            demo
          </button>
          <button className="border-2 px-3 py-1 max-[386px]:hover:bg-orange-400 max-[386px]:rounded-md  max-md:hover:text-white border-black ">
            demo
          </button>
          <button className="border-2 px-3 py-1 max-[386px]:hover:bg-orange-400 max-[386px]:rounded-md  max-md:hover:text-white border-black  ">
            demo
          </button>
          <button className="border-2 px-3 py-1 max-[386px]:hover:bg-orange-400 max-[386px]:rounded-md  max-md:hover:text-white border-black max-[386px]:w-[100%] ">
            demo
          </button>
        </motion.div>
      </div>
      <div className="items-center">
        <div className="max-md:mx-2 ">
          <div className=" grid grid-cols-3 gap-3 max-md:grid-cols-1 max-md:w-full items-center">
            {data.map((data, index) => (
              <Images data={data} index={index} />
            ))}
          </div>
          <div className="text-center mt-2 ">
            <button className="bg-black text-white px-3 py-1 max-md:w-[80%] max-md:rounded-md max-md:font-bold max-md:hover:bg-orange-400">
              Submit
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
