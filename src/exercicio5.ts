type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Mensagem do servidor: ${resposta}`);
    } else {
        console.log(resposta ? "Operação bem-sucedida!" : "Falha na operação.");
    }
}

processarResposta("Tudo certo!"); // Mensagem do servidor: Tudo certo!
processarResposta(true); // Operação bem-sucedida!
processarResposta(false); // Falha na operação.
