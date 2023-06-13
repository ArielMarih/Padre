<?php
// Sintaxis básica

// Etiqueta de apertura y cierre
// El código PHP se coloca entre estas etiquetas
// Todo lo que esté fuera de estas etiquetas se considera salida directa y no será procesado por PHP

// Comentarios de una sola línea
// Se crean utilizando doble barra (//)

/*
   Comentarios de múltiples líneas
   Se crean utilizando /* para abrir el bloque de comentarios
   y */ para cerrarlo
*/

// Variables

$nombre = "Juan"; // Variable de tipo cadena que almacena un nombre

// PHP es un lenguaje de tipos débiles, por lo que no es necesario declarar explícitamente el tipo de variable

// Tipos de datos

$edad = 25; // Variable de tipo entero que almacena una edad

$precio = 10.99; // Variable de tipo flotante que almacena un precio

$activo = true; // Variable de tipo booleano que almacena un estado de activo

// Operadores

// Operadores aritméticos
$suma = 5 + 3;
$resta = 10 - 2;
$multiplicacion = 4 * 2;
$division = 10 / 5;
$modulo = 7 % 3;

// Operadores de comparación
$igual = 5 == 5;
$diferente = 5 != 3;
$mayor = 8 > 5;
$menor = 3 < 10;
$mayorOigual = 7 >= 7;
$menorOigual = 4 <= 6;

// Operadores lógicos
$and = true && false;
$or = true || false;
$not = !true;

// Operadores de asignación
$valor = 10;
$valor += 5; // Equivalente a $valor = $valor + 5;
$valor -= 3; // Equivalente a $valor = $valor - 3;
$valor *= 2; // Equivalente a $valor = $valor * 2;
$valor /= 4; // Equivalente a $valor = $valor / 4;

// Estructuras de control

// Condicional if
$edad = 18;

if ($edad >= 18) {
    echo "Eres mayor de edad.";
} else {
    echo "Eres menor de edad.";
}

// Bucle while
$contador = 0;

while ($contador < 5) {
    echo "El contador es: " . $contador . "<br>";
    $contador++;
}

// Bucle for
for ($i = 0; $i < 5; $i++) {
    echo "El valor de i es: " . $i . "<br>";
}

// Arreglos

// Arreglo indexado
$frutas = array("Manzana", "Banana", "Naranja");

echo $frutas[0]; // Imprime "Manzana"

// Arreglo asociativo
$persona = array("nombre" => "Juan", "edad" => 25, "ciudad" => "México");

echo $persona["nombre"]; // Imprime "Juan"

// Funciones

function saludar($nombre) {
    echo "Hola, " . $nombre . "!<br>";
}

saludar("Juan"); // Llama a la función y muestra "Hola, Juan!"

// Funciones con retorno

function sumar($a, $b) {
    return $a + $b;
}

$resultado = sumar(5, 3); // Llama a la función y guarda el resultado en la variable $resultado

echo $resultado; // Imprime "8"

// Incluir archivos

// Puedes incluir archivos PHP utilizando la función include o require

include "archivo.php"; // Incluye el contenido del archivo "archivo.php"
require "archivo.php"; // Incluye el contenido del archivo "archivo.php", pero genera un error fatal si el archivo no se encuentra

// Trabajar con bases de datos

// Conexión a una base de datos MySQL
$servername = "localhost";
$username = "usuario";
$password = "contraseña";
$dbname = "basedatos";

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta a la base de datos
$sql = "SELECT * FROM usuarios";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Recorrer los resultados de la consulta
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Nombre: " . $row["nombre"] . "<br>";
    }
} else {
    echo "No se encontraron resultados.";
}

// Cerrar la conexión a la base de datos
$conn->close();


// Manejo de excepciones

try {
    // Bloque de código que puede generar una excepción
    throw new Exception("Ocurrió un error.");
} catch (Exception $e) {
    // Manejo de la excepción
    echo "Error: " . $e->getMessage();
}


// Programación orientada a objetos (POO)

// Clase Persona
class Persona {
    // Propiedades
    public $nombre;
    public $edad;

    // Método constructor
    public function __construct($nombre, $edad) {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }

    // Método saludar
    public function saludar() {
        echo "Hola, mi nombre es " . $this->nombre . " y tengo " . $this->edad . " años.";
    }
}

// Crear un objeto de la clase Persona
$persona = new Persona("Juan", 25);

// Llamar al método saludar
$persona->saludar(); // Imprime "Hola, mi nombre es Juan y tengo 25 años."

// Manipulación de archivos

// Leer el contenido de un archivo
$file = fopen("archivo.txt", "r");
if ($file) {
    while (($line = fgets($file)) !== false) {
        echo $line;
    }
    fclose($file);
} else {
    echo "No se pudo abrir el archivo.";
}

