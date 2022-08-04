import React from "react";
import Produtos from "./components/Home/Produtos/Produtos";
import { useState } from "react";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Filtros from "./Componentes/Filtros/Filtros";

function App() {
  const [ordenacao, setOrdenacao]=useState("Crescente")

  

  const ordenarProdutos = (event) =>{
      setOrdenacao (event.target.value)
  }

  const adicionarProdutoNoCarrinho = (produto) =>{
    console.log(produto)
  }

  return (
    <div>
      <Produtos 
        quantidade = {pacoteDeProdutos.length}
        onChangeCabecalho={ordenarProdutos}
        ordenação = {ordenacao}
        produtos = {pacoteDeProdutos}
        onclick ={adicionarProdutoNoCarrinho}
      />
      <p>LabEcommerce</p>
      <Filtros/>
    </div>
  );
}

export default App;
