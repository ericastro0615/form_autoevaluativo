let txtNombre = document.getElementById("txtNombre");
let numTemp = document.getElementById("numTemp");
let txtTel = document.getElementById("txtTel");

let ltaErrores = document.getElementById("listaErrores");
let ltaMensajes = document.getElementById("listaMensajesEnviados");

function validar() {
    // Limpieza de errores
    ltaErrores.innerHTML = "";
    txtNombre.classList.remove("error");
    numTemp.classList.remove("error");
    txtTel.classList.remove("error");

    // Errores los coloco en un array
    let errores = [];

    let patrones_tel = /^[1-9]\d{8,9}$/;
    let patrones_nombre = /^[a-zA-Z\s]+$/;
    let nombre = txtNombre.value.trim();

    // Validar nombre
    if (nombre.length < 1 || nombre.length > 9) {
        errores.push("Completar campo Nombre*");
       // txtNombre.classList.add("error");
    } else if (!patrones_nombre.test(nombre)) {
        errores.push("Completar campo Nombre* con caracteres validos");
        txtNombre.classList.add("error");
    }

    // Validar temperatura
    if (numTemp.value < -10 || numTemp.value > 60) {
        errores.push("Temperatura fuera del rango válido entre -10 y 60");
        numTemp.classList.add("error");
    }

    // Validar teléfono
    if (txtTel.value.length > 0 && (txtTel.value.length > 9 || !patrones_tel.test(txtTel.value))) {
        errores.push("Error en la cantidad de caracteres del teléfono, debe ser entre 1 y 9 dígitos y no puede comenzar con 0");
        txtTel.classList.add("error");
    }

    // Mostrar errores
    for (let err of errores) {
        let elementoLtaErrores = document.createElement("li");
        elementoLtaErrores.innerHTML = err;
        ltaErrores.appendChild(elementoLtaErrores);
    }

    if (errores.length == 0) {
        let elementoLtaBien = document.createElement("li");
        if (txtTel.value.length > 0) {
            elementoLtaBien.innerHTML = `Hola ${nombre}, te llamaremos al ${txtTel.value} cuando hagan ${numTemp.value} grados`;
        } else {
            elementoLtaBien.innerHTML = `Hola ${nombre}, nos vemos cuando hagan ${numTemp.value} grados`;
        }
        ltaMensajes.appendChild(elementoLtaBien);
        // Resetea el form, equivalente a txtTel.value = "", txtNOmbre.value="", etc 
        document.forms[0].reset();
        mostrarTemp(); // Para actualizar el valor mostrado del rango
        return false; // Para que no se envíe el form si hay error
    } else {
        return false; // Para que no se envíe el form si hay error
    }
}

function mostrarTemp() {
    document.getElementById("numDeRangoSeleccionado").value = document.getElementById("numTemp").value;
}






function mostrarTemp() {
    document.getElementById("numTemp").value = numDeRangoSeleccionado.value;
}