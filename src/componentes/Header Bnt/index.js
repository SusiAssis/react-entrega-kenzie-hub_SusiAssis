import styled from "styled-components";

export const StyledHeaderBnt = styled.nav`
    margin: 0 auto;
    width: 100%;
    height: auto;
    padding: 1em 0;


    button{
        background-color: var(--grey-3);
        border: none;
        padding: 0.8em 1.5em;
        font-size: 12px;
        font-weight: 600;
        border-radius: 4px;
        color: var(--grey-0);
    }


    h1{
    color: var(--color-primary);
    font-size: 22px; 
    }

    .header_bnt{
        display: flex;
        width: 100%;
        height: auto;
        padding: 1em;
        justify-content: space-between;
        align-items: center;

    }

    @media (min-width: 1000px){
        display: flex;
        justify-content: center;

        .header_bnt{
        display: flex;
        width: 75%;
        height: auto;
        padding: 1em;
        justify-content: space-between;
        align-items: center;
    }
    }
`