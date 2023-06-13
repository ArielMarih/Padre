// Selección por etiqueta
$("p") // Selecciona todos los párrafos del documento

// Selección por clase
$(".mi-clase") // Selecciona todos los elementos con la clase "mi-clase"

// Selección por ID
$("#mi-id") // Selecciona el elemento con el ID "mi-id"

// Selección por jerarquía
$("ul li") // Selecciona todos los elementos <li> dentro de <ul>

// Selección por atributo
$("input[type='text']") // Selecciona todos los elementos <input> de tipo "text"

// Obtener o establecer contenido HTML
$("p").html(); // Obtiene el contenido HTML del primer párrafo
$("p").html("<strong>Nuevo contenido</strong>"); // Establece el contenido HTML de los párrafos

// Obtener o establecer texto
$("p").text(); // Obtiene el texto del primer párrafo
$("p").text("Nuevo texto"); // Establece el texto de los párrafos

// Añadir o eliminar clases
$("h1").addClass("mi-clase"); // Añade la clase "mi-clase" al primer encabezado <h1>
$("p").removeClass("mi-clase"); // Elimina la clase "mi-clase" de los párrafos

// Añadir o eliminar elementos
$("ul").append("<li>Nuevo elemento</li>"); // Añade un nuevo elemento <li> al final de la lista <ul>
$("li").remove(); // Elimina todos los elementos <li>

// Asignar un manejador de evento
$("button").on('click', function () {
    alert("Haz hecho clic en el botón");
});

// Encadenar múltiples eventos
$("input")
    .on('focus', function () {
        $(this).addClass("active");
    })
    .on('blur', function () {
        $(this).removeClass("active");
    });


// Delegación de eventos
$("ul").on("click", "li", function () {
    $(this).toggleClass("selected");
});

// Animación de desvanecimiento
$("button").on('click', function () {
    $("p").fadeOut(); // Desvanece los párrafos
});

// Animación de deslizamiento
$("button").on('click', function () {
    $("div").slideUp(); // Contrae los elementos div
});

// Animación de cambio de tamaño
$("button").on('click', function () {
    $("img").animate({
        width: "200px",
        height: "200px"
    }, 1000); // Cambia el tamaño de las imágenes en 1 segundo
});

// Evento keydown
$("input").on('keydown', function (event) {
    console.log("Tecla presionada: " + event.which);
});

// Evento keyup
$("input").on('keyup', function () {
    console.log("Tecla liberada");
});

// Evento keypress
$("input").on('keypress', function (event) {
    console.log("Carácter ingresado: " + String.fromCharCode(event.which));
});











// Realizar solicitud AJAX
$.ajax({
    url: "datos.json",
    dataType: "json",
    success: function (data) {
        console.log(data);
    },
    error: function (xhr, status, error) {
        console.log("Error al obtener los datos: " + error);
    }
});

// Efecto de resaltado
$("button").on('click', function () {
    $("p").effect("highlight", { color: "yellow" }, 1000);
});

// Efecto de sacudida
$("button").on('click', function () {
    $("div").effect("shake", { distance: 10, times: 5 }, 1000);
});

// Iterar sobre elementos
$("li").each(function (index) {
    console.log("Elemento " + index + ": " + $(this).text());
});

// Filtrar elementos
$("li").filter(":even").addClass("even"); // Agrega la clase "even" a los elementos <li> pares

// Evento hover
$("button").on('hover', function () {
        $(this).addClass("hover");
    },
    function () {
        $(this).removeClass("hover");
    }
);

// Evento submit
$("form").on('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    console.log("Formulario enviado");
});



// Obtener o establecer estilos CSS
$("div").css("background-color"); // Obtiene el valor del estilo de fondo de los elementos <div>
$("div").css("background-color", "red"); // Establece el estilo de fondo de los elementos <div> a rojo

// Obtener o establecer atributos
$("img").attr("src"); // Obtiene el valor del atributo src de las imágenes
$("img").attr("src", "imagen.jpg"); // Establece el atributo src de las imágenes a "imagen.jpg"

// Desplazamiento suave
$("a").on('click', function (event) {
    event.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(target).offset().top
    }, 1000);
});

// Agregar una clase a un elemento
$("p").addClass("destacado");

// Quitar una clase de un elemento
$("p").removeClass("destacado");

// Alternar una clase en un elemento
$("button").on('click', function () {
    $("p").toggleClass("oculto");
});



// Animación personalizada
$("div").animate({
    width: "200px",
    height: "200px",
    opacity: 0.5
}, 1000);

