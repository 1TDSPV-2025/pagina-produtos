import type { Category } from "./category";

export interface Product {
  codigo: number;
  nome: string;
  quantidade: number;
  valor: number;
  categoria: Category;
}
