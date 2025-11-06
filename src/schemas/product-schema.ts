import {z} from 'zod'


const today = new Date().toISOString().split('T')[0]


export const productSchema = z.object({
    nome: z.string("O nome é obrigatorio"),
    quantidade: z.number("A quantidade é obrigatoria").min(1, "A quantidade minima é 1"),
    valor: z.number("O valor é obrigatorio").min(0.01, 'O valor não pode ser zerado'),
    dataValidade: z.string("A data deve ser informada").refine((data) => data >= today, "A data deve ser maior ou igual a hoje"),
    categoria: z.number("A categoria é obrigatoria").min(1, "O codigo da categoria é obrigatorio")
});

export type ProductFormData = z.infer<typeof productSchema>;