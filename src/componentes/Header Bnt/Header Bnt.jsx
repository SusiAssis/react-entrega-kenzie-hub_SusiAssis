import { StyledHeaderBnt } from "../Header Bnt/index"

export const HeaderBnt = ({name , logout}) => {
         
   return(
            <StyledHeaderBnt onClick={()=>logout()}>
                <div className="header_bnt">
                <h1>Kenzie Hub</h1>
                <button>{name}</button>
                </div>
            </StyledHeaderBnt>
         )
}