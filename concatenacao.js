var nome,numero

nome = prompt ("Digite o seu nome: ")
numero = prompt ("Digite o seu numero: ")
/* Objedo DOM, oque estiver dentro do   <p id ="parafrafo"></p>
vai ser substituido pelo que criarmos a baixo */
document.getElementById("paragrafo").innerText = nome + " : " + numero