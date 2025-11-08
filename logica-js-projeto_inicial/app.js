let dificuldade= prompt("Escolha a dificuldade do jogo: \n 1- Fácil | 2- Médio | 3- Difícil | 4- HardCore");
let numero
let nMax;
if (dificuldade == 1) {
     numero = parseInt(Math.random()* 10 + 1);
     nMax = 10
}else if (dificuldade ==2) {
     numero = parseInt(Math.random()* 100+ 1);
     nMax = 100;
}else if (dificuldade == 3) {
     numero = parseInt(Math.random()* 1000 + 1);
     nMax = 1000;
}else if (dificuldade == 4) {
     numero = parseInt(Math.random()* 100000 + 1);
     nMax = 100000;
}

let tentativas = 0;
let chute = prompt(`Digite um número entre 1 e ${nMax}`);

while(chute != numero){
    if(chute < numero){
        chute = prompt(`O número é maior que ${chute} \n Digite um novo número:`);
    } else if(chute > numero){
         chute = prompt(`O número é menor que ${chute} \n Digite um novo número:`);
    }
    tentativas++;
}

if(chute == numero){
    palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
    alert(`Parabéns, você acertou em ${tentativas} ${palavraTentativa}!`);
}

