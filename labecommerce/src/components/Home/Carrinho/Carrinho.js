import React, { useEffect, useState } from "react";



const Carrinho = (props) => {
    const [ produtos, setProdutos ] = useState([])
    const [ valorTotal, setValorTotal ] = useState(0)

    useEffect(() => {
        setProdutos(props.produtos.sort((a, b) => a.name.localeCompare(b.name)))
        
        let valor = 0
        for (let index = 0; index < props.produtos.length; index++) {
            valor = valor + props.produtos[index].priceTotal
        }
        
        setValorTotal(valor)
    },[props])


  return (
    <div>
        <h2>Carrinho</h2>
    {produtos.map((produto) => {
        return (
            <div>
                <h3>{produto.name}</h3>
                <img src={produto.photo} />
                <p>Quantidade {produto.quantidade}</p>
                <p>R$ {produto.price.toFixed(2)}</p>
                <button onClick={() => props.remove(produto, produto.id)}>Remover</button>
            </div>
        )
    })}
    
    <p>Valor total: {valorTotal && valorTotal.toFixed(2)}</p>
    
    </div>
  )
}

export default Carrinho