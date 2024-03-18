import AddCategory from "./AddCategoryPopUp.jsx";
import { addCircle } from '../../../public/icons/icons.js';
import { useState } from "react";
import Image from "next/image";

const Category = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
  return (
    <>
        <div className="categories flex ml-[250px] flex-col flex-1 min-h-screen min-w-screen bg-[#F3F5F9]">
            <div className="add-product flex flex-col items-center justify-center h-[200px] w-full mt-[80px] bg-[#e5e9f3]">
                <Image
                src={addCircle}
                alt="addProduct"
                className="cursor-pointer"
                onClick={togglePopup}
                />
                <p className="mt-5 text-lg">Add Category</p>
            </div>
            {showPopup && <AddCategory onClose={togglePopup} />}

            <p className="ml-[50px] p-[12] mt-[50px]">Categories</p>
        </div>
    </>
  )
}

export default Category