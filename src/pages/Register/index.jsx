import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../Register/validator'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { FormRegister } from '../../componentes/Form Register/FormRegister'
import { HeaderBnt } from '../../componentes/Header Bnt/Header Bnt'
import { StyledRegister } from './StyledRegister'
import { toast } from "react-toastify"

export const Register = () => {
const { register , handleSubmit, formState:{ errors } } = useForm({resolver: zodResolver(schema)})

const navigate = useNavigate()

const handleRegister = async (data) => {
    try{
       
        await api.post('/users' , data)
        navigate('/')
        toast.success('Conta criada com sucesso!')

    }catch (error){
        toast.error(error.response.data.message)
    }
}

const logout = ()=>{
    return navigate(-1)
}

    return(

        <StyledRegister>
            <HeaderBnt logout={logout} name='Voltar' />
            <main>

                <div className='contanier_register'>

                    <div className='crie'>
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