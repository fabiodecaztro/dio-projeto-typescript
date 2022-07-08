const exercise1 = () => {
    console.log("Exercício 1\n");
    interface Employee {
        code: number;
        name: string;
    }

    const employee1: Employee = {
        code: 1234,
        name: "John",
    };

    console.log(`Name: ${employee1.name} - Code: ${employee1.code}.`);
};

const exercise2 = () => {
    console.log("Exercício 2\n");

    interface People {
        nome: string;
        idade: number;
        job: Job;
    }

    enum Job {
        Padeiro,
        Atriz,
    }

    const people1: People = {
        nome: "Maria",
        idade: 29,
        job: Job.Atriz,
    };

    const people2: People = {
        nome: "Roberto",
        idade: 19,
        job: Job.Padeiro,
    };
    const people3: People = {
        nome: "Laura",
        idade: 32,
        job: Job.Atriz,
    };
    const people4: People = {
        nome: "Carlos",
        idade: 19,
        job: Job.Padeiro,
    };

    console.log(people3);
};

exercise1();
exercise2();
