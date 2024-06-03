import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx'
import DashboardPage from './pages/DashboardPage.jsx';
import LoginPage from './pages/LoginPage.jsx'
import OrderForm from './components/order/OrderForm.jsx';

const initialOrders = [
  {
    source: "Whatsapp",
    name: "John Doe",
    phone: "123456789",
    email: "john@example.com",
    quantity: 2,
    notes: "Some notes"
  },
  {
    source: "Whatsapp",
    name: "John Doe",
    phone: "123456789",
    email: "john@example.com",
    quantity: 2,
    notes: "Some notes"
  },
];

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <DashboardPage orders={initialOrders}/>
      },
      {
        path: 'login',
        element: <LoginPage/>
      },
      {
        path: 'order-form',
        element: <OrderForm/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
