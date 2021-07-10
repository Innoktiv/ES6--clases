import Cliente from './src/cliente.js'
import Impuestos from './src/impuestos.js'

let impuestos1 = new Impuestos(200, 50);
console.log(impuestos1.calcularImpuesto());

let cliente1 = new Cliente('Claudio Delgado');
console.log(cliente1.nombre);
cliente1.nombre = 'Juan Perez';
console.log(cliente1.nombre);