let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor");
        }else{
            exibirTextoNaTela("p" ,"O número secreto é maior");
        }

        tentativas++;
        limparChute();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);

        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparChute();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function limparChute(){
    chute = document.querySelector("input");
    chute.value = "";
}


    
//1
//function primeiroProg(){
//    console.log("Olá, mundo!");
//}

//2
//function boasVindas(nome){
//    console.log(nome);
//}
//boasVindas("Tiago");

//3
//function dobraNumero(numero){
//    return numero * 2;
//}

//console.log(dobraNumero(5));

//4
//function mediaNumeros(num1, num2, num3){
//    return (num1 + num2 + num3)/3;
//}

//console.log(mediaNumeros(4,5,7));

//5
//function verificaMaior(num1, num2){
//    if (num1 >= num2){
//        return num1;
//    } else {
//        return num2;
//    }
//}

//console.log(verificaMaior(4,4));

//6
//function multiplicaNumero(numero){
//    return numero * numero;
//}

//console.log(multiplicaNumero(5));


//1
/*function calculaIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}


console.log(calculaIMC(78.5, 1.82));*/

//2
/*function calculaFatorial(numero){
    let fatorial = numero;
    while (numero > 1){
        numero--;        
        fatorial = fatorial * numero;
        
    }

    return fatorial;
    
}
console.log(calculaFatorial(5));*/

//3
/*function converteValor(valor){
    let valorConvertido = valor * 4.80
    return valorConvertido;
}

console.log(converteValor(250.2));*/

//4
/*function calculaMedidas(altura, largura){
    let area = altura * largura;
    console.log(area);
    let perimetro = (altura * 2) + (largura * 2);
    console.log(perimetro);
}

(calculaMedidas(2, 5));*/

//5
/*function calculaSalaCircular(raio){
    let areaCirculo = 3.14 * (raio * raio);
    console.log(areaCirculo);
    let perimetroCirculo = 2 * 3.14 * raio;
    console.log(perimetroCirculo);
}

(calculaSalaCircular(2.5));*/

//6
/*function tabuada(numero){
    let controle = 0;
    while (controle !=10){
        controle++;
        let resultado = numero * controle;
        console.log(controle + " * " + numero + " = " + resultado);
        
    }
}

tabuada(8);*/

//1
//listaGenerica = [];

//2
//linguaguensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

//3
//linguaguensDeProgramacao.push('Java', 'Ruby', 'GoLang');

//4
/*listaNomes = ['Tiago', 'Claudia', 'Josevalda'];
console.log(listaNomes[0]);

//5
listaNomes = ['Tiago', 'Claudia', 'Josevalda'];
console.log(listaNomes[1]);

//6
listaNomes = ['Tiago', 'Claudia', 'Josevalda'];
console.log(listaNomes[listaNomes.length - 1]);*/