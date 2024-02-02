import React from 'react'
import logo from "./home.jpg";
import { motion} from 'framer-motion';
export default function Cards({index}) {
    // const {scrollY} =useScroll()
    // const opacities=useTransform(scrollY,[600,800,1000,1200],[1,0.6,0.3,0.1])
  return (
    <motion.div style={{}} initial={{opacity:0,scale:0.7}} animate={{y:30,opacity:1,scale:1}} transition={{delay:index * 0.2, ease:'easeIn', duration:0.3}} className="border-1 border-gray-400 bg-gray-100 flex flex-col justify-center items-center text-center px-2 py-3 max-md:w-[100%]">
            <div className='    '>
              <img src={logo} alt="images" width={200} height={200} className='border-2 rounded-y-full rounded-[30px] max-md:w-[6rem]'/>
            </div>
            <div>
              <h2 className="font-bold text-xl cursor-pointer">Communication</h2>
              <div className="text-center">

              <p className="text-md font-sans text">
                this is service based company djjs ewrjwerwm wejrweiorwmwerwej
              </p>
              </div>
            </div>
          </motion.div>
  )
}
