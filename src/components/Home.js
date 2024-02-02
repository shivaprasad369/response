import React from 'react'
import classes from './Home.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
export default function Home() {
    const {scrollY} =useScroll()
    const header=useTransform(scrollY,[0,200],[0,100])
    const opacities=useTransform(scrollY,[0,200,300,500],[1,0.6,0.3,0.1])
  return (
    <motion.div style={{opacity:opacities,y:header}} initial={{opacity:0,scale:0}} animate={{type:'spring',opacity:1,scale:1}} className='flex flex-col gap-3 justify-center items-center h-[40rem] pt-20 p-4 text-white'>
      <div className=' font-bold items-center justify-center text-center'>
        <motion.div translate='yes' className='text-sm text-center  '>This is demo project</motion.div>
        <div className={`${classes.header} text-[3rem] `}>
            <p className='border-t-2 border-gray-400 pt-0'>WE ARE <sapn className="text-green-500 " >CHICAGO</sapn></p>
        </div>
        <motion.button animate={{type:'spring',scale:1.2}} transition={{delay:0.3,ease:'easeInOut',duration:0.4}} className='px-2 py-1 border-2 text-center justify-center max-md:w-full max-md:text-xl max-md:hover:bg-orange-500 max-md:rounded-md'>Submit</motion.button>
      </div>
    </motion.div>
  )
}
