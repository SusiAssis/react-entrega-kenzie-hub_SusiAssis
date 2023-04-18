import { StyledCardTech } from "./style"

export const CardTech = ({ tech }) => {
    return(
        <StyledCardTech>
           <h4>{tech.title}</h4>
           <p>{tech.status}</p>
        </StyledCardTech>
    )
}