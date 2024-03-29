import styled from "styled-components";

export const StyledLogin = styled.div`
         width:100vw;
         height: 100vh;
         
    main{

        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;

        .contanier_main{
            display: flex;
            flex-direction: column;
            padding: 2.5em 1em;
            width: 100%;
            max-width: 23.5em;
            height: auto;
            gap: 2em;
            background-color: var(--grey-3);


            h2{
                color: var(--grey-0);
                font-size: 18px;
                font-weight: 700;
                text-align: center;
            }

            p{
                font-size: 12px;
                color: var(--grey-1);
            }

        }

        .contanier_cadastre-se{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1em;
            width: 100%;

            p{
                font-size: 12px;
                color: var(--grey-1);
            }
        }

       a{
        background-color: var(--grey-1);
        width: 100%;
        height: 48px;
        text-align: center;
        text-decoration:none;
        padding: 0.8em;
        border: none;
        border-radius: 4px;
        color:#FFFFFF;
        font-weight: 500;
        font-size: 1em;
       }
            
        }
`