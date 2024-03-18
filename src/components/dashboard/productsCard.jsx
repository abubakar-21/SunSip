import { hardSeltzer } from '../../../public/images/images.js';
import { edit, delete1 } from '../../../public/icons/icons.js';
import Image from "next/image";

const Products = () => {
  return (
    <div className="productsCard">
            {/* <p className="ml-[50px] ">Products</p> */}
            <div className="products h-[100px] w-[940px] rounded-[10px] bg-[#E8EEFA] flex-shrink-0 ml-[50px] mt-[21px] mb-[21px] flex justify-center items-center">
            <Image src={hardSeltzer} alt="" className="w-16 h-16 ml-[10px]" />
            <div className="cardInfo flex justify-evenly items-center ml-[60px]">
              <p className="">Hard Zelter</p>
              <p className="ml-[50px]">wholeSale: $250</p>
              <p className="ml-[50px]">discount: 5%</p>
              <p className="ml-[50px]">price: $21</p>
              <a href="" target="_blank" className="ml-[180px]"><Image src={edit} alt="" /></a>
              <a href="" target="_blank" className="ml-[50px]"><Image src={delete1} alt=""/></a>
            </div>
            </div>
        </div>
  )
}

export default Products