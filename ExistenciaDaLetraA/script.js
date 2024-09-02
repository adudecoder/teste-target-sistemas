// Função para contar a ocorrência da letra 'a' (maiúscula ou minúscula) em uma string
function contarLetraA(str) {
    // Usa uma expressão regular para encontrar todas as ocorrências de 'a' ou 'A'
    const regex = /a/gi;
    const matches = str.match(regex); // match retorna um array com todas as ocorrências encontradas

    // Se não encontrar nenhuma ocorrência, retorna 0
    return matches ? matches.length : 0;
}

// String de exemplo ou entrada do usuário
const entrada = prompt("Digite uma string para verificar a ocorrência da letra 'a':");

// Verifica se a entrada é uma string válida
if (entrada !== null) {
    const quantidade = contarLetraA(entrada);
    alert(`A letra 'a' ocorre ${quantidade} vez(es) na string.`);
} else {
    alert("Nenhuma string foi fornecida.");
}