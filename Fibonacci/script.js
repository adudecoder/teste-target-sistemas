// Função para verificar se um número pertence à sequência de Fibonacci
function pertenceAFibonacci(numero) {
    // Verifica se o número é negativo
    if (numero < 0) {
        return false;
    }

    // Caso trivial para 0 e 1
    if (numero === 0 || numero === 1) {
        return true;
    }

    // Calcula a sequência de Fibonacci até encontrar o número ou ultrapassá-lo
    let a = 0;
    let b = 1;
    let fib = a + b;

    while (fib <= numero) {
        if (fib === numero) {
            return true;
        }
        a = b;
        b = fib;
        fib = a + b;
    }

    return false;
}

// Recebe a entrada do usuário e verifica se o número pertence à sequência de Fibonacci
const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"), 10);

if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
} else {
    if (pertenceAFibonacci(numero)) {
        alert(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        alert(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }
}