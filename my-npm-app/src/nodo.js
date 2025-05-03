
export class Nodo {
  constructor(titulo, link = "#", componente = null) {
    this.titulo = titulo;
    this.link = link;
    this.componente = componente;
    this.hijos = [];
  }

  agregarHijo(nodo) {
    this.hijos.push(nodo);
  }
}