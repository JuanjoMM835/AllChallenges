// Defino con ejemplos  las funciones que estaban en la presentacion que nos diste , hemm lo hice en un solo archivo 
// porque creo que era demasiado largo hacerlo por archivos diferentes y probarlos.
//Si en dado caso deseas que lo haga asi me mandas un correo profe , asi lo reviso y lo hago de esa manera, 
//Gracias por recordarme que me faltaban estos archivos :). 

const frutas = ['manzana', 'banana'];

//Métodos básicos de modificación
// push() - Añade elementos al final
frutas.push('naranja'); // ['manzana', 'banana', 'naranja']

// pop() - Elimina el último elemento
frutas.pop(); // ['manzana', 'banana']

// unshift() - Añade elementos al inicio
frutas.unshift('pera'); // ['pera', 'manzana', 'banana']

// shift() - Elimina el primer elemento se elimina pera
frutas.shift(); // ['manzana', 'banana']

// splice() - Modifica el array (añadir/eliminar) añade kiwi en el centro 
frutas.splice(1, 0, 'kiwi'); // ['manzana', 'kiwi', 'banana']

// fill() - Rellena elementos con un valor
const numeros = [1, 2, 3];
numeros.fill(0); // [0, 0, 0]

//Métodos de acceso (no modifican el array original)

// at() - Accede a elementos (permite índices negativos)
const arr = [10, 20, 30];
arr.at(-1); // 30 (último elemento)

// concat() - Combina arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
arr1.concat(arr2); // [1, 2, 3, 4]

// slice() - Extrae una porción , es como agarrar el que este en dicha posicion algo asi jaja 
const animales = ['perro', 'gato', 'ratón'];
animales.slice(1, 3); // ['gato', 'ratón']

// join() - Une elementos en string
animales.join(', '); // "perro, gato, ratón"

// toString() - Convierte a string
animales.toString(); // "perro,gato,ratón"

// toLocaleString() - Versión localizada
const precios = [1000, 2000];
precios.toLocaleString('es-ES'); // "1.000,2.000"


//Métodos de búsqueda

const numeross = [1, 2, 3, 4, 5, 2];

// indexOf() - Primer índice del elemento
numeross.indexOf(2); // 1

// lastIndexOf() - Último índice del elemento
numeross.lastIndexOf(2); // 5

// includes() - Comprueba si existe
numeross.includes(3); // true

// find() - Primer elemento que cumple condición
numeross.find(n => n > 3); // 4

// findIndex() - Índice del primer elemento que cumple
numeross.findIndex(n => n > 3); // 3

// findLast() - Último elemento que cumple 
numeross.findLast(n => n < 4); // 2

// findLastIndex() - Índice del último que cumple 
numeross.findLastIndex(n => n < 4); // 5


//Métodos de iteración

const palabras = ['hola', 'mundo', 'javascript'];

// forEach() - Ejecuta función por cada elemento
palabras.forEach(palabra => console.log(palabra));

// map() - Transforma cada elemento
const mayusculas = palabras.map(p => p.toUpperCase()); // ['HOLA', 'MUNDO', 'JAVASCRIPT']

// filter() - Filtra elementos
const largas = palabras.filter(p => p.length > 4); // ['mundo', 'javascript']

// every() - Todos cumplen condición?
palabras.every(p => p.length > 3); // false

// some() - Alguno cumple condición?
palabras.some(p => p.length > 7); // true

// reduce() - Reduce a un valor
const suma = [1, 2, 3].reduce((acc, n) => acc + n, 0); // 6

// reduceRight() - Reduce de derecha a izquierda
const concatenado = ['a', 'b', 'c'].reduceRight((acc, l) => acc + l); // 'cba'



//Métodos para arrays multidimensionales

const matriz = [[1, 2], [3, 4], [5, 6]];

// flat() - Aplana arrays anidados
matriz.flat(); // [1, 2, 3, 4, 5, 6]

// flatMap() - Mapea y luego aplana
const duplicados = matriz.flatMap(n => [n[0] * 2, n[1] * 2]); // [2, 4, 6, 8, 10, 12]

//Métodos de iteradores

const colores = ['rojo', 'verde', 'azul'];

// entries() - Devuelve pares [índice, valor]
for (const [i, color] of colores.entries()) {
  console.log(i, color);
}

// keys() - Devuelve iterador de índices
for (const key of colores.keys()) {
  console.log(key); // 0, 1, 2
}

// values() - Devuelve iterador de valores
for (const value of colores.values()) {
  console.log(value); // 'rojo', 'verde', 'azul'
}


//Otros métodos importantes

// reverse() - Invierte el orden (modifica el original)
const letras = ['a', 'b', 'c'];
letras.reverse(); // ['c', 'b', 'a']

// sort() - Ordena elementos (modifica el original)
const desordenado = [3, 1, 4, 2];
desordenado.sort(); // [1, 2, 3, 4]

// copyWithin() - Copia elementos dentro del array (ES6)
const arre = [1, 2, 3, 4, 5];
arre.copyWithin(0, 3); // [4, 5, 3, 4, 5]

//Constructor y propiedad


// Array() - Constructor
const nuevoArray = new Array(1, 2, 3); // [1, 2, 3]

// length - Propiedad (no es método)
const lenguajes = ['JS', 'Python', 'Java'];
lenguajes.length; // 3 el length es para determinar el tamaño del arreglo por decirlo asi.

//Abarque todas las funciones que mire en la presentacion , ademas consulta una que otra adicional 
//Sin nada mas que decir muachas gracias de nuevo :).

// Algo mas que queria decir es que perdon por subirlo apenas ahora , ya vi que subiste las notas de 1r corte , no se si sea posible que se pueda revisar esta tarea
//espero que si . Gracias :)