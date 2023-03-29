import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PageNotFound from "../Pages/PageNotFound";
import ContactUs from "../Pages/ContactUs";
import Audio from "../Pages/Audio";
import Cameras from "../Pages/Cameras";
import CheckOut from "../Pages/CheckOut";
import Cart from "../Pages/Cart";
import HomeAppliances from "../Pages/HomeAppliances";
import KitchenAppliances from "../Pages/KitchenAppliances";
import MobileandTablet from "../Pages/MobileandTablet";
import PersonalCare from "../Pages/PersonalCare";
import SignUp from "../Pages/SignUp";
import Televisions from "../Pages/Televisions";
import Singleproduct from "../Pages/Singleproduct";
import Accessories from "../Pages/Accessories";

import PrivateRoutes from "./PrivateRoutes";

function AllRoutes() {

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mobileandtablet" element={<MobileandTablet />} />
        <Route path="/televisions" element={<Televisions />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/homeappliances" element={<HomeAppliances />} />
        <Route path="/computers" element={<ContactUs />} />
        <Route path="/cameras" element={<Cameras />} />
        <Route path="/kitchenappliances" element={<KitchenAppliances />} />
        <Route path="/personalcare" element={<PersonalCare />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/singleproductpage" element={<Singleproduct />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
