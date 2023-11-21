function calcularIdade() {
    var dia = document.getElementById("diaNascimento").value;
    var mes = document.getElementById("mesNascimento").value;
    var ano = document.getElementById("anoNascimento").value;

    var dataNascimento = new Date(ano, mes - 1, dia);

    var dataAtual = new Date();

    // Esta data vem em milissegundos
    var diff = dataAtual - dataNascimento;
    
    // Transformando de milissegundos em ano
    var idadeEmAnos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    if (idadeEmAnos <= 10) {
        document.getElementById("resultado").innerHTML = "A pessoa é uma criança e tem " + idadeEmAnos;
    }

    if (idadeEmAnos >= 11 && idadeEmAnos <= 15) {
        document.getElementById("resultado").innerHTML = "A pessoa é um adolescente e tem " + idadeEmAnos;
    }

    if (idadeEmAnos >= 16 && idadeEmAnos <= 25) {
        document.getElementById("resultado").innerHTML = "A pessoa é um jovem e tem " + idadeEmAnos;
    }

    if (idadeEmAnos >= 26 && idadeEmAnos <= 60) {
        document.getElementById("resultado").innerHTML = "A pessoa é um adulto e tem " + idadeEmAnos;
    }

    if (idadeEmAnos > 60) {
        document.getElementById("resultado").innerHTML = "A pessoa é um idoso e tem " + idadeEmAnos;
    }
}