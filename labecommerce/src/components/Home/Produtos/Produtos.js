import React, { useState } from 'react'
import { Cabecalho, GrupoDeCartoes } from './style'
import CartaoDosProdutos from '../CartaoDosProdutos/CartaoDosProdutos'
import Filtros from '../../Filtros/Filtros'
import { pacoteDeProdutos } from '../../../pacoteDeProdutos'



function Produtos(props) {
  const [pesquisa, setPesquisa] = useState("")
  const [precoMinimo, setPrecoMinimo] = useState(-Infinity)
  const [precoMaximo, setPrecoMaximo] = useState(Infinity)
  const [titulo, setTitulo] = useState("name")
 


  const produtosOrdenados = props.produtos && props.produtos.sort((a, b) => {
    if (props.ordenacao === "Crescente") {
      return a.price - b.price
    } else {
      return b.price - a.price
    }


  })
  
  const produtosMapeados = produtosOrdenados && produtosOrdenados
    .filter((produto) => {
      return produto.name.includes(pesquisa)
    })
    .filter((produto) => {
      return produto.price >= precoMinimo
    })
    .filter((produto) => {
      return produto.price <= precoMaximo
    })
    .sort((primeiroParametro, segundoParametro) => {
      switch (titulo) {
        case "price":
          return primeiroParametro.price - segundoParametro.price
        default:
          return primeiroParametro.name.localeCompare(segundoParametro.name)
      }
    }).map(produto => {
      return <CartaoDosProdutos
        key={produto.id}
        imagem={produto.photo}
        nome={produto.name}
        valor={produto.price}
        onClick={() => props.onclick(produto)}
      />
})

  return (

     <div>
      <Cabecalho>
        <p>Quantidade de produtos: {props.quantidade}</p>
        <label>
            Ordenação:
            <select onChange={props.onChangeCabecalho}>
              <option value={"Crescente"} >Crescente</option>
              <option value={"Decrescente"}>Decrescente</option>


            </select>
        </label>

      </Cabecalho>
      <div>
        <GrupoDeCartoes>
          {produtosMapeados}
        </GrupoDeCartoes>
      </div>
      {/* <Filtros
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        precoMinimo={precoMinimo}
        setPrecoMinimo={setPrecoMinimo}
        precoMaximo={precoMaximo}
        setPrecoMaximo={setPrecoMaximo}
        ordenacao={ordenacao}
        setOrdenacao={setOrdenacao}
        titulo={titulo}
        setTitulo={setTitulo}
      /> */}
    </div>
  )
}

export default Produtos