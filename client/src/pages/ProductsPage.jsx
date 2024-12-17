import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import AdsProducts from "../components/AdsProducts";

import st from "../assests/st.jpg";

function Products() {
  const [posterAds, setPosterAds] = useState([]);
  const [ads, setAds] = useState([]);

  const [businessAds, setBusinessAds] = useState([]);
  const [jwelleryAds, setJwelleryAds] = useState([]);
  const [commercialAds, setCommercialAds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          response,
          responseBusiness,
          responsePoster,
          responseJwellery,
          responseCommercial,
        ] = await Promise.all([
          axios.get("http://localhost:8000/api/ads/adstype"),
          axios.get("http://localhost:8000/api/ads/adstype/businessads"),
          axios.get("http://localhost:8000/api/ads/adstype/posterads"),
          axios.get("http://localhost:8000/api/ads/adstype/jwelleryads"),
          axios.get("http://localhost:8000/api/ads/adstype/commercialads"),
        ]);

        const adsResponse = response.data;
        const businessAdsResponse = responseBusiness.data;
        const posterAdsResponse = responsePoster.data;
        const jwelleryAdsResponse = responseJwellery.data;
        const commercialAdsResponce = responseCommercial.data;

        if (
          Array.isArray(
            businessAdsResponse &&
              adsResponse &&
              posterAdsResponse &&
              jwelleryAdsResponse &&
              commercialAdsResponce
          )
        ) {
          setBusinessAds(businessAdsResponse);
          setAds(adsResponse);
          setPosterAds(posterAdsResponse);
          setJwelleryAds(jwelleryAdsResponse);
          setCommercialAds(commercialAdsResponce);
        }
      } catch (error) {
        console.log("error fetching", error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="main-product-page  ">
        <div className="upper-div">
          <AdsProducts />
        </div>

        <div className="middle-div  mt-10 flex justify-between">
          <div className="type-ads flex flex-col gap-y-2">
            <div className="w-[10rem] p-2 h-fit bg-black text-white">
              Business Ads
            </div>
            <div className="w-[10rem] p-2 h-fit bg-black text-white">
              Poster Ads
            </div>
            <div className="w-[10rem] p-2 h-fit bg-black text-white">
              Jwellery Ads
            </div>
            <div className="w-[10rem] p-2 h-fit bg-black text-white">
              Commercial Ads
            </div>
          </div>

          <div className="business-ads-animaton  ml-[2rem] mr-[5rem] flex gap-5">
            <div
              className="business-ads bg-orange-500 w-[15rem] h-[20rem] bg-cover bg-center  "
              style={{ backgroundImage: `url(${st})` }}
            >
              business-ads
            </div>
            <div className="business-ads bg-orange-500 w-[15rem] h-[20rem] ">
              poster-ads
            </div>
            <div className="business-ads bg-orange-500 w-[15rem] h-[20rem]">
              Jwellery-ads
            </div>
            <div className="business-ads bg-orange-500 w-[15rem] h-[20rem]">
              commercial-ads
            </div>
          </div>
        </div>
        {/* 
create a logic like when user scroll down and down that time all ads demo can be show
*/}


        <div className="poster-ads mt-10 ">
          <div className="poster-ads-info text-2xl font-semibold text-center">
            <h1>Poster Designes Is Used For Fast Ad Strategy</h1>
          </div>
          <div className="">
            {posterAds.length > 0 ? (
              <div className="flex justify-center mt-10 mx-5 flex-wrap">
                {posterAds.map((data) => {
                  return (
                    <div className=" max-w-sm rounded overflow-hidden shadow-lg m-4">
                      <img
                        className="w-full h-48 object-cover"
                        src={data.adsImgUrl}
                        alt={data.nameofAds}
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {data.nameofAds}
                        </div>
                        <p className="text-gray-700 text-base">
                          {data.adsInfo}
                        </p>
                      </div>
                      {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {category}
            </span>
        </div> */}
                    </div>
                  );
                })}
              </div>
            ) : (
              <h1>you dont have any ads products</h1>
            )}
          </div>
        </div>

        <div className="business-ads mt-10 ">
          <div className="business-ads-info text-2xl font-semibold text-center">
            <h1>Business Designes Is Used For Building Brand Image</h1>
          </div>
          {businessAds.length > 0 ? (
            <div className="flex justify-center mx-5 mt-10 flex-wrap">
              {businessAds.map((data) => {
                return (
                  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105">
                    <img
                      className="w-full h-60 object-cover"
                      src={data.adsImgUrl}
                      alt={data.nameofAds}
                    />
                    <div className="bg-white p-4">
                      <div className="font-bold text-xl mb-2 text-blue-600">
                        {data.nameofAds}
                      </div>
                      <p className="text-gray-600 text-base mb-4">
                        {data.adsInfo}
                      </p>
                      {/* <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-white text-sm font-semibold">
                          {category}
                      </span> */}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1>you dont have ads products</h1>
          )}
        </div>

        <div className="commercial-ads mt-10 ">
          <div className="commercial-ads-info text-2xl font-semibold text-center">
            <h1>Commercial Designes Is Used For Lookes Of Professional</h1>
          </div>
          {commercialAds.length > 0 ? (
            <div className="flex flex-wrap justify-center mt-10">
              {commercialAds.map((data) => {
                return (
                  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white transition-transform transform hover:scale-105">
                    <img
                      className="w-full h-48 object-cover"
                      src={data.adsImgUrl}
                      alt={data.nameofAds}
                    />
                    <div className="p-6">
                      <h2 className="font-bold text-2xl mb-2 text-gray-800">
                        {data.nameofAds}
                      </h2>
                      <p className="text-gray-600 text-base mb-4">
                        {data.adsInfo}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1>you dont have any products</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
