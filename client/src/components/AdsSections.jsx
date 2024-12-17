import React from 'react'
import { Link } from 'react-router-dom'
function AdsSections() {
  return (
    <>
   <div className="main-ad w-[100%] h-[22rem] bg-gray-400 mt-5 flex justify-between ">
      
       <div className="ml-10 flex flex-col text-6xl py-10 font-semibold">
           <div className="">
            Design Your Ads With 
           </div>

           <div className="">
           Best Designers
           </div>
       </div>


{/* 
 showing achievment of by us and looking for another ,
 adding an animation
*/}
       <div className=" rounded-md mr-20 px-5 text-4xl py-10  ">
     
        

        <div className="">
         2024 & so on.
          </div>

          <div className="pt-5">
            < Link to='/productpage'>
            <button className='hover:text-white hover:bg-gray-400'>
              Exporal
            </button>
            </Link>
          </div>
       </div>
   </div>
    </>
  )
}

export default AdsSections