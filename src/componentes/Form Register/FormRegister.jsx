import { Input } from "../Input/Input"
import { Button } from "../Button/index"
import { StyledFormRegister } from "./styled"

export const FormRegister = ({ register, errors, handleSubmit, handleRegister }) => {

    return (
        <StyledFormRegister onSubmit={handleSubmit(handleRegister)}>

            <Input type='text' label='Nome' placeholder='Digite aqui seu nome' id='name' error={errors?.name?.message} {...register('name')} />


            <Input type='email' label='Email' placeholder='Digite aqui seu email' error={errors?.email?.message} id='email' {...register('email')} />


            <Input type='password' label='Senha' placeholder='Digite aqui sua senha' error={errors?.password?.message} id='senha' {...register('password')} />


            <Input type='password' label='Confirmar Senha' placeholder='Digite novamente sua senha' error={errors?.confirm?.message} id='senhaConfirm' {...register('confirm')} />


            <Input type='text' label='Bio' placeholder='Fale sobre você' error={errors?.bio?.message} id='bio' {...register('bio')} />


            <Input type='text' label='Contato' placeholder='Opção de contato' error={errors?.contact?.message} id='contato' {...register('contact')} />

            <label>Selecionar módulo</label>
            <select {...register('course_module')}>
                <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro Módulo</option>
                <option value='Segundo Módulo (Frontend avançado)'>Segundo Módulo</option>
                <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro Módulo</option>
                <option value='Quarto módulo (Backend Avançado)'>Quarto Módulo</option>
            </select>

            <Button type='submit' entrar='Cadastrar' backgroundC={'var(--color-primary)'} />
        </StyledFormRegister>

    )
}