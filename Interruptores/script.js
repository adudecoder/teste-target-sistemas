// Simulação das lâmpadas e interruptores
class Sala {
    constructor() {
        this.lampadas = {
            A: { estado: 'desligada', quente: false },
            B: { estado: 'desligada', quente: false },
            C: { estado: 'desligada', quente: false }
        };
    }

    ligarLuz(nome) {
        if (this.lampadas[nome]) {
            this.lampadas[nome].estado = 'ligada';
            this.lampadas[nome].quente = true; // Assume que fica quente quando ligada
        }
    }

    desligarLuz(nome) {
        if (this.lampadas[nome]) {
            this.lampadas[nome].estado = 'desligada';
        }
    }

    resfriarLuz(nome) {
        if (this.lampadas[nome]) {
            this.lampadas[nome].quente = false; // Assume que a luz esfria após um tempo
        }
    }

    mostrarLuz() {
        for (const [nome, info] of Object.entries(this.lampadas)) {
            alert(`Lâmpada ${nome}: Estado = ${info.estado}, Quente = ${info.quente}`);
        }
    }
}

// Criação das salas
const salaDasLampadas = new Sala();

// Simular o controle dos interruptores
// Ligando o primeiro interruptor e deixando-o ligado por um tempo
salaDasLampadas.ligarLuz('A');
setTimeout(() => {
    salaDasLampadas.desligarLuz('A'); // Desliga o primeiro interruptor
    salaDasLampadas.ligarLuz('B'); // Liga o segundo interruptor
    // Segunda ida para verificar as lâmpadas
    salaDasLampadas.mostrarLuz();
}, 10000); // Simula o tempo em milissegundos que a lâmpada A fica ligada
