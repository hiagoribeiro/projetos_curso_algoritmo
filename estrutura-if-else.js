
//aqui será criado uma função, a forma atual quando é lido quando o arquivo quando o HTML chama o arquivo
/*
var v1, v2, resultado, operacao
v1 = prompt ("Digite o primeiro valor: ")
operacao = prompt ( "Digite a operação que deseja: +, -, *, /: ")
v2 = prompt ("Digite o segundo valor: ")

if ( operacao  == "+"){
    resultado = parseint(v1)+parseint(v2)
}else if (operacao == "-"){
    resultado = parseint(v1)-parseint(v2)
} else if (operacao == "*"){
    resultado = parseint(v1)*parseint(v2)
} else if (operacao == "/"){
    resultado = parseint(v1)/parseint(v2)
} 
*/  
// a função é iniciada por uma ação
// essa função com acaobotão vai ser colocada no index para ser chamada

function acaoBotao(params){
    var v1, v2, resultado, operacao
v1 = prompt ("Digite o primeiro valor: ")
operacao = prompt ( "Digite a operação que deseja: +, -, *, /: ")
v2 = prompt ("Digite o segundo valor: ")

if ( operacao  == "+"){
    resultado = parseInt(v1)+parseInt(v2)
}else if (operacao == "-"){
    resultado = parseInt(v1)-parseInt(v2)
} else if (operacao == "*"){
    resultado = parseInt(v1)*parseInt(v2)
} else if (operacao == "/"){
    resultado = parseInt(v1)/parseInt(v2)
}
document.getElementById("paragrafo").innerText = resultado
}