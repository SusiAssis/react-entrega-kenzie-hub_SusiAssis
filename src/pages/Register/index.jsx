import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "../Register/validator"
import { FormRegister } from "../../componentes/Form Register/FormRegister"
import { HeaderBnt } from "../../componentes/Header Bnt/Header Bnt"
import { StyledRegister } from "./StyledRegister"
import { UserContext } from "../../providers/UserContext"
import { useContext } from "react"

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

    const { handleRegister } = useContext(UserContext)

    return (

        <StyledRegister>
            <HeaderBnt name="Voltar" />
            <main>

                <div className="contanier_register">

                    <div className="crie">
                        <h2>Crie sua conta</h2>
                        <p>Rápido e grátis, vamos nessa</p>
                    </div>

                    <FormRegister register={register} errors={errors} handleSubmit={handleSubmit} handleRegister={handleRegister} />
                </div>

            </main>
        </StyledRegister>
    )
}

export default Register