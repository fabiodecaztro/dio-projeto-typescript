"use strict";
const exercise1 = () => {
    console.log("Exercício 1\n");
    const employee1 = {
        code: 1234,
        name: "John",
    };
    console.log(`Name: ${employee1.name} - Code: ${employee1.code}.`);
};
const exercise2 = () => {
    console.log("Exercício 2\n");
    let Job;
    (function (Job) {
        Job[Job["Padeiro"] = 0] = "Padeiro";
        Job[Job["Atriz"] = 1] = "Atriz";
    })(Job || (Job = {}));
    const people1 = {
        nome: "Maria",
        idade: 29,
        job: Job.Atriz,
    };
    const people2 = {
        nome: "Roberto",
        idade: 19,
        job: Job.Padeiro,
    };
    const people3 = {
        nome: "Laura",
        idade: 32,
        job: Job.Atriz,
    };
    const people4 = {
        nome: "Carlos",
        idade: 19,
        job: Job.Padeiro,
    };
    console.log(people3);
};
const exercise3 = () => {
    let botaoAtualizar = document.getElementById("atualizar-saldo");
    let botaoLimpar = document.getElementById("limpar-saldo");
    let soma = document.getElementById("soma");
    let campoSaldo = document.getElementById("campo-saldo");
    campoSaldo.innerHTML = "0";
    function somarAoSaldo(pegaSoma) {
        let resultado = Number(campoSaldo.innerHTML) + pegaSoma;
        campoSaldo.innerHTML = resultado.toString();
        limpaSoma();
    }
    function limpaSoma() {
        soma.value = "";
    }
    function limparSaldo() {
        campoSaldo.innerHTML = "";
    }
    botaoAtualizar.addEventListener("click", function () {
        somarAoSaldo(Number(soma.value));
    });
    botaoLimpar.addEventListener("click", function () {
        limparSaldo();
    });
};
exercise1();
exercise2();
exercise3();
