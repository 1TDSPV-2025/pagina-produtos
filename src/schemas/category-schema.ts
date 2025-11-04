import { z } from "zod";

export const categorySchema = z.object({
  name: z.string("O nome é obrigatorio").min(2, "O minimo de caracteres é 2"),
});

export type CategoryFormData = z.infer<typeof categorySchema>;
