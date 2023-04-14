import { Link } from "react-router-dom"
import { StyledHeaderBnt } from "../Header Bnt/index"

export const HeaderBnt = ({name , logout}) => {
         
   return(
            <StyledHeaderBnt>
                <div className="header_bnt">
                <h1>Kenzie Hub</h1>
                {name === 'Voltar' ? <Link to={'/'}>{name}</Link> : <button onClick={()=>logout()}>{name}</button> }
                </div>
            </StyledHeaderBnt>
         )
}