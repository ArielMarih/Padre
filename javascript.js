// Variables
var x = 5;
let y = "Hola";
const PI = 3.1416;

// Tipos de datos
let number = 10; // Número
let string = "Texto"; // Cadena de texto
let boolean = true; // Valor booleano (verdadero/falso)
let array = [1, 2, 3]; // Arreglo
let object = { nombre: "Juan", edad: 25 }; // Objeto

// Declaración de función
function sum(a, b) {
  return a + b;
}

// Llamada a función
let result = sum(3, 4);
console.log(result); // Imprime: 7

// Función anónima
let multiply = function (a, b) {
  return a * b;
};

let product = multiply(2, 5);
console.log(product); // Imprime: 10

// Arrow function (función flecha)
let divide = (a, b) => a / b;
let quotient = divide(10, 2);
console.log(quotient); // Imprime: 5



// Definición de clase
    class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
    }

// Instancia de clase
    let person1 = new Person("Juan", 25);
    person1.greet(); // Imprime: Hola, mi nombre es Juan y tengo 25 años.

    let person2 = new Person("María", 30);
    person2.greet(); // Imprime: Hola, mi nombre es María y tengo 30 años.

// Condicionales (if-else)
    let age = 18;
    if (age >= 18) {
    console.log("Eres mayor de edad");
    } else {
    console.log("Eres menor de edad");
    }

// Bucles (for, while)
    for (let i = 0; i < 5; i++) {
    console.log(i);
    }

    let counter = 0;
    while (counter < 5) {
    console.log(counter);
    counter++;
    }
    // Switch
    let day = "Monday";
    switch (day) {
    case "Monday":
        console.log("Es lunes");
        break;
    case "Tuesday":
        console.log("Es martes");
        break;
    default:
        console.log("Es otro día de la semana");
        break;
    }
// trabajando con arreglos
    let numbers = [1, 2, 3, 4, 5];

    // Recorrer arreglo
    for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    }

    // Funciones de arreglo
    let doubledNumbers = numbers.map((num) => num * 2);
    console.log(doubledNumbers); // Imprime: [2, 4, 6, 8, 10]

    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum); // Imprime: 15

    let filteredNumbers = numbers.filter((num) => num > 3);
    console.log(filteredNumbers); // Imprime: [4, 5]
// Manejo de DOM
// Obtener elementos del DOM
    let element = document.getElementById("myElement");
    let elements = document.getElementsByClassName("myClass");
    let elements = document.querySelectorAll("p");

    // Modificar contenido
    element.textContent = "Nuevo contenido";
    element.innerHTML = "<strong>Nuevo contenido HTML</strong>";

    // Agregar y quitar clases CSS
    element.classList.add("newClass");
    element.classList.remove("oldClass");

    // Manipular eventos
    element.addEventListener("click", function () {
    console.log("Elemento clickeado");
    });


// Promesas
    function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Datos obtenidos");
        }, 2000);
    });
    }

    fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

    // Async/await
    async function getData() {
    try {
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    }

    getData();


// Funciones como argumentos
    function operate(num1, num2, operation) {
    return operation(num1, num2);
    }

    function add(a, b) {
    return a + b;
    }

    let result = operate(5, 3, add);
    console.log(result); // Imprime: 8

// Funciones como retorno
    function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
    }
//Manejo de cadenas
    let double = multiplyBy(2);
    let triple = multiplyBy(3);

    console.log(double(5)); // Imprime: 10
    console.log(triple(5)); // Imprime: 15

    let str = "Hola, soy una cadena de texto";

    // Obtener longitud
    console.log(str.length); // Imprime: 25

    // Buscar y reemplazar
    let replacedStr = str.replace("soy", "eres");
    console.log(replacedStr); // Imprime: Hola, eres una cadena de texto

    // Dividir y unir
    let splitStr = str.split(" ");
    console.log(splitStr); // Imprime: ["Hola,", "soy", "una", "cadena", "de", "texto"]

    let joinedStr = splitStr.join("-");
    console.log(joinedStr); // Imprime: Hola,-soy-una-cadena-de-texto

// Manejo de errores

    try {
    // Bloque de código a intentar
    throw new Error("Ocurrió un error");
    } catch (error) {
    // Bloque de código a ejecutar en caso de error
    console.log(error.message);
    } finally {
    // Bloque de código opcional a ejecutar siempre, haya o no error
    console.log("Finalizando...");
    }


