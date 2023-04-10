import styled from "styled-components";

export const StyledHeader = styled.nav`
display:flex;
width: 100%;

.contanier{
    width: 370px;
    height: auto;
    padding: 1em;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contanier_duo{
    display: flex;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 370px;
    height: auto;
    padding: 1em 0;

    button{
        background-color: var(--grey-3);
        border: none;
        padding: 0.8em 1.5em;
        font-size: 12px;
        border-radius: 4px;
        color: var(--grey-0);
    }
}

h1{
    color: var(--color-primary); 
}

`
export default StyledHeader
