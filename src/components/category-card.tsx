import type { Category } from "../types/category";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-green-200 w-3/8 flex flex-col border rounded-xl border-green-400 items-center">
      <p className="font-bold">
        <span className="text-gray-600">Codigo: </span>
        {category.codigo}
      </p>
      <p className="font-bold">
        <span className="text-gray-600">Nome: </span>
        {category.nome}
      </p>
    </div>
  );
}
