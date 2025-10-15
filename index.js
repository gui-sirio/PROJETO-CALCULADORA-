let cor = "amarelo"

if (cor  === "verde"){
    
    console.log("siga");

} else if (cor === "amarelo") {

    console.log("atenção");
    
} else  {

    console.log("pare");
}

//constantes e variaveis var e const
//parseint,parsefloat,tostring
//3 tipos de operadores (=operador de atribuir,
// == compara o valor de duas experessoes,
//=== compara o valor e o tipo de dados 
//!== compara se os valores e tipos são diferentes 
//!= compara se os valores são diferentes 
// if pergunta abrir e fechar as {}
// else resposta 
// switch estrutura de controle com opções pré-definidas
/* window - manipulamos a aplicação
window.addEventListener('focus', event => {

    console.log('focus');

});

document.addEventListener('click', event => {

    console.log('click');
    
});*/
/*CODIGO TABUADA 
 let n =5;
    for (let i = 0; i <=10; i++){
    
        console.log(`${i} x ${n} = ${i*n}`);
    }*/ 

// template string ${js} 
// callback- função de retorno como parametros apos ação
// dom (document object model) estrutura como html se forma 
/*funcções são trechos de codigos que podem 
ser reutilizados(função pode ser usada para realizar
calculos, conversao e validação )
* classes agrupa atributos e metodos no msm lugar
return- encerra a função e retorna um valor*/

/*arrow function
calc = (x1, x2, operator) => {
    
    return eval(`${x1} ${operator} ${x2}`);

}

let resultado = calc(1, 2, "*");

console.log(resultado);*/
/*função comum
function calc(x1, x2, operator) {
    
    return eval(`${x1} ${operator} ${x2}`);

}

let resultado = calc(1, 2, "-");

console.log(resultado);*/
/*função anonima 
(function(x1, x2, operator) {
    
    return eval(`${x1} ${operator} ${x2}`);

})(1, 2, "*");

let resultado = calc(1, 2, "*");

console.log(resultado);*/

/* encapsulamentos 
public - todos acessam
protected - atributos e metodos da mesma classe e classe pai
private - somente atributos e metodos da propria classe "_"*/
//getters e setters - permitem definir como acessar os valores 
