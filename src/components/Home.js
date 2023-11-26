import React, { useEffect } from "react"
import HeroPage from "./HeroPage"
import Categories from "./Categories"
import HomeProducts from "./HomeProducts"
import Offers from "./Offers"
import Aboutus from "./Aboutus"
import { useDispatch } from "react-redux"
import { getProductsData } from "../redux/actions/actions"
function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("https://ecomerce-api-8lpr.onrender.com/products").then((responce) => {
      responce.json().then((results) => {
        dispatch(getProductsData(results));
      });
    });
  }, [dispatch]);
  return (
    <div className="home-container">
      <HeroPage/>
      <Categories/>
      <HomeProducts/>
      <Offers/>
      <Aboutus/>
    </div>
  )
}

export default Home