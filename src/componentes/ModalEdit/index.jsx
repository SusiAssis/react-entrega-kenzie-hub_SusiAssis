import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../providers/TechContext"
import { Input } from "../Input/Input"
import { StyledModalEdit } from "./StyledModalEdit"

export const ModalEdit = ({ openModalEdit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { removeTech, editTech, techSelecionada } = useContext(TechContext)

    const submit = async (data) => {
        await editTech(data)
        openModalEdit()
    }

    const remove = async () => {
        await removeTech()
        openModalEdit()
    }

    return (
        <StyledModalEdit>
            <div className="dialog" role="dialog">
                <div className="contanier_title">
                    <h1>Tecnologia Detalhes</h1>
                    <button onClick={() => openModalEdit()}>X</button>
                </div>
                <div className="contanier_form">
                    <form onSubmit={handleSubmit(submit)}>
                        <Input disabled defaultValue={techSelecionada.title} label="Nome do projeto" type="text" />
                        <label>Status</label>
                        <select {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <div className="contanier_bnt">
                            <button type="submit">Salvar alterações</button>
                            <button type="button" className="excluir" onClick={() => remove()}>Excluir</button>
                        </div>
                    </form>
                </div>
            </div>
        </StyledModalEdit>
    )
}