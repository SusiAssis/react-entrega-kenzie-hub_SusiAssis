import styled from "styled-components";

export const StyledFormRegister = styled.form`
display: flex;
flex-direction: column;
gap: 1em;

label{
    font-size: 12px;
    color: var(--grey-0);
}

select{
    
    height: 48px;
    border-radius: 4px;
    border: none;
    background-color: var(--grey-2);
    padding-left: 1em;
    color: var(--grey-0);
}
`