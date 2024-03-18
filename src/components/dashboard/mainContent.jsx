import { Routes, Route } from "react-router-dom";
import Products from "./products"
import Orders from "./orders"
import Sales from "./sales"
import Customers from "./customers"

const MainContent = () => {
  return (
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="sales" element={<Sales />} />
        <Route path="customers" element={<Customers />} />
      </Routes>
    
  )
}

export default MainContent