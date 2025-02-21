interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;

console.log(multiplicar(2, 3)); 
console.log(multiplicar(10, 5)); 
console.log(multiplicar(7, 4)); 
