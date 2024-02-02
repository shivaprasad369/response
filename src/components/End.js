import React from 'react'
import logo from './home.jpg'
export default function End() {
  return (
    <div className='bg-[#4d4a4a33] mb-3 w-full flex flex-col mt-2 justify-center items-center '>
  
  
        <div className=' py-3'>
            <img src={logo} alt='profile' width={60} className='rounded-full' />
        </div>
        <div className='text-xl text-center pb-3'>
            <p className='font-bold'>To address all issues (including breaking changes), run:</p>
            <h3 className='border-2bg-gray '>Footer</h3>
        </div>
   
  
    </div>
  )
}
