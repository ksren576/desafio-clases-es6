import { Clientes  } from './cliente.js';
import { Impuestos } from './impuesto.js';

const inputNombre = document.getElementById("inputNombre");
const inputMontoBrutoAnual = document.getElementById("inputMontoBrutoAnual");
const inputDeducciones = document.getElementById("inputDeducciones");
const boton = document.getElementById("boton");
const calculo = document.getElementById("calculo");

boton.addEventListener("click", () => {
  // Normalizaciones
  const inputMontoBrutoAnualNormalizado = Number(inputMontoBrutoAnual.value);
  const inputDeduccionesNormalizado = Number(inputDeducciones.value);
  const inputNombreNormalizado = inputNombre.value;

  if (
    !inputNombreNormalizado ||
    !inputMontoBrutoAnualNormalizado ||
    !inputDeduccionesNormalizado
  ) {
    alert("Escribe todos los datos");
    return;
  }
    const Cliente1 = new Clientes(inputNombreNormalizado);
  const Impuesto1 = new Impuestos(
    inputMontoBrutoAnualNormalizado,
    inputDeduccionesNormalizado
  );

  Cliente1.calcularImpuesto(
    Impuesto1.montoBrutoAnual,
    Impuesto1.deducciones
  );

  calculo.innerHTML = `<h1>El impuesto calculado para ${Cliente1.nombre} es: ${Cliente1.impuesto}</h1>`;
});