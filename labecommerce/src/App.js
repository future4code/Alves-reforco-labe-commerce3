import React from "react";
import Filtros from "./components/Filtros/Filtros";
import Produtos from "./components/Home/Produtos/Produtos";
import CartaoDosProdutos from "./components/Home/CartaoDosProdutos/CartaoDosProdutos";


function App() {
  return (
    <div>
      <p>LabEcommerce</p>
      <Produtos/>
      <Filtros/>
      <CartaoDosProdutos/>
    </div>
  );
}

export default App;
