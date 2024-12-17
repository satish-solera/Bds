import React from 'react'
import { Link } from 'react-router-dom'
import WorksWithClients from './WorksWithClients'
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";

function Footer() {
  return (
    <>
    <div className="main-footer bg-gray-400 w-[100%] h-[20rem] mt-14 flex justify-between">
      <div className="div-left mt-10 ml-5">
        <div className="social-media">
          <div className="text-2xl">
          BDS on social media
          </div>
          <div className="flex flex-col mt-3">
            <span className=''>
          <  SlSocialInstagram className='h-5 w-5'/>
            </span>
            <span  className=''>
              x
            </span>
            <span className=''>
            <TiSocialYoutube className='h-7 w-5'/>
            </span>
          </div>
        </div>
      </div>

      <div className="div-right mr-[10rem] flex justify-around gap-10 text-xl mt-5">
        <div className="first-section space-y-2">
         <Link to='/adspage'>
         <h1>
            Poster Ads

          </h1>
         </Link>
          < Link to='/adspage'>
          <h1>
            Business Ads
          </h1>
          </Link>
          <Link to='/adspage'>
          <h1>
            Ads Templates
          </h1>
          </Link>
          
        </div>

        <div className="second-section space-y-2">
       <Link to='/productpage'>
       <h1>
            Exporal Designs
          </h1>
       </Link>
          <Link to='/adspage'>
          <h1>
            Design Works
          </h1>
          </Link>
          <Link to=''>
          <h1>
           Clients
          </h1>
          </Link>
         <Link to='/aboutpage'>
         <h1>
           Developers
          </h1>
         </Link>
          < Link to=''>
          <h1>
           Career
          </h1>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer