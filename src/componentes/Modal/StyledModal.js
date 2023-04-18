import styled from "styled-components";

export const StyledModal = styled.div`
display:flex;
align-items: center;
background-color:rgba(0, 0, 0, 0.7);
width:100vw;
height: 100vh;

.dialog{
    background-color: var(--grey-3);
    width: 80%;
    max-width: 400px;
    height:auto;
    margin: 0 auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding-bottom: 1em;
}

.contanier_title{
display: flex;
padding: 0.8em;
background-color: var(--grey-2);
align-items: center;
justify-content:space-between;

button{
    background-color: var(--grey-2);
    color:#868E96;
    border: none;
    width: 30px;
    height: 30px;
    font-size: 1em;
}
h1{
    font-size:14px;
}

}

.contanier_form{
    padding: 0em 1em;
    height: auto;
    
    form{
     display: flex;
     flex-direction: column;
     gap:1em;

     label{
        color:var(--grey-0);
        font-size: 12px;
     }

    select{
        background-color:var(--grey-2);
        height: 48px;
        border: none;
        color:var(--grey-0);
        padding: 0.8em;
    }

    button{
        height: 48px;
        background-color: var(--color-primary);
        border: none;
        border-radius: 4px;
        color:var(--grey-0);
        font-weight:500;
    }
    }


}
`