function somar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado: " + (num1 + num2);

}

function verificar() {

    let idade = Number(document.getElementaryById("idade").value);

    if (idade >= 18) {

        document.getElementById("resultado2").innerText = "Maior de Idade";

    }

    else {
        document.getElementById("resultado2").innerText = "Memor de Idade";
    }


}