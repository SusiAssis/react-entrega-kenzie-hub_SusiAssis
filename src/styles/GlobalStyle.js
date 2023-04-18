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
    color: var(--grey-0)
}

body{
    background-color: var(--grey-4);   
}

main{
    width: 100vw; 
}

button{
    cursor:pointer;
}
`
