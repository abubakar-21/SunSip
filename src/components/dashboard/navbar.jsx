import { menu } from '../../../public/icons/icons.js';
import { logo } from '../../../public/images/images.js';
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-[#FAFCFE] w-screen h-[80px] fixed flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <Image
          src={logo}
          alt="Logo"
          className="w-[95px] h-[65px]"
        />
      </div>

      {/* Dashboard Text */}
      <div className="flex items-center">
        <p className="text-[28px] font-semibold mt-[16px] mb-[16px]">Dashboard</p>
      </div>

      {/* Menu Icon */}
      <div className="flex items-center justify-center w-[105px]">
        <Image
          src={menu}
          alt="Menu Icon"
          className="w-[30px] h-[30px]"
        />
      </div>
    </div>
  )
}

export default Navbar