alert("Boas vindas ao Jogo do advinha");

let numMax = 4000;
let numeroSecreto = parseInt(Math.random() * numMax + 1);
let valorRecebido;
let tentativas = 1;

//logica

while(valorRecebido != numeroSecreto){
    valorRecebido = prompt(`Escolha um número entre 1 e ${numMax}`);
    let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";

    if(numeroSecreto == valorRecebido){
        alert(`Olá, vc descobriu o número, ${numeroSecreto} e usou ${tentativas} ${palavraTentativa}`);
        break;
    }else{
        
        if(numeroSecreto > valorRecebido){
        alert("O número secreto é maior");
    }else{
        if(numeroSecreto < valorRecebido){
            alert("O número secreto é menor")
        }
    }
    tentativas++;

}
}