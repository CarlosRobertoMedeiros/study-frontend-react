import { TableHeader } from "../shared/Table"

type IndexedHeaders = {
    [chave:string]: TableHeader
}

type OrganizedItem = {
    [chave:string]: any
}

export default function organizaDados(data:any[],headers:TableHeader[]):[OrganizedItem[], IndexedHeaders]{
    const indexedHeaders: IndexedHeaders = {}

    headers.forEach(header =>{
        indexedHeaders[header.chave] = {
            ...header
        }
    })

    const headerKeysInOrdem = Object.keys(indexedHeaders)

    const OrganizedData = data.map(item =>{
        const organizedItem:OrganizedItem = {}

        headerKeysInOrdem.forEach(key => {
            organizedItem[key] = item[key]
        })

        organizedItem.$original = item
        return organizedItem
    })
    return [OrganizedData,indexedHeaders];
}