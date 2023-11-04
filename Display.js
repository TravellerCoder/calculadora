class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.displayValorActual = "";
        this.displayValorAnterior = ""
    }

    agregarNumero(numero) {
        this.valorActual = numero; 
    }
}