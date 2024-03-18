import Image from "next/image";
export default function DrinkNav({
  greatValueIcon,
  wineIcon,
  beerIcon,
  liquorIcon,
  cannedIcon,
  hardSeltzerIcon,
  zeroProofIcon,
  mixersMoreIcon,
}) {
  return (
    <div>
      <ul className="hidden sm:flex justify-evenly shadow-[0_0_2.1px_0_rgba(0,0,0,0.25)] text-[10px] font-[500] py-2">
        <li>
          <button className="flex flex-col items-center justify-between">
            <Image
              className="sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px]"
              src={greatValueIcon}
              alt=""
            />
            <p>Great Value</p>
          </button>
        </li>
        <li>
          <button className="flex flex-col items-center justify-betweenr">
            <Image
              className="sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px]"
              src={wineIcon}
              alt=""
            />
            <p>Wine</p>
          </button>
        </li>
        <li>
          <button className="flex flex-col items-center justify-between">
            <Image
              className="sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px]"
              src={beerIcon}
              alt=""
            />
            <p>Beer</p>
          </button>
        </li>
        <li>
          <button className="flex flex-col items-center justify-between">
            <Image
              className="sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px]"
              src={liquorIcon}
              alt=""
            />
            <p>Liquor</p>
          </button>
        </li>
        <li>
          <button className="flex flex-col items-center justify-between">
            <Image
              className="sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px]"
              src={cannedIcon}
              alt=""
            />
            <p>Canned Cocktails</p>
          </button>
        </li>
        <li>
          <button className="flex flex-col items-center justify-between">
            <Image
              className="sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px]"
              src={hardSeltzerIcon}
              alt=""
            />
            <p>Hard Seltzer</p>
          </button>
        </li>
        <li>
          <button className="flex flex-col items-center justify-between">
            <Image
              className="sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px]"
              src={zeroProofIcon}
              alt=""
            />
            <p>Zero Proof</p>
          </button>
        </li>
        <li>
          <button className="flex flex-col items-center justify-between">
            <Image
              className="sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px]"
              src={mixersMoreIcon}
              alt=""
            />
            <p>Mixers & More</p>
          </button>
        </li>
      </ul>
    </div>
  );
}
