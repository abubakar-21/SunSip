export function AddToCart({ setQuantity, quantity }) {
  return (
    <div className="flex flex-col gap-2 mt-[5px]">
      <div className="flex justify-between border-solid border-[1.5px] border-[#121212BF] max-w-[130px] rounded-[5px] px-2 py-1 text-[16px] items-center font-medium text-[#121212BF]">
        <button
          onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
          className="text-[22px]"
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="text-[22px]"
        >
          +
        </button>
      </div>
      <button className="border-solid border-[1.5px] border-[#121212BF] px-2 py-1 text-[16px] rounded-[5px] w-full text-[#121212BF] min-h-[43.67px] font-medium">
        Add to cart
      </button>
    </div>
  );
}
