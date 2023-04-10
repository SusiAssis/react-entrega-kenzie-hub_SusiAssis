import { forwardRef } from "react"
import {StyledInput} from './index'

export const Input = forwardRef(({id , label , error , children , ...rest}, ref) => {

    return(

        <StyledInput>
            { label ? <label htmlFor={id}>{label}</label> : null}
            <input id={id} ref={ref} {...rest}/>
            {error ? <p>{error}</p> : null}
            {children}
        </StyledInput>

    )
})