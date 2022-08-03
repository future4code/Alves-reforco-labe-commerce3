import React from "react";
import styled from "styled-components";

export const Container = styled.div`
 
border: 1px black solid;
width: 18%;
padding-bottom: 25%;
margin-left: 2%;
`

export const Organizacao = styled.label`
display: grid;
padding: 2%;
`
export const Inputs = styled.input`
width: 60%;
`

function Filtros (){
    return(
        <Container>
            <Organizacao>
                <h4>Filtrar por:</h4>
                <Inputs type={"text"} placeholder={"Pesquisa"} maxLength={50}/>
                <br/>
                <Inputs type={"number"} placeholder={"Valor mínimo"} min={0}/>
                <br/>
                <Inputs type={"number"} placeholder={"Valor máximo"} max={Infinity} min={0}/>
            </Organizacao>
        </Container>
    )
}

export default Filtros