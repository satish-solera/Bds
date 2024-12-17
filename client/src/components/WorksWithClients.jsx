import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function WorksWithClients() {
  const words = [
    "BKT",
    "KFN",
    "BDS WINE SHOP",
    "Anna's Shop",
    " PMC Jwellery",
  ];
  const variants = {
    animate: {
      x: ["100%", "-100%"], // Move from right to left
      transition: {
        duration: 10, // Duration for the full animation
        ease: "linear",
        repeat: Infinity, // Repeat the animation indefinitely
      },
    },
  };
  return (
    <>
      <div className="main-work text-center mt-16">
        <div className="working-with">
          <div className="text-4xl">
            It's our pleasure to work with various kind of working sites.
          </div>

          {/* <div className="flex gap-4 text-center bg-orange-300 h-[5rem]"> */}
          <div
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              fontSize: "2rem",
              display: "flex",
            }}
          >
            <motion.div
              style={{ display: "flex" }}
              variants={variants}
              animate="animate"
            >
              {words.map((word, index) => (
                <motion.span key={index} style={{ margin: "0 20px" }}>
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
          {/* </div> */}

          <div className="my-5 h-[5rem] ">
            <Link to="/productPage">
              <button className="hover:text-black hover:bg-white hover:border hover:border-black p-3">
                Book Your Design
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorksWithClients;
