var nome, nota01, nota02;
nome = prompt ("escreva seu nome")
nota01 = prompt("escreva a nota 01")
nota02 = prompt ("escreva a nota 02")
media = (parseInt(nota01) + parseInt(nota02)) / 2;

if (media >= 50) 
    alert ("aprovado" + media)

else
alert("Reprovado"+ media)
