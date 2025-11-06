import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  categorySchema,
  type CategoryFormData,
} from "../schemas/category-schema";
import { API_PRODUCTS } from "../api/products";

export function AddCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
  });

  async function onSubmit(data: CategoryFormData) {
      await fetch(`${API_PRODUCTS}/categorias`, {
        body: JSON.stringify({
          nome: data.name
        }),
        method: "POST",
        headers: {
          'Content-type': "application/json"
        }
      }) 
      alert("Categoria cadastrada com sucesso")
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <header>
        <h2 className="font-bold text-3xl text-green-800">
          Adicionar Categoria
        </h2>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-3/8 flex bg-green-200 flex-col border border-green-400 rounded p-4 gap-4"
      >
        <label className="font-bold text-green-600" htmlFor="category-name">
          Nome
        </label>
        <input
          {...register("name")}
          className="border border-green-600 bg-white rounded"
          type="text"
          id="category-name"
          placeholder="nome da categoria"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}

        <button
          className="bg-green-800 hover:cursor-pointer text-white font-bold"
          type="submit"
        >
          Criar
        </button>
      </form>
    </div>
  );
}