// Escribir en un archivo
$file = fopen("archivo.txt", "w");
if ($file) {
    fwrite($file, "Hola, mundo!");
    fclose($file);
} else {
    echo "No se pudo abrir el archivo.";
}


// Manejo de fechas y tiempo

// Obtener la fecha y hora actual
$currentDateTime = date("Y-m-d H:i:s");
echo $currentDateTime;

// Convertir una fecha y hora a un formato personalizado
$date = "2023-06-12";
$timestamp = strtotime($date);
$formattedDate = date("d/m/Y", $timestamp);
echo $formattedDate;


// Seguridad

// Evitar la inyección de SQL
$username = $_POST["username"];
$password = $_POST["password"];

// Forma vulnerable a la inyección de SQL
$sql = "SELECT * FROM usuarios WHERE username = '$username' AND password = '$password'";

// Forma segura con sentencias preparadas
$stmt = $conn->prepare("SELECT * FROM usuarios WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();


// Manejo de excepciones personalizadas

// Clase de excepción personalizada
class MiExcepcion extends Exception {
    public function __construct($message, $code = 0, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }

    public function __toString() {
        return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
    }
}

// Lanzar una excepción personalizada
try {
    throw new MiExcepcion("Se produjo un error personalizado.");
} catch (MiExcepcion $e) {
    echo $e;
}

// Envío de correos electrónicos

$to = "destinatario@example.com";
$subject = "Correo de prueba";
$message = "Este es un correo de prueba enviado desde PHP.";
$headers = "From: remitente@example.com";

// Enviar correo electrónico
if (mail($to, $subject, $message, $headers)) {
    echo "Correo enviado correctamente.";
} else {
    echo "Error al enviar el correo.";
}


// Manejo de cookies

// Establecer una cookie
setcookie("nombre", "valor", time() + 3600, "/"); // La cookie expirará en una hora

// Obtener el valor de una cookie
if (isset($_COOKIE["nombre"])) {
    echo $_COOKIE["nombre"];
}

// Eliminar una cookie
setcookie("nombre", "", time() - 3600, "/");


// Generación de contraseñas seguras

$length = 10;
$characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
$password = substr(str_shuffle($characters), 0, $length);
echo $password;


// Uso de sesiones

// Iniciar una sesión
session_start();

// Establecer una variable de sesión
$_SESSION["usuario"] = "admin";

// Obtener el valor de una variable de sesión
if (isset($_SESSION["usuario"])) {
    echo $_SESSION["usuario"];
}

// Cerrar una sesión
session_destroy();


// Uso de namespaces

namespace MiNamespace;

class MiClase {
    public function __construct() {
        echo "Instancia de MiClase en el namespace MiNamespace.";
    }
}

$instancia = new MiClase();


// Uso de traits

trait MiTrait {
    public function miMetodo() {
        echo "Método del trait MiTrait.";
    }
}

class MiClase {
    use MiTrait;
}

$instancia = new MiClase();
$instancia->miMetodo();

// Autoload de clases utilizando spl_autoload_register

spl_autoload_register(function ($class) {
    require_once 'clases/' . $class . '.php';
});

$objeto = new MiClase();


// Validación de formularios

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];

    if (empty($nombre)) {
        echo "El nombre es obligatorio.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "El correo electrónico no es válido.";
    }
}


// Manipulación de archivos

// Leer el contenido de un archivo
$contenido = file_get_contents('archivo.txt');
echo $contenido;

// Escribir en un archivo
$file = fopen('archivo.txt', 'w');
fwrite($file, 'Este es el nuevo contenido del archivo.');
fclose($file);


// Uso de excepciones

function dividir($dividendo, $divisor) {
    if ($divisor == 0) {
        throw new Exception("División por cero no permitida.");
    }

    return $dividendo / $divisor;
}

try {
    $resultado = dividir(10, 0);
    echo "El resultado es: " . $resultado;
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}


// Generación de JSON

$datos = array(
    'nombre' => 'John Doe',
    'edad' => 30,
    'ciudad' => 'New York'
);

$json = json_encode($datos);
echo $json;


// Uso de funciones anónimas

$suma = function ($a, $b) {
    return $a + $b;
};

$resultado = $suma(5, 3);
echo $resultado;


// Conexión a una base de datos MySQL utilizando PDO

$dsn = 'mysql:host=localhost;dbname=mi_base_de_datos';
$usuario = 'usuario';
$contrasena = 'contrasena';

try {
    $conexion = new PDO($dsn, $usuario, $contrasena);

    $query = "SELECT * FROM usuarios";
    $statement = $conexion->prepare($query);
    $statement->execute();
    $usuarios = $statement->fetchAll(PDO::FETCH_ASSOC);

    foreach ($usuarios as $usuario) {
        echo $usuario['nombre'];
    }

    $conexion = null; // Cerrar la conexión
} catch (PDOException $e) {
    echo "Error al conectar a la base de datos: " . $e->getMessage();
}