// module, importación y exportación

// módulo.js
    export function multiply(a, b) {
    return a * b;
    }

    export const PI = 3.1416;

    // main.js
    import { multiply, PI } from './módulo.js';

    let result = multiply(5, 2);
    console.log(result); // Imprime: 10

    console.log(PI); // Imprime: 3.1416

// Operadores de asignación
    let x = 5;
    x += 3; // x = x + 3;

    let y = 10;
    y *= 2; // y = y * 2;

// Operadores de comparación
    console.log(5 === "5"); // Imprime: false
    console.log(10 !== 5); // Imprime: true
    console.log(3 > 1 && 2 < 4); // Imprime: true
    console.log(5 <= 5 || 4 >= 7); // Imprime: true


// Operadores ternarios
    let age = 20;
    let message = (age >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
    console.log(message); // Imprime: Eres mayor de edad

// métodos de objetos
    let person = {
    name: "Juan",
    age: 30,
    greet: function() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
    };

    person.greet(); // Imprime: Hola, mi nombre es Juan y tengo 30 años.

    // Agregar propiedades dinámicamente
    person.city = "Barcelona";
    console.log(person.city); // Imprime: Barcelona

    // Eliminar propiedades
    delete person.age;
    console.log(person.age); // Imprime: undefined

//Operaciones con fechas
let currentDate = new Date();

    console.log(currentDate.getFullYear()); // Año actual
    console.log(currentDate.getMonth()); // Mes actual (0-11)
    console.log(currentDate.getDate()); // Día del mes (1-31)
    console.log(currentDate.getHours()); // Hora actual (0-23)
    console.log(currentDate.getMinutes()); // Minutos actuales (0-59)
    console.log(currentDate.getSeconds()); // Segundos actuales (0-59)

    // Validaciones y conversiones
    console.log(Number.isNaN(NaN)); // Verificar si es NaN
    console.log(Number.parseInt("10")); // Convertir a entero
    console.log(Number.parseFloat("3.14")); // Convertir a número de punto flotante
    console.log(String(123)); // Convertir a cadena de texto
    console.log(Boolean("")); // Convertir a booleano


//Iteradores

    // For...of
    let numbers = [1, 2, 3, 4, 5];

    for (let num of numbers) {
    console.log(num);
    }

    // Foreach
    numbers.forEach((element) => {
    console.log(element);
    });

    // For...in
    let person = {
    name: "Juan",
    age: 30,
    city: "Barcelona"
    };

    for (let key in person) {
    console.log(key + ": " + person[key]);
    }
// Operadores de propagación

    let numbers = [1, 2, 3];
    let newNumbers = [...numbers, 4, 5];

    console.log(newNumbers); // Imprime: [1, 2, 3, 4, 5]

    let person = {
    name: "Juan",
    age: 30
    };

    let newPerson = {
    ...person,
    city: "Barcelona"
    };

    console.log(newPerson); // Imprime: {name: "Juan", age: 30, city: "Barcelona"}

//Set y Map


    // Set
    let set = new Set();

    set.add(1);
    set.add(2);
    set.add(3);

    console.log(set.size); // Tamaño del set: 3
    console.log(set.has(2)); // Verificar si contiene el valor 2: true
    set.delete(3); // Eliminar el valor 3 del set

    // Map
    let map = new Map();

    map.set("name", "Juan");
    map.set("age", 30);

    console.log(map.size); // Tamaño del map: 2
    console.log(map.get("name")); // Obtener el valor asociado a la clave "name": "Juan"
    map.delete("age"); // Eliminar la clave "age" y su valor asociado

//programación orientada a eventos

    // Event Listener
    let button = document.getElementById("myButton");

    button.addEventListener("click", function() {
    console.log("El botón ha sido clickeado");
    });

    // Evento personalizado
    let customEvent = new Event("customEvent");

    button.addEventListener("customEvent", function() {
    console.log("Se ha disparado un evento personalizado");
    });

    button.dispatchEvent(customEvent); // Disparar el evento personalizado

// Fetch api

    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

// Generadores
    function* generator() {
    yield 1;
    yield 2;
    yield 3;
    }

    let iterator = generator();

    console.log(iterator.next().value); // Imprime: 1
    console.log(iterator.next().value); // Imprime: 2
    console.log(iterator.next().value); // Imprime: 3









