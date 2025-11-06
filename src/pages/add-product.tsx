import { useForm } from "react-hook-form"
import { productSchema, type ProductFormData } from "../schemas/product-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { API_PRODUCTS } from "../api/products"



export function AddProduct() {

    const { register, handleSubmit, formState:{errors} } = useForm<ProductFormData>({
        resolver: zodResolver(productSchema)
    })


    async function onSubmit(data:ProductFormData) {

        const product = {
            nome: data.nome,
            quantidade: data.quantidade,
            valor: data.valor,
            dataValidade: data.dataValidade,
            categoria: data.categoria
        }
        try {
            await fetch(`${API_PRODUCTS}/produtos`, {
                body: JSON.stringify(product),
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                }
            })
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className="flex flex-col items-center justify-center gap-8">
             <header>
                <h2 className="font-bold text-3xl text-sky-800">
                Adicionar Produto
                </h2>
            </header>
            <form
                className="w-3/8 flex bg-sky-200 flex-col border border-sky-400 rounded p-4 gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >

                <label htmlFor="product-name">Nome produto</label>
                <input type="text" 
                {...register('nome')}
                className="border border-sky-600 bg-white rounded"
                id="product-name" placeholder="nome do produto"/>
                {errors.nome && <p className="text-red-500">{errors.nome?.message}</p>}
           
                <label htmlFor="product-quantity">Quantidade</label>
                <input 
                {...register('quantidade', {valueAsNumber: true})}
                className="border border-sky-600 bg-white rounded"
                type="number" id="product-quantity" placeholder="numero quantidade"/>
                {errors.quantidade && <p className="text-red-500">{errors.quantidade?.message}</p>}


                <label htmlFor="product-value">Valor</label>
                <input 
                {...register('valor', {valueAsNumber: true})}
                className="border border-sky-600 bg-white rounded"
                type="number" id="product-value" placeholder="valor"/>
                {errors.valor && <p className="text-red-500">{errors.valor?.message}</p>}

           
                <label htmlFor="product-date">Data da validade</label>
                <input 
                {...register('dataValidade')}
                className="border border-sky-600 bg-white rounded"
                type="date" id="product-date" placeholder="data da validade"/>
                {errors.dataValidade && <p className="text-red-500">{errors.dataValidade?.message}</p>}


                <label htmlFor="category-id">Codigo da categoria</label>
                <input 
                {...register('categoria', {valueAsNumber: true})} 
                className="border border-sky-600 bg-white rounded"
                type="number" id='category-id' placeholder="codigo da categoria"/>
                {errors.categoria && <p className="text-red-500">{errors.categoria?.message}</p>}


                <button
                className="bg-sky-800 hover:cursor-pointer text-white font-bold"
                type="submit"
                >
                Criar
                </button>
            </form>
        </div>
    )

}