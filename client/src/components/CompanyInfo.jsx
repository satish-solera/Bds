import React from "react";
import { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";

import st from "../assests/st.jpg";
import st1 from "../assests/pp.jpg";

function CompanyInfo() {
  const images = [st, st1];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-[100%] h-[30rem] mt-16 flex justify-between">
        <div className="info ml-5 w-[40%] text-4xl mt-[5rem]">
          BDS devlopers alwayes doing work for customer satisfaction.
          <br />
          <br />
          Life @BDS
        </div>

        <div className="photo-of-comapny  w-[60%] mr-5">
          <div className="relative w-full max-w-xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`} // slide is name before the every slides of img
                className="w-full transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
              <button
                className="bg-white text-black rounded-md p-1 shadow-md -ml-4 border border-black"
                onClick={() =>
                  setCurrentIndex(
                    (prevIndex) =>
                      (prevIndex - 1 + images.length) % images.length // modulo operator do work like 3 % 3 ===> 0 (means if last index comes that it did it zero for firxt img)
                  )
                }
              >
                back
              </button>
              <button
                className="bg-white text-black rounded-md p-1 shadow-md -mr-4 border border-black"
                onClick={() =>
                  setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % images.length
                  )
                }
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyInfo;
