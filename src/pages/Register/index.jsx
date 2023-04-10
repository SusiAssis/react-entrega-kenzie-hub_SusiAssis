import { useForm } from 'react-hook-form'
import { Input } from '../../componentes/Input/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../Register/validator'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from "../../componentes/Button/style"
import {StyledHeader} from '../../componentes/header/index'

export const Register = () => {
const { register , handleSubmit, formState:{ errors } } = useForm({resolver: zodResolver(schema)})

const navigate = useNavigate()

const handleRegister = async (data) => {
    try{
        console.log(data)
        await api.post('/users' , data)
        navigate('/')
        console.log('deu certo')

    }catch (error){
        console.log(error.response.data.message)
    }
}

console.log("Errors" , errors)

console.log(register)
    return(
        <main>
            <div className='contanier'>
                <StyledHeader>
                    <div className='contanier_duo'>
                        <h1>Kenzie Hub</h1>
                        <button>Sair</button>
                    </div>
                </StyledHeader>
                
                <form onSubmit={handleSubmit(handleRegister)}>
                    <h2>Crie sua conta</h2>
                    <p>Rápido e grátis, vamos nessa</p>
                    <Input type='text'label='Nome'placeholder='Digite aqui seu nome' id='name' error ={errors?.name?.message} {...register('name')}/>
                    

                    <Input type='email' label='Email' placeholder='Digite aqui seu email' error ={errors?.email?.message} id='email' {...register('email')}/>
                    

                    <Input type='password' label='Senha' placeholder='Digite aqui sua senha' error ={errors?.password?.message} id='senha' {...register('password')}/>
                    

                    <Input type='password' label='Confirmar Senha' placeholder='Digite novamente sua senha' error ={errors?.confirm?.message} id='senhaConfirm' {...register('confirm')}/>
                   

                    <Input type='text' label='Bio' placeholder='Fale sobre você' error ={errors?.bio?.message} id='bio' {...register('bio')}/>
                    

                    <Input type='text' label='Contato' placeholder='Opção de contato' error ={errors?.contact?.message} id='contato' {...register('contact')}/>
                    

                    <select {...register('course_module')}>
                    <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro Módulo</option>
                    <option value='Segundo Módulo (Frontend avançado)'>Segundo Módulo</option>
                    <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro Módulo</option>
                    <option value='Quarto módulo (Backend Avançado)'>Quarto Módulo</option>
                    </select>
                    
                    <StyledButton type='submit' backgroundC = {'var(--color-primary)'}> Cadastrar </StyledButton>
                </form>
            </div>
        </main>
    )
}

export default Register