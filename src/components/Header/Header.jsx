"use client"
import DrinkNav from "./DrinkNav";
import MenuNav from "./MenuNav";
import Image from "next/image";

import { useState } from "react";

import {
  logo,
  beer,
  cannedCocktail,
  greatValue,
  hardSeltzer,
  liquor,
  mixersNmore,
  wine,
  zeroProof,
} from "../../../public/images/images";

import {
  menuIconMobile,
  searchMobile,
  shoppingCartMobile,
} from "../../../public/icons/icons.js";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);

  function handleClick(event) {
    const clickedElement = event.target.id;

    switch (clickedElement) {
      case "menu_icon":
        setMenu(!menu);
        setSearch(false);
        setCart(false);
        break;
      case "search_icon":
        setSearch(!search);
        setMenu(false);
        setCart(false);
        break;
      case "cart_icon":
        setCart(!cart);
        setMenu(false);
        setSearch(false);
    }
  }

  return (
    <header className="flex flex-col">
      <nav className="flex justify-between items-center px-2 lg:px-7">
        <button className="sm:hidden" onClick={handleClick}>
          <Image id="menu_icon" src={menuIconMobile} alt="Menu icon" />
        </button>
        <button className="sm:order-1">
          <Image src={logo} alt="Sunsip logo" />
        </button>
        <div className="hidden order-2 bg-[#FAFCFE] shadow-[0_0_2.1px_0_rgba(0,0,0,0.25)] rounded-[16px] sm:flex items-center justify-between p-2 w-[250px] md:w-[350px]">
          <input
            className="outline-none w-full"
            type="text"
            placeholder="search"
          />
          <button>
            <Image id="search_icon" src={searchMobile} alt="Search icon" />
          </button>
        </div>
        <div className="flex items-center gap-4 sm:order-3">
          <div className="hidden sm:flex items-center gap-1 text-[17px] font-[400] mr-[20px]">
            <button>Sign In</button>
            <p>|</p>
            <button>Create Account</button>
          </div>
          <button className="sm:hidden" onClick={handleClick}>
            <Image id="search_icon" src={searchMobile} alt="Search icon" />
          </button>
          <button onClick={handleClick}>
            <Image id="cart_icon" src={shoppingCartMobile} alt="Cart icon" />
          </button>
        </div>
      </nav>
      <div
        className={search ? "bg-[#F4F7FD] ease-in-out duration-1000" : "hidden"}
      >
        <input
          className="bg-[#F4F7FD] w-full h-[60px] px-3 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div
        className={
          cart
            ? "bg-[#F4F7FD] shadow-[0_0_2.1px_0_rgba(0,0,0,0.25)] py-[25px] px-[15px] flex flex-col items-center sm:pt-[15px] sm:fixed sm:opacity-95 sm:w-[75%] sm:right-0 sm:min-h-[100vh]"
            : "hidden"
        }
      >
        <p
          onClick={() => setCart(false)}
          className="self-end font-bold hidden sm:block"
        >
          X
        </p>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-[18px]">Your cart is empty</p>
          <p className="mt-[3px] text-[14px] text-[#636363]">
            You have no items in your shopping cart
          </p>
          <p className="text-[14px] leading-[10px] text-[#636363]">
            Lets go buy something
          </p>
          <button
            onClick={() => setCart(false)}
            className="shadow-[0_0_2.1px_0_rgba(0,0,0,0.25)] mt-[25px] bg-[#FFEA02] py-1 rounded-[11px] w-[150px] text-[#C61802] font-semibold opacity-70"
          >
            Start Shopping
          </button>
        </div>
      </div>
      <MenuNav menu={menu} />
      <DrinkNav
        greatValueIcon={greatValue}
        wineIcon={wine}
        beerIcon={beer}
        liquorIcon={liquor}
        cannedIcon={cannedCocktail}
        hardSeltzerIcon={hardSeltzer}
        zeroProofIcon={zeroProof}
        mixersMoreIcon={mixersNmore}
      />
    </header>
  );
}
