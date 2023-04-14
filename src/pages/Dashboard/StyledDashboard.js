import styled from "styled-components";

export const StyledDashboard = styled.div`
width: 100vw;
height: auto;

main{
    padding: 1em;
    display: flex;
    flex-direction: column;

}
.contanier_data{
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0em;


    h2{
        font-size: 20px;
        font-weight: 700;
        color:var(--grey-0);
    }

    p{
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        color:var(--grey-1);
    }

    

}

.contanier_main{
     margin-top: 2em;
     display: flex;
     flex-direction: column;
     gap: 1em;
     width: 75%;

    h3{
        font-size: 18px;
        font-weight: 700;
        color: var(--grey-0);
    }

    p{
        font-size: 16px;
        color: var(--grey-0); 
    }
} 

@media (min-width: 1000px){
main{
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding: 1em;
}
  .contanier_data{
  display: flex;
  width: 75%;
  flex-direction: row;
  justify-content:space-between;
  gap: 1em;
  padding: 1em 0em;
}
}
`