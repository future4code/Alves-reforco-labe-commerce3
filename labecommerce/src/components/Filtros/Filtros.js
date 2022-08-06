import React from "react";
import styled from "styled-components";
import { Container, Organizacao, Inputs, GrupoDeFiltros, Filtro,S } from './estilo'





function Filtros(props) {
    return (
        <GrupoDeFiltros>
            <h2>Filtros</h2>
           <Filtro>
            Filtro Mínimo:
            <input type={"number"}
            value= {props.minimo}
            onChange ={props.onChangeMinimo}
            />
            
           </Filtro>
           <Filtro>
            Filtro Máximo:
            <input type={"number"}
             value= {props.maximo}
             onChange ={props.onChangeMaximo}
            />
           
           </Filtro>
           <Filtro>
            Busca por nome:
            <input type={"text"}
             value= {props.buscaPorNome}
             onChange ={props.onChangebuscaPorNome}
            />
           
           </Filtro>
          
        </GrupoDeFiltros>

        // <Container>
        //     <label>
        //         <h4> Ordenar por: </h4>
        //         <select
        //             name="titulo"
        //             value={props.titulo}
        //             onChange={(ev) => { props.setTitulo(ev.target.value) }}>
        //             <option value={"name"}> Título </option>
        //             <option value={"price"}> Preço </option>
        //         </select>
        //         <select
        //             name="ordenacao"
        //             value={props.ordenacao}
        //             onChange={(ev) => { props.setOrdenacao(ev.target.value) }} >
        //             <option value={"asc"}> Crescente</option>
        //             <option value={"desc"}>Decrescente</option>

        //         </select>
        //     </label>

        //     <Organizacao>
        //         <h4>Filtrar por:</h4>
        //         <Inputs
        //             value={props.pesquisa}
        //             onChange={(ev) => { props.setPesquisa(ev.target.value) }}
        //             type={"text"}
        //             placeholder={"Pesquisa"}
        //             maxLength={50} />
        //         <br />
        //         <Inputs
        //             value={props.precoMinimo}
        //             onChange={(ev) => { props.setPrecoMinimo(ev.target.value) }}
        //             type={"number"}
        //             placeholder={"Valor mínimo"}
        //             min={0} />
        //         <br />
        //         <Inputs
        //             value={props.precoMaximo}
        //             onChange={(ev) => { props.setPrecoMaximo(ev.target.value) }}
        //             type={"number"}
        //             placeholder={"Valor máximo"}
        //             max={Infinity}
        //             min={0} />
        //     </Organizacao>

        // </Container>
    )
}

export default Filtros