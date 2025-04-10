import NodoCancion from './NodoCancion';

export default class ListaCanciones {
  constructor() {
    this.cabeza = null;
    this.cola = null;
    this.longitud = 0;
  }

  // Añadir canción al final append tal cual como en las diapos  
  append(valor) {
    const nuevoNodo = new NodoCancion(valor);
    
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
      this.cola = nuevoNodo;
    } else {
      this.cola.siguiente = nuevoNodo;
      this.cola = nuevoNodo;
    }
    
    this.longitud++;
    return this;
  }

  // Buscar canción por peek 
  peek(valor, actual = this.cabeza) {
    if (!actual) return false;
    if (actual.valor === valor) return true;
    return this.peek(valor, actual.siguiente);
  }

  // Obtener tamaño
  size() {
    return this.longitud;
  }

  // Eliminar canción este estuvo dificil de hacer 
  remove(valor, actual = this.cabeza, anterior = null) {
    if (!actual) return false;
    
    if (actual.valor === valor) {
      if (!anterior) {
        this.cabeza = actual.siguiente;
        if (!this.cabeza) this.cola = null;
      } else {
        anterior.siguiente = actual.siguiente;
        if (!actual.siguiente) this.cola = anterior;
      }
      this.longitud--;
      return true;
    }
    
    return this.remove(valor, actual.siguiente, actual);
  }

  // Imprimir lista
  print() {
    let actual = this.cabeza;
    const valores = [];
    
    while (actual) {
      valores.push(actual.valor);
      actual = actual.siguiente;
    }
    
    return valores.join(" -> "); // el join ps une como los valores que tengo que es un arreglo y los une mediante el simbolo-> es como pa indicarte 
    // que se esta haciendo una lista sencilla , porque solo puedo ir hacia el siguiente nodo , lo mismo ocurre en la doble lista enlazada , solo que 
    // alli si puedo ir de atras hacia adelante :).
  }
}