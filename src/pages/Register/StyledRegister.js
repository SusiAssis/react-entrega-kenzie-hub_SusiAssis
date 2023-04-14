import styled from "styled-components";

export const StyledRegister = styled.div`
width:100vw;
height: 100vh;

main{
        display: flex;
        flex-direction: column;
        gap: 1em;
        height: auto;
        padding: 0em 1em 2em;
}

p{
            font-size: 12px;
            font-weight: 400;
            color: var(--grey-1);
        }

.contanier_register{
    padding: 1em;
    background-color: var(--grey-3);
    

    .crie{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        padding: 1em 0em;

        h2{
            font-size: 18px;
            font-weight: 700;
            color: var(--grey-0);
        }

        p{
            font-size: 12px;
            font-weight: 400;
            color: var(--grey-1);
        }
    }

}

@media (min-width: 1000px){
    .header_bnt{
        max-width: 26em;
    }

    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em; 
        width:100%;
        align-items: center;
    
    }
    .contanier_register{
        min-width:24em;
    }

}
`