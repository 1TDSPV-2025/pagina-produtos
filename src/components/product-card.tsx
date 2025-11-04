import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col bg-sky-200 border border-sky-400 rounded-xl py-4 px-8 w-3/5">
      <p className="font-bold text-gray-500">Nome: {product.nome}</p>
      <p className="font-bold text-gray-500">
        Quantidade: {product.quantidade}
      </p>
      <p className="font-bold text-gray-500">Valor: {product.valor}</p>

      <div>
        <p className="font-bold">Categoria</p>

        <p className="font-bold">Codigo: {product.categoria.codigo}</p>
        <p className="font-bold">Nome: {product.categoria.nome}</p>
      </div>
    </div>
  );
}
