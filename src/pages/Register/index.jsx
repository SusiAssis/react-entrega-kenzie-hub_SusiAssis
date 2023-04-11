import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../Register/validator'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { FormRegister } from '../../componentes/Form Register/FormRegister'
import { HeaderBnt } from '../../componentes/Header Bnt/Header Bnt'
import { StyledRegister } from './StyledRegister'

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

        <StyledRegister>
            <HeaderBnt name='Voltar' />
            <main>

                <div className='contanier_register'>

                    <div className='crie'>
                    <h2>Crie sua conta</h2>
                    <p>Rápido e grátis, vamos nessa</p>
                    </div>
                    
                <FormRegister register={register} errors={errors} onSubmit={handleSubmit(handleRegister)} />
                </div>
            
            </main>
        </StyledRegister>
    )
}

export default Register