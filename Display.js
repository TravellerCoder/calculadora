class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoDeOperacion = undefined
        this.valorActual = "";
        this.valorAnterior = "";
        this.signos = {
            sumar : '+',
            restar : '-',
            multiplicar : 'X',
            dividir : '%'

        }
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString(); 
        this.imprimirValores();
    }

    clear() {
        this.valorActual = this.valorActual.toString().slice(0 ,-1);
        this.imprimirValores();
    }

    clearAll() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoDeOperacion = undefined;
        this.imprimirValores()
    }

    computar(tipo) {
        this.tipoDeOperacion !== 'igual' && this.calcular()
        this.tipoDeOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores()
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);       
        const valorActual = parseFloat(this.valorActual);
        
        if(isNaN(valorActual) || isNaN(valorAnterior)) return 
        this.valorActual = this.calculadora[this.tipoDeOperacion](valorAnterior, valorActual);
        this.valorActual = this.calculadora[this.tipoDeOperacion](valorAnterior, valorActual).toString();
        

    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent =  `${this.valorAnterior} ${this.signos[this.tipoDeOperacion] || ''}`;
    }
}