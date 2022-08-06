import React from "react";
import Produtos from "./components/Home/Produtos/Produtos";
import { useState } from "react";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Carrinho from "./components/Home/Carrinho/Carrinho";
import styled from "styled-components";
import Filtros from "./components/Filtros/Filtros";

export const ConjuntoDeComponentes = styled.div`
border: 1px solid red;
display: grid;
grid-template-columns: 1fr 3fr 1fr;
gap: 16px;

`

function App() {
  const [ordenacao, setOrdenacao] = useState("Crescente");
  const [carrinho, setCarrinho] = useState([]);
  const [filtroMinimo, setFiltroMinimo] = useState(0)
  const [filtroMaximo, setFiltroMaximo] = useState(100000)
  const [filtroMBuscaPorNome, setFiltroBuscaPorNome] = useState("")

  


  const manipularValorDoFiltroMinimo = (event) => {
       setFiltroMinimo (event.target.value)

  }
 
  const manipularValorDoFiltroMaximo = (event) => {
    
    setFiltroMaximo (event.target.value)

  }

  const manipularValorDoFiltroBuscaPorNome = (event) => {
   
    setFiltroBuscaPorNome (event.target.value)

  }
  
 
  

  const adicionarProdutoNoCarrinho = (produto) => {
    let produtoCarrinho;
    const testeLogico = carrinho.find(item => produto.id === item.id)
    if (testeLogico) {
      const novoCarrinho = carrinho.map((id) => {
        if (produto.id === id.id) {
          return {
            ...id, 
            quantidade: id.quantidade + 1,
            priceTotal: id.priceTotal + produto.price,
          }
        }
        return id 
      })
      setCarrinho(novoCarrinho)
    } else {
      produtoCarrinho = {
        ...produto,
        quantidade: 1,
        priceTotal: produto.price,
        
      };setCarrinho([...carrinho, produtoCarrinho])
    };
  };

  const removeProdutoCarrinho = (produto, id) => {
    const testeLogico = carrinho.find(item => produto.id === item.id && item.quantidade > 1)
    if (testeLogico) {
      const novoCarrinho = carrinho.map((id) => {
        if (produto.id === id.id) {
          return {
            ...id, 
            quantidade: id.quantidade - 1,
            priceTotal: id.priceTotal - produto.price,
          }
        }
        return id 
      })
      setCarrinho(novoCarrinho)
    } else {
      setCarrinho(carrinho.filter((produto) => id !== produto.id));
    }
  };

  const filtrarProdutos = () => {

    const pacotesFiltradosMinimo = pacoteDeProdutos.filter((produto) => {

      if (filtroMinimo){
        return produto.price >= filtroMinimo
      }
    })
  
    const pacotesFiltradosMaximo = pacotesFiltradosMinimo.filter((produto) =>{
  
      if (filtroMaximo){
        return produto.price <= filtroMaximo
      }else{
        return produto
      }
    })
  
    
    const pacoteFiltrado = pacotesFiltradosMaximo.filter ((produto) => {
  
      return produto.name.includes(filtroMBuscaPorNome)
  
    })
  
    return pacoteFiltrado

  }

  const ordenarProdutos = (event) => {
    setOrdenacao(event.target.value);
  };

  const produtosFiltrados = filtrarProdutos()

  console.log(produtosFiltrados)
  return (
    
    <ConjuntoDeComponentes>
      <Filtros
        minimo={filtroMinimo}
        maximo={filtroMaximo}
        buscaPorNome={filtroMBuscaPorNome}
        onChangeMinimo = {manipularValorDoFiltroMinimo}
        onChangeMaximo = {manipularValorDoFiltroMaximo}
        onChangebuscaPorNome ={manipularValorDoFiltroBuscaPorNome}

        />
      <Produtos
        quantidade={pacoteDeProdutos.length}
        onChangeCabecalho={ordenarProdutos}
        ordenacao={ordenacao}
        produtos={produtosFiltrados}
        onclick={adicionarProdutoNoCarrinho}
      />
      
      <Carrinho produtos={carrinho} remove={removeProdutoCarrinho} />
    </ConjuntoDeComponentes>

  );
}

export default App;
