//Conectar com a API utilizando FETCH

fetch('https://raw.githubusercontent.com/igor-teixeira-souza/produtos-JSON/refs/heads/main/dados.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    document.getElementById('nome1').innerHTML = corpo.nome1;
    document.getElementById('preco1').innerHTML = corpo.price1;
    document.getElementById('imagem1').innerHTML = corpo.image1;

    document.getElementById('nome2').innerHTML = corpo.nome2;
    document.getElementById('preco2').innerHTML = corpo.price2;
    document.getElementById('imagem2').innerHTML = corpo.image2;

    document.getElementById('nome3').innerHTML = corpo.nome3;
    document.getElementById('preco3').innerHTML = corpo.price3;
    document.getElementById('imagem3').innerHTML = corpo.image3;

    document.getElementById('nome4').innerHTML = corpo.nome4;
    document.getElementById('preco4').innerHTML = corpo.price4;
    document.getElementById('imagem4').innerHTML = corpo.image4;

})