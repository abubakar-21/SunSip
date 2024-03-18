"use client";
import { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Products from './products';
import Orders from './orders';
import Sales from './sales';
import Customers from './customers';
import Category from './categories';

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('products');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'products':
        return <Products />;
      case 'orders':
        return <Orders />;
      case 'sales':
        return <Sales />;
      case 'customers':
        return <Customers />;
      case 'categories':
        return <Category />;
      default:
        return <Products />;
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar setSelectedComponent={setSelectedComponent} />
      {renderComponent()}
    </>
  );
};

export default Dashboard;
