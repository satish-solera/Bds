require("dotenv").config();

const Stripe = require("stripe")(process.env.stripeSecret);

const ads = require("../models/ads.models");
const createPayment = async (adsProduct) => {
  try {
  
    const adsFound = await ads.findById(objectId);
    console.log(adsFound);
    if (!adsFound) {
      throw new Error("ads not found");
    }

    const paymentIntent = await Stripe.paymentIntents.create({
      amount: adsFound.price,
      currency: adsFound.currency,
    });

    console.log(paymentIntent);
    return paymentIntent.client_secret;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = createPayment;
