function acaoBotao(){
var nome, idade, limite, contador
limite = prompt ("Digite quantas vezes rodará")
contador = 0
while (contador < limite){
    nome = prompt ("Digite seu nome")
    idade = prompt ("Digite sua idade")
    if( idade <= 18)
    document.getElementById("paragrafo").innerText = nome + " você é menor de idade"
    else
    document.getElementById("paragrafo").innerText = nome + " você é maior de idade"
    contador++
}
}