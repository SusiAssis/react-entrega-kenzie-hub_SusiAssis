import styled from "styled-components";

export const StyledInput = styled.div`
position: relative;

display: flex;
flex-direction: column;
gap: 1em;
width: 100%;
height: auto;

input{
    height: 48px;
    border-radius: 4px;
    border: none;
    background-color: var(--grey-2);
    padding-left: 1em;
    color: var(--grey-0);
    

::placeholder{
        color: #868E96;
        font-size: 1em;
}
}

label{
    font-size: 12px;
    color: var(--grey-0);
}


.eyes{
background-color: transparent;
border: none;
position: absolute;
right: 10px;
top: 44px;

img{
    width: 25px;
    height: 25px;
}

}

`