export class Clientes {
  #nombre;
  #impuesto;
  constructor(nombre, impuesto = 0) {
    this.#nombre = nombre;
    this.#impuesto = impuesto;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(val) {
    this.#nombre = val;
  }
  get impuesto() {
    return this.#impuesto;
  }
  calcularImpuesto(montoBrutoAnual, deducciones) {
    const impuesto = (montoBrutoAnual - deducciones) * 0.21;
    if (!impuesto && impuesto !== 0) return;
    this.#impuesto = impuesto
  }
}
