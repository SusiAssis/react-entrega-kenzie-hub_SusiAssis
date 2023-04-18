import { useForm } from "react-hook-form"
import { useState, useContext } from "react"
import { schema } from '../Login/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import Header from "../../componentes/header/Header"
import { FormLogin } from '../../componentes/Form login/FormLogin'
import { StyledLogin } from '../Login/StyledLogin'
import { UserContext } from "../../providers/UserContext"



export const Login = () => {

    const [isTypepassword, setIsTypepassword] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })



    const { handleLogin } = useContext(UserContext)

    return (
        <StyledLogin>

            <main>
                <Header />
                <div className="contanier_main">

                    <h2>Login</h2>

                    <FormLogin register={register} errors={errors} isTypepassword={isTypepassword} setIsTypepassword={setIsTypepassword} handleSubmit={handleSubmit} handleLogin={handleLogin} />

                    <div className="contanier_cadastre-se">
                        <p>Ainda não possui uma conta?</p>
                        <Link to={'/register'}>Cadastre-se</Link>
                    </div>
                </div>
            </main>

        </StyledLogin>
    )
}
export default Login