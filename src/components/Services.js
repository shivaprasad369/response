import React from "react";

import Card from "./Card";
//import Cards from "./Cards";
import { motion } from "framer-motion";

export default function Services() {
//     const {scrollY} =useScroll()
//   const opacities=useTransform(scrollY,[800,1000,1400,1800],[1,0.9,0.7,0.5])
  return (
    <motion.div style={{}} className="flex flex-col justify-center items-center ">
      
        <div className="text-center font-bold ">
          <h5 className="text-2 ">Services are</h5>
          <div className="text-[2rem] font-sans">
            <p className="border-t-2 pt-0">SERVICE</p>
          </div>
        </div>
        <div className="pb-4">

      <Card/>
        </div>
        <div className=" flex flex-col text-center bg-gray-300 px-[3rem] w-[100%] pb-4" >
            <div className="gap-3">
                <p className="text-sl text-black font-sans font-bold mb-2 pt-3"> This is web application</p>
                <button className="border-2 px-[3rem] hover:bg-orange-600 text-white bg-black rounded-md h-10 mb-[1rem]">Submit</button>
            </div>
        </div>
   
    </motion.div>
  );
}
