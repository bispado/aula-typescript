interface Estudante {
    nome: string;
    curso: string;
}

interface Trabalhador {
    empresa: string;
    cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const pessoa: EstudanteTrabalhador = {
    nome: "Gustavo",
    curso: "ADS",
    empresa: "TechCorp",
    cargo: "Desenvolvedor"
};

console.log(pessoa);
