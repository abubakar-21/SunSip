export default function MenuNav({ menu }) {
  return (
    <div className={menu ? "bg-[#F4F7FD] ease-in-out duration-1000" : "hidden"}>
      <ul className="p-3 flex flex-col gap-4">
        <li>
          <a href="#">Great Value</a>
        </li>
        <li>
          <a href="#">Wine</a>
        </li>
        <li>
          <a href="#">Beer</a>
        </li>
        <li>
          <a href="#">Liquor</a>
        </li>
        <li>
          <a href="#">Canned Cocktails</a>
        </li>
        <li>
          <a href="#">Mixers & more</a>
        </li>
      </ul>
    </div>
  );
}
