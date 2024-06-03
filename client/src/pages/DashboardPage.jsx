import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import OrderCard from '../components/order/OrderCard';

const DashboardPage = ({orders}) => {
  const navigate = useNavigate()


  const orderSources = orders.reduce((acc, order) => {
    acc[order.source] = (acc[order.source] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <div className='container mx-auto p-4'>

        <h2 className='text-2xl font-bold mb-4'>order dashboard</h2>
        <div>
        <p>Whatsapp:{orderSources.Whatsapp || 0} </p>
        <p>Call: {orderSources.Call || 0}</p>
        <p>Email: {orderSources.Email || 0} </p>
        </div>
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        onClick={() => {
          navigate('/order-form')
        }}
        >Add Order</button>
        <table className='min-w-full bg-white rounded-lg shadow-lg overflow-hidden'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>name</th>
              <th className='py-2 px-4 border-b'>sunber</th>
              <th className='py-2 px-4 border-b'>email</th>
              <th className='py-2 px-4 border-b'>telephone</th>
              <th className='py-2 px-4 border-b'>jumlah</th>
              <th className='py-2 px-4 border-b'>notes</th>
            </tr>
          </thead>
          <tbody>
          {orders.map((order, index) => (
            <tr className='py-2 px-4 border-b' key={index}>
              <td className='py-2 px-4 border-b'>{order.name}</td>
              <td className='py-2 px-4 border-b'>{order.source}</td>
              <td className='py-2 px-4 border-b'>{order.email}</td>
              <td className='py-2 px-4 border-b'>{order.phone}</td>
              <td className='py-2 px-4 border-b'>{order.quantity}</td>
              <td className='py-2 px-4 border-b'>{order.notes}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DashboardPage