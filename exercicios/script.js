function somarNumeros() {
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    document.getElementById("resultado1").innerText = "Resultado: " + (num1 + num2);

}

function verificarIdade() {

    let idade = Number(document.getElementById("idade").value);
    let verificacao;

    if (idade >= 18) {

        verificacao = "Maior de idade";

    }

    else {
        
        verificacao = "Menor de idade";

    }

    document.getElementById("resultado2").innerText = verificacao;

}

function contarCaracteres() {

    let texto = document.getElementById("texto").value;
    let resultado = texto.length;

    document.getElementById("resultado3").innerText = resultado;

}

function verificarParImpar() {

    let num = Number(document.getElementById("num").value);
    let verificacao;

    if (num % 2 == 0) {

        verificacao = "É par";

    }

    else {

        verificacao = "É ímpar";

    }

    document.getElementById("resultado4").innerText = verificacao;

}

function transformarCaixaAlta() {

    let nome = document.getElementById("nome").value;
    let transformar = nome.toUpperCase();

    document.getElementById("resultado5").innerText = transformar;

}

function verificarMaior() {

    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    let verificacao;

    if (num1 > num2) {

        verificacao = num1 + " é maior que " + num2;

    }

    else if (num2 > num1) {

        verificacao = num2 + " é maior que " + num1;

    }

    else {

        verificacao = "Os dois números são iguais";

    }

    document.getElementById("resultado6").innerText = verificacao;

}

function gerarTabuada() {

    let num1 = Number(document.getElementById("num1").value);
    let i;
    let contador;

    for (i = 0; i < 11; i++) {

        contador = num1 + " * " + i;
        document.getElementById("resultado7").innerText = contador;

    }

    

}

function gerarContador() {

}