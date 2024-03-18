"use client"
import { AddToCart } from "./AddToCart";
import { beer } from "../../../public/images/images.js";
import { useState } from "react";
import Image from "next/image";

export default function ProductView({
  productImage,
  productTitle,
  productDescreption,
  productPrice,
  productInformation,
  productIngredients,
}) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showProductInformation, setShowProductInformation] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="max-w-[400px]">
          <Image src={beer} alt="Product" />
          {productImage}
        </div>
        <div className="max-w-[400px] pt-3">
          <h3 className="font-medium text-[20px]">{productTitle}</h3>
          <p className="text-[#C61802] text-[18px]  font-medium">
            {productPrice}
          </p>
          <AddToCart setQuantity={setQuantity} quantity={quantity} />
          <p className="text-[#121212BF] text-[18px] mt-2">
            {productDescreption}
          </p>
          <div className="mt-[15px]">
            <div className="border-solid border-t-[1px] border-b-[1px] border-[#121212BF] py-[2px] text-[16px]">
              <div
                onClick={() => setShowIngredients(!showIngredients)}
                className="flex justify-between font-medium"
              >
                <p>Ingredients</p>
                <p>\/</p>
              </div>
              <p className={showIngredients ? "py-1" : "hidden"}>
                {productIngredients}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                inventore. Voluptatem rerum minima reiciendis repellendus.
              </p>
            </div>
            <div className="border-solid border-b-[1px] border-[#121212BF] py-[2px] text-[16px]">
              <div
                onClick={() =>
                  setShowProductInformation(!showProductInformation)
                }
                className="flex justify-between font-medium"
              >
                <p>Product information</p>
                <p>\/</p>
              </div>
              <p className={showProductInformation ? "py-1" : "hidden"}>
                {productInformation}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                inventore. Voluptatem rerum minima reiciendis repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
