import React from 'react'
import {delay, easeIn, motion } from 'framer-motion'

function CompanyNameAni() {
  const words = ["Poster Ads"  , "Business Ads" , "jwellery Ads"];
  const variants = {
    animate: {
        x: ['-100%', '100%'], // Move from left to right
        transition: {
          delay : 2,
            duration: 10, // Duration for the full animation
            easeIn: 'linear',
            repeat: Infinity, // Repeat the animation indefinitely
        },
    },
};
  return (
    <>
    
    <div className="main-ads flex gap-2 text-center mt-10">
      <div className="text-6xl">
       BDS
      </div>


      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '2rem', display: 'flex' }} className='mt-5'>
            <motion.div
                style={{ display: 'flex' }}
                variants={variants}
                animate="animate"
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        style={{ margin: '0 20px' }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    </div>
    </>
  )
}

export default CompanyNameAni