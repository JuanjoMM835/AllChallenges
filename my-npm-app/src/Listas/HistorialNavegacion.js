import NodoPagina from './NodoPagina';

export default class HistorialNavegacion {
  constructor() {
    this.cabeza = null;
    this.cola = null;
    this.actual = null;
    this.longitud = 0;
  }

  append(valor) {
    const nuevoNodo = new NodoPagina(valor);
    
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
    } else {
      nuevoNodo.anterior = this.cola;
      this.cola.siguiente = nuevoNodo;
    }
    
    this.cola = nuevoNodo;
    this.actual = nuevoNodo;
    this.longitud++;
    return this;
  }

  // Métodos adicionales para navegación
  atras() {
    if (this.actual?.anterior) {
      this.actual = this.actual.anterior;
      return this.actual.valor;
    }
    return null;
  }

  adelante() {
    if (this.actual?.siguiente) {
      this.actual = this.actual.siguiente;
      return this.actual.valor;
    }
    return null;
  }

  print() {
    let actual = this.cabeza;
    const valores = [];
    
    while (actual) {
      valores.push(actual === this.actual ? `[${actual.valor}]` : actual.valor);
      actual = actual.siguiente;
    }
    
    return valores.join(" ⇄ ");
  }
}