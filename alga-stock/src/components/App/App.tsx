import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container'
import Table, { TableHeader } from '../../shared/Table'
import Produtos from '../../shared/Table/Table.mockdata';


const headers:TableHeader[] = [
  {chave: 'id' , valor:'#'},
  {chave: 'nome' , valor:'Produto'},
  {chave: 'preco' , valor:'Preco', alinhaaDireita: true},
  {chave: 'estoque' , valor:'Estoque Disponivel', alinhaaDireita: true}
]
  
function App() {

  return (
    <div className="App">
      <Header title="AlgaStock" />

      <Container>

        <Table 
          headers={headers}
          data={Produtos}
        />
       

      </Container>
      
    </div>
  );
}

export default App;
