import {createInterface} from "readline/promises";

const terminal = createInterface({
    input: process.stdin,
    output:process.stdout,
})

const sum = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
}   

const multiply = (a: number, b: number): number => {
    return a * b;
}

const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}



const main = async () : Promise<void> => {
    const name = await terminal.question("Enter your name: ");
    const showMenu = (): void => {
    console.log(`${name}`)
    console.log("Select an operation:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("0. Exit");
}
    console.log("============================");
    console.log("Welcome to the program");
    console.log("============================");
    try {

    while (true) {
        showMenu();
        const choice =  Number(await terminal.question("Enter your choice: "));
        switch (choice) {
            case 1:
                const a1 =  Number(await terminal.question("Enter first number: "));
                const b1 =  Number(await terminal.question("Enter second number: "));
                console.log(`Result: ${sum(a1, b1)}`);
                break;
            case 2:
                const a2 =  Number(await terminal.question("Enter first number: "));
                const b2 =  Number(await terminal.question("Enter second number: "));
                console.log(`Result: ${subtract(a2, b2)}`);
                break;
            case 3:
                const a3 =  Number(await terminal.question("Enter first number: "));
                const b3 =  Number(await terminal.question("Enter second number: "));
                console.log(`Result: ${multiply(a3, b3)}`);
                break;
            case 4:
                const a4 =  Number(await terminal.question("Enter first number: "));
                const b4 =  Number(await terminal.question("Enter second number: "));
                try {
                    console.log(`Result: ${divide(a4, b4)}`);
                } catch (error) {
                    console.error(`Error: ${(error as Error).message}`);
                }
                break;
            case 0:
                console.log("Exiting the program...");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }   
    }      }
    finally {
        terminal.close();
    }
}

main();