import { motion } from 'framer-motion'
import React from 'react'
export default function Images({data,index}) {

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,scale:1}}  transition={{ delay: index * 0.2, easeIn: "easeInOut", duration: 0.3 }} >
      <img
              src={data.image}
              alt="profile"
              width={250}
              height={100}
              className="max-md:w-full rounded-md "
            />
    </motion.div>
  )
}
