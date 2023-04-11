import { useForm } from "react-hook-form"
import { useState } from "react"
import { schema } from '../Login/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, useNavigate } from 'react-router-dom'
import { api } from "../../services/api"
import Header from "../../componentes/header/Header"
import StyledButton from '../../componentes/Button/index'
import { FormLogin } from '../../componentes/Form login/FormLogin'
import { StyledLogin } from '../Login/StyledLogin'

export const Login = () => {
    const [user, setUser] = useState({})
    const [isTypepassword , setIsTypepassword] = useState(true)
    const { register , handleSubmit, formState:{errors} } = useForm({resolver: zodResolver(schema)})

    const navigate = useNavigate()

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

        <StyledLogin>
        
        <main>
            <Header/>
            <div className="contanier_main">
            
                <h2>Login</h2>
                
                <FormLogin register={register} errors={errors} isTypepassword={isTypepassword} setIsTypepassword={setIsTypepassword} onSubmit={handleSubmit(handleLogin)} />

                <div className="contanier_cadastre-se">
                    <p>Ainda não possui uma conta?</p>
                    <StyledButton entrar='Cadastre-se' backgroundC ='var(--grey-1)'/>
                    </div>
            </div>
        </main>

        </StyledLogin>
    )
    
}

export default Login