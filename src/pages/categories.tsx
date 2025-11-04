import { useEffect, useState } from "react";
import { API_PRODUCTS } from "../api/products";
import { CategoryCard } from "../components/category-card";
import type { Category } from "../types/category";

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`${API_PRODUCTS}/categorias`)
      .then((data) => data.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <header>
        <h2 className="font-bold text-3xl text-green-800">Categorias</h2>
      </header>

      <main className="w-full flex flex-col justify-center items-center gap-3">
        {categories.map((value) => {
          return <CategoryCard category={value} />;
        })}
      </main>
    </div>
  );
}