// Uso de namespaces

namespace MiProyecto;

class MiClase {
    public function __construct() {
        echo "Se creó una instancia de MiClase en el namespace MiProyecto.";
    }
}

$objeto = new MiClase();


// Uso de traits

trait Loggable {
    public function log($mensaje) {
        echo "Registrando el mensaje: " . $mensaje;
    }
}

class MiClase {
    use Loggable;
}

$objeto = new MiClase();
$objeto->log("Hola, esto es un mensaje de registro.");


// Uso de generadores

function generador() {
    yield "valor 1";
    yield "valor 2";
    yield "valor 3";
}

$generador = generador();

foreach ($generador as $valor) {
    echo $valor . "<br>";
}


// Uso de la sintaxis de matriz corta

$datos = [
    'nombre' => 'John Doe',
    'edad' => 30,
    'ciudad' => 'New York'
];

echo $datos['nombre'];


// Uso de operadores ternarios

$edad = 25;
$mensaje = ($edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad.";
echo $mensaje;


// Uso de funciones anónimas con variables "use"

$nombre = "John Doe";

$saludo = function () use ($nombre) {
    echo "Hola, " . $nombre;
};

$saludo();


// Uso de la función "compact"

$nombre = "John";
$apellido = "Doe";
$edad = 30;

$datos = compact('nombre', 'apellido', 'edad');
print_r($datos);


// Uso de la función "array_map"

function agregarPrefijo($nombre) {
    return "Sr. " . $nombre;
}

$nombres = ["John", "Jane", "David"];

$nombresModificados = array_map("agregarPrefijo", $nombres);
print_r($nombresModificados);

function esPar($numero) {
    return $numero % 2 === 0;
}

$numeros = [1, 2, 3, 4, 5, 6];

$numerosPares = array_filter($numeros, "esPar");
print_r($numerosPares);


// Uso de la función "array_reduce"

function sumar($acumulador, $valor) {
    return $acumulador + $valor;
}

$numeros = [1, 2, 3, 4, 5];

$suma = array_reduce($numeros, "sumar");
echo $suma;


// Uso de la función "array_search"

$frutas = ["manzana", "banana", "naranja", "pera"];

$indice = array_search("banana", $frutas);
echo $indice;


// Uso de la función "array_keys"

$datos = ["nombre" => "John", "edad" => 30, "ciudad" => "New York"];

$claves = array_keys($datos);
print_r($claves);


// Uso de la función "array_values"

$valores = array_values($datos);
print_r($valores);


// Uso de la función "array_merge"

$array1 = [1, 2, 3];
$array2 = [4, 5, 6];

$arrayCombinado = array_merge($array1, $array2);
print_r($arrayCombinado);


// Uso de la función "array_unique"

$datosRepetidos = [1, 2, 3, 2, 4, 5, 3, 6];

$datosUnicos = array_unique($datosRepetidos);
print_r($datosUnicos);


// Uso de la función "array_flip"

$datos = ["nombre" => "John", "edad" => 30, "ciudad" => "New York"];

$datosInvertidos = array_flip($datos);
print_r($datosInvertidos);



// Uso de la función "array_map"

function duplicar($numero) {
    return $numero * 2;
}

$numeros = [1, 2, 3, 4, 5];

$numerosDuplicados = array_map("duplicar", $numeros);
print_r($numerosDuplicados);


// Uso de la función "array_slice"

$frutas = ["manzana", "banana", "naranja", "pera", "sandía"];

$frutasSeleccionadas = array_slice($frutas, 1, 3);
print_r($frutasSeleccionadas);


// Uso de la función "array_splice"

$colores = ["rojo", "verde", "azul", "amarillo"];

array_splice($colores, 2, 1, "naranja");
print_r($colores);


// Uso de la función "array_reverse"

$numeros = [1, 2, 3, 4, 5];

$numerosInvertidos = array_reverse($numeros);
print_r($numerosInvertidos);


// Uso de la función "array_sort"

$frutas = ["naranja", "manzana", "plátano", "fresa"];

sort($frutas);
print_r($frutas);


// Uso de la función "array_rand"

$colores = ["rojo", "verde", "azul", "amarillo"];

$colorAleatorio = $colores[array_rand($colores)];
echo $colorAleatorio;


// Uso de la función "array_unique" con valores asociativos

$datos = ["nombre" => "John", "edad" => 30, "ciudad" => "New York", "profesión" => "programador", "edad" => 25];

$datosUnicos = array_unique($datos);
print_r($datosUnicos);


// Uso de la función "array_key_exists"

$datos = ["nombre" => "John", "edad" => 30, "ciudad" => "New York"];

if (array_key_exists("nombre", $datos)) {
    echo "El elemento 'nombre' existe en el array";
} else {
    echo "El elemento 'nombre' no existe en el array";
}
 ?>