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
    let resultado = document.getElementById("resultado7");
    resultado.innerHTML;


    for (i = 0; i < 11; i++) {

        contador = num1 + " x " + i + " = " + (num1 * i) + "<br>";
        resultado.innerHTML += contador;

    }



}

function gerarContador() {

    let resultado = document.getElementById("resultado8");
    resultado.innerHTML = "";

    for (let i = 1; i <= 10; i++) {

        let paragrafo = document.createElement("p");
        paragrafo.textContent = i;
        resultado.appendChild(paragrafo);

    }


}

function verificarMedia() {

    let num1 = Number(document.getElementById("n3").value);
    let num2 = Number(document.getElementById("n4").value);
    let num3 = Number(document.getElementById("n5").value);
    let media = (num1 + num2 + num3) / 3;

    if (media >= 6) {

        document.getElementById("resultado9").innerText = "Aprovado";

    }

    else {

        document.getElementById("resultado9").innerText = "Reprovado";

    }

}

function converterTemperatura() {

    let num = Number(document.getElementById("n6").value);
    let resultado = (num * 9 / 5) + 32;

    document.getElementById("resultado10").innerText = resultado;

}

function imprimirDia() {

    let num = Number(document.getElementById("n7").value);

    if (num < 1 || num > 7) {

        document.getElementById("resultado11").innerText = "Número inválido. Digite um número de 1 a 7";

    }

    else if (num == 1) {

        document.getElementById("resultado11").innerText = "Domingo";

    }

    else if (num == 2) {

        document.getElementById("resultado11").innerText = "Segunda-feira";

    }

    else if (num == 3) {

        document.getElementById("resultado11").innerText = "Terça-feira";

    }

    else if (num == 4) {

        document.getElementById("resultado11").innerText = "Quarta-feira";

    }

    else if (num == 5) {

        document.getElementById("resultado11").innerText = "Quinta-feira";

    }

    else if (num == 6) {

        document.getElementById("resultado11").innerText = "Sexta-feira";

    }

    else if (num == 7) {

        document.getElementById("resultado11").innerText = "Sábado";

    }

}

function verificarSenha() {

    let senha = Number(document.getElementById("n8").value);

    if (senha == 1234) {

        document.getElementById("resultado12").innerText = "Acesso permitido!";

    }

    else {

        document.getElementById("resultado12").innerText = "Senha incorreta.";

    }

}

function gerarContagem() {

    let resultado = document.getElementById("resultado13");
    let contagem = "";

    for (let i = 10; i >= 1; i--) {

        contagem += i + "<br>";
        resultado.innerHTML = contagem;

    }



}