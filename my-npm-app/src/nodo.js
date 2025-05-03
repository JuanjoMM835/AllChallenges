
export class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
    isleaf( ){
        if ( this.izquierda === null && this.derecha === null ){
            return true; 
        }else { 
            return false ; 
        }
    }
  }