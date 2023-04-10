import { useForm } from "react-hook-form"
import { Input} from "../../componentes/Input/Input"
import { useState } from "react"
import { schema } from '../Login/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, useNavigate } from 'react-router-dom'
import { api } from "../../services/api"
import Header from "../../componentes/header/Header"
//import { Form } from "../../componentes/Form/Form"
import StyledButton from '../../componentes/Button/index'

export const Login = () => {
    const [user, setUser] = useState({})
    const [isTypepassword , setIsTypepassword] = useState(true)
    const { register , handleSubmit, formState:{errors} } = useForm({resolver: zodResolver(schema)})

    const navigate = useNavigate()

    console.log(user)

    const handleLogin = async(data) => {
        try{
            await api.post('/sessions' , data).then((response)=>{
                localStorage.setItem("@TOKEN", JSON.stringify(response.data.token))

                localStorage.setItem("@USERID", JSON.stringify(response.data.user.id))

                setUser((response.data.user))

            })
            
            console.log(data)
            navigate('/dashboard')

        }catch (error){
            console.log(error)
        }
    }

    return(
        <main>
            <div className="contanier">
                <Header/>
                
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h2>Login</h2>
                    <Input type="email" label="Email" {... register('email')} placeholder="Digite seu email" id={'email'} error ={errors?.email?.message}></Input>
                    <Input type={isTypepassword ? 'password' : 'text'} label='Senha' placeholder="Digite sua senha" {...register('password')} error ={errors?.password?.message} className='contanier_eyes'>
                        <button className="eyes" onClick={(event)=> {
                        event.preventDefault(event)
                        setIsTypepassword(!isTypepassword)}}><img src="../../../src/assets/Olho.png" alt="ver"/></button>
                    </Input>
                    <StyledButton entrar='Entrar' backgroundC ='var(--color-primary)'/>

                    <div className="contanier_cadastre-se">
                    <p>Ainda não possui uma conta?</p>
                    <StyledButton entrar='Cadastre-se' backgroundC ='var(--grey-1)'/>
                    </div>
                </form>
            </div>
        </main>
    )
    
}

export default Login