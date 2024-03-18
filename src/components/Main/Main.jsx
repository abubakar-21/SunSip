import ProductCard from "./ProductCard";
import ProductView from "./ProductView";

export default function Main() {
  return (
    <main className="p-4">
      <h3 className="m-[20px]">Drink-spiration to start with...</h3>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <h3 className="m-[20px]">Drink-spiration to start with...</h3>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductView
        productImage=""
        productTitle="24 Sellow Hard Seltzer 4,5% Rasberry"
        productDescreption="Bursting with the vibrant essence of ripe raspberries, offering a
        naturally tart and delightful taste sensation."
        productPrice="€84,00 EUR"
        ProductInformation=""
        ProductIngredients=""
      />
    </main>
  );
}
