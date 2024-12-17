const { Schema, model } = require("mongoose");

const ads = new Schema([
  {
    nameOfAds: {
      type: String,
      required: true,
    },

    adsImgUrl: {
      type: String,
      required: true,
    },

    adsInfo: {
      type: String,
      required: true,
    },

    adsType: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      default: 0,
      required: true,
    },
    

    adsLike: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    discountedPrice: {
      type: Number,
      default: 0,
    },
  },
]);

module.exports = model("Ads", ads);
