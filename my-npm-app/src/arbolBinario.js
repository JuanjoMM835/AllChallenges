import { Nodo } from "./nodo";

export class ArbolBinario {
  constructor() {
    this.raiz = null;
  }

  insertar(valor) {
    const nuevoNodo = new Nodo(valor);
    if (!this.raiz) {
      this.raiz = nuevoNodo;
      return;
    }

    let actual = this.raiz;
    while (true) {
      if (valor < actual.valor) {
        if (!actual.izquierda) {
          actual.izquierda = nuevoNodo;
          break;
        }
        actual = actual.izquierda;
      } else {
        if (!actual.derecha) {
          actual.derecha = nuevoNodo;
          break;
        }
        actual = actual.derecha;
      }
    }
  }

  preorden(nodo = this.raiz, result = []) {
    if (!nodo) return result;
    result.push(nodo.valor);
    this.preorden(nodo.izquierda, result);
    this.preorden(nodo.derecha, result);
    return result;
  }

  inorden(nodo = this.raiz, result = []) {
    if (!nodo) return result;
    this.inorden(nodo.izquierda, result);
    result.push(nodo.valor);
    this.inorden(nodo.derecha, result);
    return result;
  }

  postorden(nodo = this.raiz, result = []) {
    if (!nodo) return result;
    this.postorden(nodo.izquierda, result);
    this.postorden(nodo.derecha, result);
    result.push(nodo.valor);
    return result;
  }

  contiene(valor) {
    let actual = this.raiz;
    while (actual) {
      if (valor === actual.valor) return true;
      actual = valor < actual.valor ? actual.izquierda : actual.derecha;
    }
    return false;
  }
}