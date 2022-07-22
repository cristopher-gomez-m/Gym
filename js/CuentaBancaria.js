var form = document.getElementById("formContacto");
form.addEventListener('submit', validar);

let cont=0;
function validar(event) {
    // variable para retornar
   var valido = true;
    // obtencion de los elementos a validar
   var txtNombres = document.getElementById("nombres");
   var txtTelefono = document.getElementById("telefono");
   var txtDireccion = document.getElementById("direccion");
   var metodoPago = document.getElementById("metodoPago");
   var txtCtaBanco =document.getElementById("ctaBanco");
   var txtCvv=document.getElementById("cvv");


   var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
   var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
   var cvvreg = /^[0-9]{3}$/g;
   var numCtaBancariareg = /^[0-9]{16}$/g;

   limpiarMensajes();

   //validacion para nombres
   if (txtNombres.value === "") {
       valido = false;
       mensaje("Nombre es requerido", txtNombres);
   } else if (!letra.test(txtNombres.value)) { 
       valido = false;
       mensaje("Solo se permite letras", txtNombres);
   } else if (txtNombres.value.length > 40) {
       valido = false;
       mensaje("Nombre maximo 40 caracteres", txtNombres);
   }

   //validacion para Direcion
   if (txtDireccion.value === "") {
    valido = false;
    mensaje("Direccion es requerida", txtDireccion);
   } else if (txtDireccion.value.length > 40) {
    valido = false;
    mensaje("Direcion maximo 40 caracteres", txtDireccion);
    }

   //validacion telefono
   if (txtTelefono.value === "") {
       valido = false;
       mensaje("Telefono es requerido", txtTelefono);
   } else if (!telefonoreg.test(txtTelefono.value)) {
       valido = false;
       mensaje("Deben ser 10 digitos", txtTelefono);
   }


   //validacion select
   if (metodoPago.value === null || metodoPago.value === '0') {
       valido = false;
       mensaje("Debe selecionar un metodo de pago", metodoPago);
   }

   //validacion Cuenta Bancarias
    if (txtCtaBanco.value === "") {
        valido = false;
        mensaje("Cuenta es requerido", txtCtaBanco);
    } else if (!numCtaBancariareg.test(txtCtaBanco.value)) {
        valido = false;
        mensaje("Deben ser 16 digitos", txtCtaBanco);
    }
    //validacion CVV
    if (txtCvv.value === "") {
        valido = false;
        mensaje("CVV es requerido", txtCvv);
    } else if (!cvvreg.test(txtCvv.value)) {
        valido = false;
        mensaje("Deben ser 3 digitos", txtCvv);
    }

  if(!valido){
       event.preventDefault();  // detener el evento  //stop form from submitting
   }

//    return valido;
}

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
   
    var nodoMensaje = document.createElement("span");// <span></span>
    nodoMensaje.textContent = cadenaMensaje;// <span>Debe ingresar solo letras</span>
   nodoMensaje.setAttribute("class", "mensajeError");

   var nodoPadre = elemento.parentNode;
   nodoPadre.appendChild(nodoMensaje);

}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }

}