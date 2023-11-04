class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoDeOperacion = undefined
        this.valorActual = "";
        this.valorAnterior = ""
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


    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}