import React from "react";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from  'axios'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your_publishable_key"); // Replace with your actual publishable key

import Payment from "../components/Payment";
function CartPage() {


  const [cartProduct, setCartProduct] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // here i set this false
  const [isCheck, setIsCheck] = useState(false);
  const [payemntIsVisible, setPaymentIsVisible] = useState(false);
  const togglePayemnt = () => setPaymentIsVisible(!payemntIsVisible);
  const toggleVisibility = () => setIsVisible(!isVisible); // 1 ==> this is !false== true
  const check = () => setIsCheck(isCheck);
 

  useEffect(()=>{
    const cartData = async() =>{
      try {
        const response = await axios.get('http://localhost:8000/api/ads/adstype');
        console.log(response.data)
        setCartProduct(response.data)
      } catch (error) {
        console.log(error)
      }
    }
cartData()
  } , [])
  return (
    <>
      <div className="main-div mt-5 ">
        <div className="">
          <div className=" flex flex-col justify-center items-center w-auto h-[15rem]">
            <div className="cart-products   p-5 border border-black m-5 rounded-md w-[30rem] h-[20rem] bg-orange-300 text-black">
              <div className="flex flex-col gap-y-2 mb-2 py-9">
                {cartProduct.length > 0 ? (
                  <div className="flex flex-col gap-y-2">
                    {
                      // cartProduct.map((cartdata)=>{
                      //   return <div className="">
                      //     {
                      //       cartdata.adsLike
                      //     }
                      //   </div>
                      // })
                    }
                    <Link to="">
                      <button className="p-2" onClick={toggleVisibility}>
                        Open Cart
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-y-2">
                    <button className="p-2">Exprole Products</button>
                    <button className="p-2">Add Your Paym ent Method</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          {cartProduct.map((cartdata) => {
            return (
              <div className={`${isVisible ? "block" : "hidden"}`}>
                <input type="checkbox" onClick={check} />
                <h1>{cartdata.id}</h1>

                <h1>{cartdata.nameOfProduct}</h1>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-5">
          <button onClick={togglePayemnt}>Buy Product</button>
        </div>

        <div className={`${payemntIsVisible ? "block" : "hidden"} `}>
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        </div>
      </div>
    </>
  );
}

export default CartPage;
