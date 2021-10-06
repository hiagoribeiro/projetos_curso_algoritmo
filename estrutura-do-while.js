function acaoBotao(){
var sairLop, v1,v2

do{
    v1 = prompt ("Digite o primeiro valor:")
    v2 = prompt ("Digite o segundo valor:")
    
    document.getElementById("paragrafo").innerText = "O valor somado é: " + (parseInt(v1) + parseInt(v2))

    sairLop = prompt ("Deseja sair do loop? (S/N)")
    
}while (sairLop == "N")

}