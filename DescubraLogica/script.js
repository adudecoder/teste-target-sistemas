// Função para encontrar o próximo número na sequência
function encontrarProximoElemento() {
    // a) Sequência de números ímpares
    const sequenciaImpares = [1, 3, 5, 7];
    const proximoImpar = sequenciaImpares[sequenciaImpares.length - 1] + 2;

    // b) Sequência de potências de 2
    const sequenciaPotenciasDe2 = [2, 4, 8, 16, 32, 64];
    const proximoPotenciaDe2 = sequenciaPotenciasDe2[sequenciaPotenciasDe2.length - 1] * 2;

    // c) Sequência de quadrados de números naturais
    const sequenciaQuadrados = [0, 1, 4, 9, 16, 25, 36];
    const proximoQuadrado = Math.pow(Math.sqrt(sequenciaQuadrados[sequenciaQuadrados.length - 1]) + 1, 2);

    // d) Sequência de quadrados de números pares
    const sequenciaQuadradosPares = [4, 16, 36, 64];
    const proximoQuadradoPar = Math.pow(Math.sqrt(sequenciaQuadradosPares[sequenciaQuadradosPares.length - 1]) + 2, 2);

    // e) Sequência de Fibonacci
    const sequenciaFibonacci = [1, 1, 2, 3, 5, 8];
    const proximoFibonacci = sequenciaFibonacci[sequenciaFibonacci.length - 1] + sequenciaFibonacci[sequenciaFibonacci.length - 2];

    // f) Sequência de números inteiros sem o dígito 3
    const sequenciaSem3 = [2, 10, 12, 16, 17, 18, 19];
    let proximoSem3 = sequenciaSem3[sequenciaSem3.length - 1] + 1;
    while (proximoSem3.toString().includes('3')) {
        proximoSem3++;
    }

    // Exibir os resultados
    alert(`a) O próximo elemento é: ${proximoImpar}`);
    alert(`b) O próximo elemento é: ${proximoPotenciaDe2}`);
    alert(`c) O próximo elemento é: ${proximoQuadrado}`);
    alert(`d) O próximo elemento é: ${proximoQuadradoPar}`);
    alert(`e) O próximo elemento é: ${proximoFibonacci}`);
    alert(`f) O próximo elemento é: ${proximoSem3}`);
}

// Chamar a função para encontrar e exibir os próximos elementos
encontrarProximoElemento();
