// load_file.html
// Uso de fecth() para cargar un archivo
$("#cargarJSON").click(function () {
    // Ruta relativa al archivo JSON (debe estar en mismo dominio)
    fetch("./data.json")
        .then(function (response) {
            // Verificar si la respuesta es válida
            if (!response.ok) {
                throw new Error("Archivo no encontrado");
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Mostrar datos en el DOM
            var contenido = "";
            contenido += "<h2>" + data.titulo + "</h2>";
            contenido += "<p>Versión: " + data.version + "</p>";
            contenido += "<ul>";
            data.items.forEach(function (item) {
                contenido += "<li>" + item + "</li>";
            });
            contenido += "</ul>";

            $("#resultado").html(contenido);
        })
        .catch(function (error) {
            console.error("Error:", error);
            $("#resultado").html(
                '<p style="color: red">Error cargando el archivo: ' + error.message + "</p>"
            );
        });
});
