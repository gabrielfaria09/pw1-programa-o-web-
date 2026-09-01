const produtos = [
    ['Notebook Dell', '500 GB SSD', '8 GB RAM', 'R$ 2200']
    ['Notebook Lenovo', '240 GB HD', '4 GB RAM', 'R$ 3000']
    ['Notebook Samsung', '1 TB SSD', '16 GM RAM', 'R$ 5000']
    ['MAC', '512 GB HD', '8 GB RAM', 'R$ 1340']
];

const catalogo = document.getElementById('catalogo');

produtos.forEach((produto) => {
    produto(item());
    const paragrafo = document.createElement('p');
    const divisao = document.createElement('div');
    const juntarDiv = catalogo.append(divisao);
    const espaco = document.createElement('br');
    const juntarEspaco = catalogo.append(espaco);
    const juntarP = divisao.append(paragrafo);
})

/*function produto(){
    //const paragrafo = document.createElement('p');
    const divisao = document.createElement('div');
    const juntarDiv = catalogo.append(divisao);
    const espaco = document.createElement('br');
    const juntarEspaco = catalogo.append(espaco);
    //const juntarP = divisao.append(paragrafo);
}*/