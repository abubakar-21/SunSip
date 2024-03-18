// import logo from '../../assets/images/logo.png'
import { dashboard, products, sales, orders, customers, category } from '../../../public/icons/icons.js';
import Image from "next/image";

const Sidebar = ({ setSelectedComponent }) => {

  return (

  <>
  
    <div className="bg-[#FAFCFE] w-[250px] h-screen fixed top-[80px] left-0 flex flex-col">
      <div className="top-content">

          {/* Dashboard */}
        <div className="flex justify-start">
          <Image src={dashboard} alt="Dashboard" className="ml-[16px] mt-[60px]" />
          <p className="text-[18px] font-semibold ml-[10px] mt-[60px]">Dashboard</p>
        </div>

        {/* products */}
        <div onClick={() => setSelectedComponent('products')} className="flex justify-start cursor-pointer">
          <Image src={products} alt="Products" className="ml-[40px] mt-[25px]" />
          <p className="text-[15px] font-semibold ml-[21px] mt-[25px]">Products</p>
        </div>

        {/* Sales */}
        <div onClick={() => setSelectedComponent('orders')} className="flex justify-start cursor-pointer">
          <Image src={orders} alt="Sales" className="ml-[40px] mt-[25px]" />
          <p className="text-[15px] font-semibold ml-[21px] mt-[25px]">Orders</p>
        </div>

        {/* Orders */}
        <div onClick={() => setSelectedComponent('sales')} className="flex justify-start cursor-pointer">
          <Image src={sales} alt="Sales" className="ml-[40px] mt-[25px]" />
          <p className="text-[15px] font-semibold ml-[21px] mt-[25px]">Sales</p>
        </div>

        {/* customers */}
        <div onClick={() => setSelectedComponent('customers')} className="flex justify-start cursor-pointer">
          <Image src={customers} alt="Sales" className="ml-[40px] mt-[25px]" />
          <p className="text-[15px] font-semibold ml-[21px] mt-[25px]">Customers</p>
        </div>

        {/* Categories */}
        <div onClick={() => setSelectedComponent('categories')} className="flex justify-start cursor-pointer">
          <Image src={category} alt="Categories" className="ml-[40px] mt-[25px]" />
          <p className="text-[15px] font-semibold ml-[21px] mt-[25px]">Categories</p>
        </div>

      </div>

      {/* Settings */}
      {/* <div className="bottom-content">  
        <div className="flex justify-start">
          <Image src={settings} alt="Settings" className="ml-[16px] mt-auto mb-auto" />
          <p className="text-[16px] font-semibold ml-[10px] mt-auto mb-auto">Settings</p>
        </div>
      </div> */}

    </div>
  
  </>

  )
}

export default Sidebar