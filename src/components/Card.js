import React from 'react'
import logo from "./download.png";
import classes from './Service.module.css'
import Cards from './Cards';
export default function Card() {
    const data=[{
        image:logo,
        header:"Communication1",
        body: 'this is service based company djjs ewrjwerwm wejrweiorwmwerwej'
    },
    {
        image:logo,
        header:"Communication2",
        body: 'this is service based company djjs ewrjwerwm wejrweiorwmwerwej'
    },
    {
        image:logo,
        header:"Communication3",
        body: 'this is service based company djjs ewrjwerwm wejrweiorwmwerwej'
    },
    {
        image:logo,
        header:"Communication4",
        body: 'this is service based company djjs ewrjwerwm wejrweiorwmwerwej'
    },
    {
        image:logo,
        header:"Communication5",
        body: 'this is service based company djjs ewrjwerwm wejrweiorwmwerwej'
    },
    {
        image:logo,
        header:"Communication6",
        body: 'this is service based company djjs ewrjwerwm wejrweiorwmwerwej'
    }

]
  return (
    <div className={classes.img}>
        <div className={`${classes.img1} flex justify-center px-[5rem] text-center gap-3 py-[2rem] max-md:w-[100%] max-md:mx-0 `}>
            <div className='grid grid-cols-3 grid-rows-2 gap-5 max-md:grid-cols-1'>
         {data.map((data,index)=>(

             <Cards data={data} index={index}/>
             ))}
             </div>
          </div>
        
        </div>
  )
}
