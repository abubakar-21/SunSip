import AddProductCard from "./addProductCard.jsx";
import ProductsCard from "./productsCard.jsx";
import { addCircle } from '../../../public/icons/icons.js';
import { useState } from "react";
import Image from "next/image";

const Products = () => {
    // const handleImageUpload = (files) => {
    //     console.log('Uploaded files:', files);
    //     console.log(files.name);
    //   };

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
  
    return (
      <div className="main-content flex ml-[250px] flex-col flex-1 min-h-screen min-w-screen bg-[#F3F5F9]">
        {/* adding products card */}
        
        {/* <div className="add-product flex flex-col items-center justify-center h-[200px] w-full mt-[80px] bg-[#e5e9f3]">
            <img src={addCircle} alt="addProduct" className="cursor-pointer " />
            <p className="mt-5 text-lg">Add Product</p>
        </div> */}
        <div className="add-product flex flex-col items-center justify-center h-[200px] w-full mt-[80px] bg-[#e5e9f3]">
        <Image
          src={addCircle}
          alt="addProduct"
          className="cursor-pointer"
          onClick={togglePopup}
        />
        <p className="mt-5 text-lg">Add Product</p>
      </div>
      {showPopup && <AddProductCard onClose={togglePopup} />}
        {/* <AddProductCard /> */}
        
        {/* products card */}
        <p className="ml-[50px] p-[12] mt-[30px]">Products</p>
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
    );
  }
  
  export default Products;
  

// import AddProductCard from "./addProductCard.jsx";
// import ProductsCard from "./productsCard.jsx";
// import { addCircle } from "../../assets/icons/icons.js";

// const Products = () => {
//     return (
//         <div className="main-content flex ml-[250px] flex-col flex-1 min-h-screen min-w-screen bg-[#F3F5F9]">
//             {/* adding products card */}
//             <div className="add-product flex flex-col items-center justify-center h-[200px] w-full mt-[80px] bg-[#e5e9f3]">
//                 <img src={addCircle} alt="addProduct" className="cursor-pointer " />
//                 <p className="mt-5 text-lg">Add Product</p>
//             </div>
//             {/* <AddProductCard /> */}
  
//             {/* products card */}
//             <p className="ml-[20px] mt-[20px] mb-[10px] text-lg font-semibold">Products</p>
//             <ProductsCard />
//             <ProductsCard />
//             <ProductsCard />
//             <ProductsCard />
//             <ProductsCard />
//             <ProductsCard />
//         </div>
//     );
// }

// export default Products;
