import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Global Components/Navbar";
import CommingSoon from "../components/Global Components/CommingSoon";

const Home = () => {
  return (
    <div>
      <CommingSoon />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
