import { useEffect, useState } from "react";
import { API_PRODUCTS } from "../api/products";
import { ProductCard } from "../components/product-card";
import type { Product } from "../types/product";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${API_PRODUCTS}/produtos`)
      .then((data) => data.json())
      .then((data) => setProducts(data))
      .catch((data) => console.log(data));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <header>
        <h2 className="font-bold text-3xl text-sky-800">Produtos</h2>
      </header>

      <main className="flex flex-col gap-3 items-center justify-center w-full">
        {products.map((value) => {
          return <ProductCard product={value} />;
        })}
      </main>
    </div>
  );
}
