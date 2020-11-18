import React from 'react';
import './Table.scss';
import organizaDados from '../../utils/organizeDataForTable';

export interface TableHeader{
    chave:string
    valor:string;
    alinhaaDireita?:boolean
}

declare interface TableProps{
    headers: TableHeader[]
    data: any[]

    ativaAcoes?:boolean
    aoDeletar?:(item:any) =>void
    aoDetalhar?:(item:any) =>void
    aoEditar?:(item:any) =>void
}

const Table: React.FC<TableProps> = (props) =>{
    const [OrganizedData,indexedHeaders] = organizaDados(props.data , props.headers)
    return <table className="AppTable">   
        <thead>
            <tr>
                {
                    props.headers.map(cabecalho =>
                        <th 
                            className={cabecalho.alinhaaDireita ? 'right':''} 
                            key={cabecalho.chave}
                        >
                            {cabecalho.valor}
                        </th>
                    )
                }
            </tr>
        </thead>
        <tbody>
        {
        OrganizedData.map((row, i) => {
          return <tr key={i}>
            {
              Object
                .keys(row)
                .map((item, i) =>
                  item !== '$original'
                    ? <td
                        key={row.$original.id + i}
                        className={indexedHeaders[item].alinhaaDireita ? 'right' : ''}
                      >
                        { row[item] }
                      </td>
                    : null
                )
            }
          </tr>
        })
      }
        </tbody>
    
    </table>
}

export default Table

