export class Impuestos {
  #montoBrutoAnual;
  #deducciones;
  constructor(montoBrutoAnual, deducciones) {
    this.#montoBrutoAnual = montoBrutoAnual;
    this.#deducciones = deducciones;
  }
  get montoBrutoAnual() {
    return this.#montoBrutoAnual;
  }
  set montoBrutoAnual(val) {
    this.#montoBrutoAnual = val;
  }
  get deducciones() {
    return this.#deducciones;
  }
  set deducciones(val) {
    this.#deducciones = val;
  }
}