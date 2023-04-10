import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --sucess: #3FE864;
    --negative:#E83F5B;

}

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
}

h1,h2,h3,h4,h5,h6{
    color: var(--grey-4)
}

body{
    background-color: var(--grey-4);   
}

main{
    display: flex;
    justify-content: center;
    width: 100vw;

    .contanier{
        height: 100vh;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         width: 370px;
         

        form{
            width: 100%;
            background-color: var(--grey-3);
            display: flex;
            flex-direction: column;
            gap: 1em;
            padding: 1em 1em;
            justify-content: center;
            align-items: center;
            margin: 1em 0 ;
            border-radius: 4px;

            .contanier_cadastre-se{
                width:100%;
                display: flex;
                flex-direction: column;
                gap: 1.2em;
                align-items: center;
                padding: 1em 0 0 0;

            }

            h2{
                font-size: 18px;
                color: var(--grey-0);
            }

            p{
                font-size: 12px;
                color: var(--grey-1);
            }
        }
    }
}

button{
    cursor:pointer;
}
`
