import * as z from 'zod'

export const schema = z.object({
    email: z.string().nonempty('O e-mail é obrigatório').email('O e-mail deve estar no formato correto'),
    password: z.string().min(8,{message: 'A senha é obrigatória'})
  })