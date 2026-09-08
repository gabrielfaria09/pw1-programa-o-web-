const produtos = [
    ['Notebook Dell', '500 GB SSD', '8 GB RAM', 'R$ 2200'],
    ['Notebook Lenovo', '240 GB HD', '4 GB RAM', 'R$ 3000'],
    ['Notebook Samsung', '1 TB SSD', '16 GM RAM', 'R$ 5000'],
    ['MAC', '512 GB HD', '8 GB RAM', 'R$ 1340'],
];

const catalogo = document.getElementById('catalogo');
const pesquisa = document.getElementById('pesquisa').value;

produtos.forEach(produto => {
    const [nome,armazenamento, memória, preço] = produto;
    //const paragrafo = document.createElement('p');
    const divisao = document.createElement('div');
    divisao.className = "card";

    divisao.innerHTML = `<h4>${nome}</h4>
                            <p>${armazenamento}</p>
                            <p>${memória}</p>
                            <p>${preço}</p>`;
    
    catalogo.append(divisao);
});