export interface Produto{
    id: number
    nome:string
    preco:number
    estoque:number
}

const Produtos: Produto[] = [
    {
        id: 1,
        nome: 'Biscoito',
        preco: 1.25,
        estoque: 20
    },
    {
        id: 2,
        nome: 'Leite',
        preco: 0.99,
        estoque: 10
    },
    {
        id: 3,
        nome: 'Detergente',
        preco: 0.75,
        estoque: 65
    },
    {
        id: 4,
        nome: 'Água',
        preco: 0.30,
        estoque: 140
    },
    {
        id: 5,
        nome: 'Arroz',
        preco: 10.25,
        estoque: 8
    }
]

export default Produtos