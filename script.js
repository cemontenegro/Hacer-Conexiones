/*Al hacer clic en cualquiera de los botones, se eliminará al usuario de la lista de solicitudes. */
/*cualquier botón disminuye el número de "Solicitudes de conexión"*/
/*Al apretar el boton aceptar your conections aumentede numero*/
/* el botón aceptar también aumenta el número de "Tus Conexiones"*/

console.log("page loaded...");

var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");
var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}

/*Al hacer clic en el botón Editar perfil, el nombre del usuario cambiará de Jane Doe a cualquier otro nombre. */

var nombrePerfil = document.querySelector("h1");

function editarPerfil(){
    nombrePerfil.innerHTML = "Carolina Montenegro";
}