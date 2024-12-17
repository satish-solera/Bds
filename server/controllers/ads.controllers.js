const express = require("express");
const ads = require("../models/ads.models");

const adsShow = async (req, res, next) => {
  try {
    const id = await ads._id;
    const adsData = await ads.find({
      id,
    });

    

    res.json(adsData);
  } catch (err) {
    next(err);
  }
};

const adsType = async (req, res, next) => {
  try {
    const adsTypeData = await ads.find();
    res.json(adsTypeData);
  } catch (error) {
    next(error);
  }
};

const searchIteam = async (req, res, next) => {
  const { query } = req.query; // Get the search query from the URL parameters

  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  try {
    // Use regex to perform a case-insensitive search on name and description
    const items = await ads.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Search in name
        { description: { $regex: query, $options: "i" } }, // Search in description
      ],
    });

    res.json(items); // Send the found items as response
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const posterAds = async (req, res, next) => {
  try {
    // todos in posterAds controller
    // finding data from db like name , info , price etc

    const aggragteForPosterAds = [
      {
        $match: {
          " nameOfAds ": "poster-ads",
        },
      },
    ];

    const posterAdsFound = await ads.aggregate(aggragteForPosterAds);
 
    // showing like for this product

    if (posterAdsFound.length > 0) {
      var likeCount = posterAdsFound
        .filter((ads) => ads.adsLike)
        .map((ads) => ads.adsLike);
    }
    // res.json(likeCount);
    // // console.log(likeCount)

    // creating a discount top ads
    if (posterAdsFound.length > 0) {
      // filtering data for searching which poster-ads have discount property
      const discountFilter = posterAdsFound.filter(
        (ads) => ads.discount > 0 || ads.price > 0
      );

      // mapping data for filtered data (with the help of this we getting the actully discount value for poster ads)
      const valuesOfAds = discountFilter.map((ads) => {
        return {
          discount: ads.discount,
          price: ads.price,
        };
      });

      // console.log(discountFilter)
      // console.log(valuesOfAds);

      // checking a current poster-ads contain both value for getting a discount price
      var discountedPrice = valuesOfAds
        .filter((ads) => ads.price > 0 && ads.discount > 0)
        .map((ads) => {
          return (ads.price * ads.discount) / 100;
        });
    }
    // sending poster ads which is newly in data base using sort aggragation
    // sending json
    const valuesArray = Object.values(
      posterAdsFound,
      likeCount,
      discountedPrice
    );
    res.status(200).json(valuesArray);
  } catch (error) {
    next(error);
  }
};

const businessAds = async (req, res, next) => {
  try {
    // todos in businessAds controller
    //finding top business ads that have designes for company that allerady used by other company

    const aggragateForBusinessAds = [
      {
        $match: {
          " nameOfAds ": "business-ads",
        },
      },
    ];

    const businessAdsFound = await ads.aggregate(aggragateForBusinessAds);

    // sending a price on the basbis of adsLike
    // logic for increasing price on the basis of likes

    // if likes are greater than 20 then simply multiply original value by * 2
    // if like are greater than 40 then simply multiply original value by * 4

    // calculating a value
    const increasedPrice = businessAdsFound.map((ads) => {
      if (ads.adsLike > 40) {
        return ads.price * 4;
      } else if (ads.Like > 20) {
        return ads.price * 2;
      } else {
        return ads.price;
      }
    });

    const valuesArray = Object.values(businessAdsFound, increasedPrice);
    res.status(200).json(valuesArray);
  } catch (error) {
    next(error);
  }
};

const jwelleryAds = async (req, res, next) => {
  // todos in jwelleryAds controller

  // finding best jwellery ads for top jwellery shopes
  const aggragateForJwelleryAds = [
    {
      $match: {
        " nameOfAds ": "jwellery-ads",
      },
    },
  ];

  const jwelleryAdsFound = await ads.aggregate(aggragateForJwelleryAds);

  res.status(200).json(jwelleryAdsFound);
};

const commercialAds = async (req, res, next) => {
  // todos in commercialAds controller
  // sending commercial ads that used by another top commercial comapny
  const aggregateForCommercial = [
    {
      $match: {
        " nameOfAds ": "commercial-ads",
      },
    },
  ];

  const commercialAdsFound = await ads.aggregate(aggregateForCommercial);

  // taking price alwayes greater than previos price value
  // logic ==> if user has allerady bought something commercial ads then upgrade the price
  // suppose user bougth the commercial ads
  const userBougthAds = 2;
  if (userBougthAds > 1) {
    var upgradedValue = commercialAdsFound.map((ads) => {
      return ads.price + userBougthAds * 10;
    });
  }

  const array = Object.values(commercialAdsFound, upgradedValue);
  res.status(200).json(array);
};

const cart = (req , res , next) =>{
  res.send('this is cart with protected route')
}
module.exports = {
  adsShow,
  adsType,
  posterAds,
  businessAds,
  jwelleryAds,
  commercialAds,
  searchIteam,
  cart
};
