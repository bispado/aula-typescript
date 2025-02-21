/**
Exercício 1
Crie uma interface chamada Carro, que contenha as seguintes propriedades:
marca (string)
modelo (string)
ano (number)
motor (opcional, string)
Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.
 */

interface Carro {
    marca: string;
    modelo: string;
    ano: number
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Nissan",
    modelo: "Versa",
    ano: 2025,
    motor: "1.6"
}

console.log(meuCarro);
console.log(`Marca: ${meuCarro.marca}`);
console.log(`Modelo: ${meuCarro.modelo}`);
console.log(`Ano: ${meuCarro.ano}`);
console.log(`Motor: ${meuCarro.motor}`);
