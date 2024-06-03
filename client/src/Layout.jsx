import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const Layout = () => {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate(false)

  const addOrder = (order) => {
    setOrders([...orders, order])
  }
  return (
    <>
      <Navbar />
      <Outlet orders={orders} addOrder={addOrder} />
    </>
  );
};

export default Layout;
