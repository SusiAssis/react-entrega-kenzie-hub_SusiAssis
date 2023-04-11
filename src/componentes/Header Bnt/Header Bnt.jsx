import { StyledHeaderBnt } from "../Header Bnt/index"

export const HeaderBnt = ({name}) => {
         
   return(
            <StyledHeaderBnt>
                <div className="header_bnt">
                <h1>Kenzie Hub</h1>
                <button>{name}</button>
                </div>
            </StyledHeaderBnt>
         )
}