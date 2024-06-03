import React, { useState } from "react";

const OrderForm = ({ addOrder }) => {
  const [order, setOrder] = useState({
    source: "Whatsapp",
    name: "",
    phone: "",
    email: "",
    quantity: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder(order);
    setOrder({
      source: "Whatsapp",
      name: "",
      phone: "",
      email: "",
      quantity: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700">Sumber Pesanan:</label>
        <select
          name="source"
          value={order.source}
          onChange={handleChange}
          className="mt-2 p-2 border rounded w-full"
        >
          <option value="Whatsapp">Whatsapp</option>
          <option value="Call">Call</option>
          <option value="Email">Email</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Nama:</label>
        <input
          type="text"
          name="name"
          value={order.name}
          onChange={handleChange}
          required
          className="mt-2 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Nomer Telephone:</label>
        <input
          type="text"
          name="phone"
          value={order.phone}
          onChange={handleChange}
          required
          className="mt-2 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={order.email}
          onChange={handleChange}
          className="mt-2 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Jumlah Roti:</label>
        <input
          type="number"
          name="quantity"
          value={order.quantity}
          onChange={handleChange}
          required
          className="mt-2 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Notes:</label>
        <textarea
          name="notes"
          value={order.notes}
          onChange={handleChange}
          className="mt-2 p-2 border rounded w-full"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
      >
        Add Order
      </button>
    </form>
  );
};

export default OrderForm;
