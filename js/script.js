// Antigua función (no está obsoleta pero es mejor la de fetch)
$("#btnXHR").click(function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/recipes/?delay=3000");
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);

            data.recipes.forEach(function (item) {
                $("#resultXHR").append("<li>" + item.name + "</li>");
            });
        }
    };
    xhr.onerror = function () {
        console.error("Error XHR");
    };
    xhr.send();
});

// Uso de fetch()
$("#btnFetch").click(function () {
    fetch("https://dummyjson.com/recipes/?delay=3000")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            data.recipes.forEach(function (item) {
                $("#resultFetch").append("<li>" + item.name + "</li>");
            });
        })
        .catch(function (error) {
            console.error("Error Fetch:", error);
        });
});

// Crear alerta
document.getElementById("btnAlert").addEventListener("click", function () {
    console.log("¡Hola, mundo!");
});

// Promesas
var miPromesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var exito = true;
        exito ? resolve("¡Promesa cumplida!") : reject("Error en promesa");
    }, 2000);
});

miPromesa
    .then(function (result) {
        document.getElementById("resultPromise").textContent = result;
    })
    .catch(function (error) {
        console.error(error);
    });

// jQuery a través de ajax
$("#btnJQuery").click(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/2",
        method: "GET",
        success: function (data) {
            $("#resultJQuery").text(data.title);
        },
        error: function (error) {
            console.error("Error jQuery:", error);
        },
    });
});

// Axios
document.getElementById("btnAxios").addEventListener("click", function () {
    axios
        .get("https://jsonplaceholder.typicode.com/posts/3")
        .then(function (response) {
            document.getElementById("resultAxios").textContent = response.data.title;
        })
        .catch(function (error) {
            console.error("Error Axios:", error);
        });
});


// Función fetch() para hacer una petición a una API
$("#btnImg").on("click", function(){
    
    fetch('https://dummyjson.com/recipes/1')
        .then(function(response){
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })

        .then(function(response){
            console.log(response);
            $("#imgCont").append('<img src="' + response.image + '" alt="IMAGEN de API" width="50%">')
        })

        .catch(function(error){
            console.log(error);
        })

});