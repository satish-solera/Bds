import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Products() {
  const [img, setImg] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const responce = await axios.get(
          "http://localhost:8000/api/ads/adstype"
        );
        if (Array.isArray(responce.data)) {
          setImg(responce.data);
          setInfo(responce.data);
        }
      } catch (error) {
        new Error(error);
      }
    };
    dataFetch();
  }, []);

  const onlyFourImg = img.slice(0, 4);
  const onlyTwoInfo = info.slice(0, 2);

  return (
    <>
      <div className="main-product-div  mt-10 space-y-2  items-center mx-20 ">
        <div className="flex gap-2">
          <div className="div-1 w-[20rem] h-[20rem] bg-gray-200 ml-16">
            <div className="translate-y-[25rem] text-2xl">
              {onlyTwoInfo[0] && <h1>{onlyTwoInfo[0].adsInfo}</h1>}
            </div>
            {onlyFourImg[0] && (
              <div>
                <img
                  src={onlyFourImg[0].adsImgUrl}
                  alt="img1"
                  // style={{ width: "100%" }}
                />
              </div>
            )}
          </div>

          <div className="div-2 w-[40rem] h-[40rem] bg-orange-200 mr-5">
            {onlyFourImg[1] && (
              <div>
                <img
                  src={onlyFourImg[1].adsImgUrl}
                  alt="img2"
                  // style={{ width: "100%" }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <div className="div-2 w-[40rem] h-[20rem] bg-orange-200 ml-5">
            {onlyFourImg[2] && (
              <div>
                <img
                  src={onlyFourImg[2].adsImgUrl}
                  alt="img3"
                  // style={{ width: "100%" }}
                />
              </div>
            )}
            <div className="translate-y-[20rem] text-2xl">
              {onlyTwoInfo[1] && <h1>{onlyTwoInfo[1].adsInfo}</h1>}
            </div>
          </div>

          <div className="div-1 w-[20rem] h-[30rem] bg-gray-200">
            {onlyFourImg[3] && (
              <div>
                <img
                  src={onlyFourImg[3].adsImgUrl}
                  alt="img4"
                  // style={{ width: "100%" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
