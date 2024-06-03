import React from "react";

const OrderCard = ({order}) => {
  return (
    <>
      <div className="bg-white p-4 m-2 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">{order.name}</h3>
        <p>Source: {order.source}</p>
        <p>Email: {order.email}</p>
        <p>Phone: {order.phone}</p>
        <p>Quantity: {order.quantity}</p>
        <p>Notes: {order.notes}</p>
      </div>
    </>
  );
};

export default OrderCard;
