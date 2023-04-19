
import { useContext } from "react"
import { Input } from "../Input/Input"
import { useForm } from "react-hook-form"
import { TechContext } from "../../providers/TechContext"
import { StyledModal } from "./StyledModal"


export const Modal = ({openModal})=>{
    const { register , handleSubmit ,  formState:{errors} } = useForm()
    const { addTech } = useContext(TechContext)
    
    const submit = (data)=>{
     addTech(data)
     openModal(false)
    }

    return(
        <StyledModal>
            <div className="dialog" role="dialog">
             <div className="contanier_title">
                <h1>Cadastrar Tecnologia</h1>
                <button onClick={()=>openModal()}>X</button>
             </div>
             <div className="contanier_form">
             <form onSubmit={handleSubmit(submit)}>
                <Input label="Nome" type="text" error={errors?.email?.message} {...register("title")} />
                <label>Selecionar status</label>
                <select {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <button type="submit">Cadastrar Tecnologia</button>
             </form>
             </div>
            </div>
        </StyledModal>
    )
}