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

exercise1();
