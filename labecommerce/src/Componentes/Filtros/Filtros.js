import React from "react";
import {Container,Organizacao,Inputs} from './estilo'

function Filtros (){
    return(
        <Container>
            <Organizacao>
                <h4>Filtrar por:</h4>
                <Inputs
                type={"text"}
                placeholder={"Pesquisa"}
                maxLength={50}/>
                <br/>
                <Inputs
                type={"number"} 
                placeholder={"Valor mínimo"} 
                min={0}/>
                <br/>
                <Inputs 
                type={"number"} 
                placeholder={"Valor máximo"} 
                max={Infinity} 
                min={0}/>
            </Organizacao>
        </Container>
    )
}

export default Filtros