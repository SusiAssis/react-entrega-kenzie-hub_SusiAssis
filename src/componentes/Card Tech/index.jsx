import { useContext } from "react"
import { StyledCardTech } from "./style"
import { TechContext } from "../../providers/TechContext"

export const CardTech = ({ tech , openModalEdit }) => {
   const { setTechSelecionada } = useContext(TechContext)

    const selecionar = (tech)=>{
        setTechSelecionada(tech)
    }

    return(
        <li onClick={()=>{selecionar(tech) , openModalEdit()} }>
        {/* <StyledCardTech> */}
           <h4>{tech.title}</h4>
           <p>{tech.status}</p>
        {/* </StyledCardTech> */}
        </li>
    )
}