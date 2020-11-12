/*
    Explicação simples sobre utilização do map
*/
const nomes = ['Daniel','Thiago','William'];

const nomesComIndex = nomes.map((nome,indice) =>{
    console.log(nome, indice);
    return nome +" "+ indice;
})

console.log(nomesComIndex);