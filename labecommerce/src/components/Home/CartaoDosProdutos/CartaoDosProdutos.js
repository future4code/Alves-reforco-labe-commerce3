import React from 'react'
import { Cartao, TextoDoCartao } from './style'

function CartaoDosProdutos(props) {
  return (
    <Cartao>
      <img src={props.imagem} alt="produto" />
      <TextoDoCartao>
        <p>{props.nome}</p>
        <p>R$ {props.valor},00</p>
        <button onClick={props.onClick}>Adicionar carrinho</button>
      </TextoDoCartao>

    </Cartao>
  )
}

export default CartaoDosProdutos