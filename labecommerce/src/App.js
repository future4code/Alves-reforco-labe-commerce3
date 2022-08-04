import React from "react";
import Produtos from "./components/Home/Produtos/Produtos";
import { useState } from "react";
import { pacoteDeProdutos } from "./pacoteDeProdutos";
import Filtros from "./Componentes/Filtros/Filtros";
import Carrinho from "./components/Home/Carrinho/Carrinho";

function App() {
  const [ordenacao, setOrdenacao] = useState("Crescente");
  const [carrinho, setCarrinho] = useState([]);

  const ordenarProdutos = (event) => {
    setOrdenacao(event.target.value);
  };

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
  return (
    <div>
      <Produtos
        quantidade={pacoteDeProdutos.length}
        onChangeCabecalho={ordenarProdutos}
        ordenação={ordenacao}
        produtos={pacoteDeProdutos}
        onclick={adicionarProdutoNoCarrinho}
      />
      <p>LabEcommerce</p>
      <Carrinho produtos={carrinho} remove={removeProdutoCarrinho} />
      <Filtros />
    </div>
  );
}

export default App;
