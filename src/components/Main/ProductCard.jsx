import productImage from "../../../public/images/beer.png";
import addToCartIcon from "../../../public/icons/add_shopping_cart.png";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="shadow-[1px_2px_2.1px_-1px_rgba(0,0,0,0.25)] inline-block bg-[#F3F5F9] p-2 mt-3 ml-[20px]">
      <Image src={productImage} alt="Product image" />
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-[10px]">Product Name</h4>
          <p className="text-[10px]">Product Price</p>
        </div>
        <button>
          <Image
            className="w-[20px] h-[20px]"
            src={addToCartIcon}
            alt="Add to cart icon"
          />
        </button>
      </div>
    </div>
  );
}
