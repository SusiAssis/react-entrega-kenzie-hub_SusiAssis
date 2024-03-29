import * as z from 'zod'

export const schema = z.object({
    name: z.string().nonempty('Nome é obrigatório'),
    email: z.string().min(1,'O e-mail é obrigatório').email('O e-mail deve estar no formato correto'),
    password: z.string().min(8,{message: 'A senha é obrigatória e precisa de mínimo 8 caracteres'}).regex(/(?=.*?[a-z])/,'É necessário ao menos uma letra minúscula').regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número'),
    confirm: z.string().min(1,"A confirmação de senha é obrigatória"),
    bio: z.string().nonempty('Esse campo é obrigatório'),
    contact: z.string().nonempty('Esse campo é obrigatório'),
    course_module:z.string()
  }).refine(({password, confirm}) => password === confirm, {
    message:'As senhas precisam corresponder',
    path:['confirm'],
  })