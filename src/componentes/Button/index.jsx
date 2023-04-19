import { StyledButton } from "./style"


export const Button = ({entrar, backgroundC}) =>{

    return(
        <StyledButton backgroundC = {backgroundC} >
          {entrar}
        </StyledButton>
    )
}
export default Button