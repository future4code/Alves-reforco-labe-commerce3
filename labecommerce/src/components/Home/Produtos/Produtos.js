import React from 'react'
import { Cabecalho, GrupoDeCartoes } from './style'
import CartaoDosProdutos from '../CartaoDosProdutos/CartaoDosProdutos'
import { pacoteDeProdutos } from '../../../pacoteDeProdutos'
import { useState } from 'react'



function Produtos(props) {

    const produtosOrdenados = props.produtos && props.produtos.sort((a, b) => {
        if(props.ordenacao === "Crescente"){
            return (a.price - b.price)
        }else{
            return (b.price - a.price)
        }
        
            
    })

    const produtosMapeados = produtosOrdenados && produtosOrdenados.map(produto =>{
        return <CartaoDosProdutos 
                    key = {produto.id}
                    imagem = {produto.photo}
                    nome = {produto.name}
                    valor = {produto.price}
                    onClick = {() => props.onclick(produto)}
                
        
        />
    })
   
     

  return (
    
    <div>
        <Cabecalho>
            <p>Quantidade de produtos: {props.quantidade}</p>
            <label>
                Ordenação:
                <select  onChange={props.onChangeCabecalho} >
                    <option value={"Crescente"}> Crescente</option>
                    <option value={"Decrescente"}>Decrescente</option>

                </select>
            </label>
        </Cabecalho>
        <div>
            <GrupoDeCartoes>
                {produtosMapeados}
            </GrupoDeCartoes>
        </div>
    </div>
  )
}

export default Produtos