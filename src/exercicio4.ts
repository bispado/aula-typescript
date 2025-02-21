interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];

    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }

    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Gustavo", email: "gustavo@email.com" });
repo.salvar({ nome: "Ana", email: "ana@email.com" });

console.log(repo.obterTodos());
