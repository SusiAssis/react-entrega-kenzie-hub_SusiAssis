import styled from "styled-components"


export const StyledButton = styled.button`
width: 100%;
height: 48px;
background-color: ${({backgroundC}) => backgroundC};
border: none;
border-radius: 4px;
color:#FFFFFF;
font-weight: 500;
font-size: 1em;
`

export default StyledButton