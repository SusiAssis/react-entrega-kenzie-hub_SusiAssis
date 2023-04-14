import { Input } from "../Input/Input"
import { Button } from "../Button/index"
import { StyledForm } from "./style"
import olho from "../../assets/olho.png"
export const FormLogin = ({register , errors , isTypepassword , setIsTypepassword , handleSubmit , handleLogin})=>{

    return(

        <StyledForm onSubmit={handleSubmit(handleLogin)}>
                    <Input type="email" label="Email" {... register('email')} placeholder="Digite seu email" id={'email'} error ={errors?.email?.message}></Input>
                    <Input type={isTypepassword ? 'password' : 'text'} label='Senha' placeholder="Digite sua senha" {...register('password')} error ={errors?.password?.message} className='contanier_eyes'>
                        <button className="eyes" onClick={(event)=> {
                        event.preventDefault(event)
                        setIsTypepassword(!isTypepassword)}}><img src={olho} alt="ver"/></button>
                    </Input>
                    <Button entrar='Entrar' backgroundC ='var(--color-primary)'/>
        </StyledForm>

    )
}