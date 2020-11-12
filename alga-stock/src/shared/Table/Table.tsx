import React from 'react';
import './Table.scss';
import Produtos from './Table.mockdata';

const headers = [
    {chave: 'nome' , valor:'Produto'},
    {chave: 'preco' , valor:'Preço'},
    {chave: 'estoque' , valor:'Estoque Disponível'},
]



const Table = () =>{
    return <table className="AppTable">   
        <thead>
            <tr>
                {
                    headers.map(cabecalho =><th key={cabecalho.chave}>{cabecalho.valor}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
               Produtos.map(produto => <tr>
                   <td>{ produto.nome }</td>
                   <td>{ produto.preco }</td>
                   <td className="right">{ produto.estoque }</td>
                </tr>)
            }
        </tbody>
    
    </table>
}

export default Table

