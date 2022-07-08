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
exercise1();
exercise2();