// Obtener el contenido HTML de un elemento
var contenido = $("div").html();

// Establecer el contenido HTML de un elemento
$("div").html("<p>Nuevo contenido</p>");




// Obtener el padre de un elemento
var padre = $("p").parent();

// Obtener los hijos de un elemento
var hijos = $("ul").children();

// Obtener el siguiente elemento hermano
var siguiente = $("h1").next();

// Disparar un evento personalizado
$("button").on('click', function () {
    $("p").trigger("miEvento");
});

// Escuchar un evento personalizado
$("p").on("miEvento", function () {
    console.log("Se disparó el evento personalizado");
});

// Clonar un elemento
var clone = $("p").clone();

// Vaciar el contenido de un elemento
$("div").empty();

// Reemplazar un elemento por otro
$("span").replaceWith("<p>Nuevo párrafo</p>");

// Desvanecer un elemento
$("div").fadeOut();

// Mostrar un elemento con efecto de desvanecimiento
$("p").fadeIn();


// Alternar entre ocultar y mostrar un elemento
$("button").on('click', function () {
    $("img").fadeToggle();
});

// Obtener la altura de un elemento
var altura = $("div").height();

// Obtener la posición de un elemento
var posicion = $("p").position();

// Obtener el ancho visible de un elemento
var anchoVisible = $("img").innerWidth();

// Validar un formulario
$("form").on('submit', function () {
    if ($("input").val() === "") {
        alert("El campo es obligatorio");
        return false; // Evita que se envíe el formulario
    }
});

// Deslizar hacia abajo un elemento
$("div").slideDown();

// Deslizar hacia arriba un elemento
$("p").slideUp();

// Alternar el deslizamiento de un elemento
$("button").on('click', function () {
    $("img").slideToggle();
});

// Deslizar hacia abajo un elemento
$("div").slideDown();

// Deslizar hacia arriba un elemento
$("p").slideUp();

// Alternar el deslizamiento de un elemento
$("button").on('click', function () {
    $("img").slideToggle();
});

// Filtro por contenido
$("p:contains('Lorem')") // Selecciona los párrafos que contienen la palabra "Lorem"


// Filtro por visibilidad
$("div:hidden") // Selecciona los elementos div que están ocultos

// Filtro por atributo
$("input[type='text']") // Selecciona los elementos input de tipo "text"

// Filtro por posición
$("li:first") // Selecciona el primer elemento <li>

// Evitar que el evento se propague al elemento padre
$("button").on('click', function (event) {
    event.stopPropagation();
});

// Prevenir el comportamiento predeterminado de un enlace
$("a").on('click', function (event) {
    event.preventDefault();
});

// Animaciones en cadena
$("div")
    .slideUp()
    .delay(1000)
    .fadeIn();

// Verificar si un elemento tiene una clase específica
$("p").hasClass("mi-clase");

// Alternar una clase en varios elementos
$("button").on('click', function () {
    $("p").toggleClass("resaltado");
});

// Establecer un valor de datos personalizados
$("div").data("clave", "valor");

// Obtener un valor de datos personalizados
var valor = $("div").data("clave");

// Selección por atributo con un valor específico
$("input[name='nombre']") // Selecciona los elementos input con el atributo name igual a "nombre"

// Selección de elementos visibles
$("div:visible") // Selecciona los elementos div que están visibles en la página

// Selección de elementos con contenido vacío
$("p:empty") // Selecciona los elementos p que están vacíos

// Obtener el valor de un atributo
var src = $("img").attr("src");

// Establecer el valor de un atributo
$("a").attr("href", "https://www.example.com");

// Obtener el valor de una propiedad
var checked = $("input").prop("checked");

// Establecer el valor de una propiedad
$("input").prop("disabled", true);

// Efecto de rebote horizontal
$("div").effect("bounce", { direction: "left" }, 500);

// Efecto de rebote vertical
$("p").effect("bounce", { direction: "up" }, 500);

// Recorrer los elementos anteriores a un elemento seleccionado
$("li").prevAll().addClass("anterior");

// Recorrer los elementos siguientes a un elemento seleccionado
$("li").nextAll().addClass("siguiente");

// Recorrer los elementos hermanos de un elemento seleccionado
$("li").siblings().addClass("hermano");

// Realizar una animación y ejecutar una función después de que se complete
$("div").animate({ width: "200px" }, 1000).promise().done(function () {
    console.log("Animación completada");
});

