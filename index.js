
const inputText = document.getElementById("input-text");
const encriptarBtn = document.getElementById("btn-encriptar");
const desencriptarBtn = document.getElementById("btn-desencriptar");
const copiarBtn = document.getElementById("btn-copiar");
const limpiarBtn = document.getElementById("btn-limpiar");
const toolTip = document.getElementById("myTooltip");


encriptarBtn.addEventListener("click", function() {

    //Retiro de acentos o caracteres especiales de la cadena de texto y conversión a minúsculas
    let entradaTexto = inputText.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); 

    // Validación de entrada únicamente para letras del alfabeto
    let regEx = /^[a-z][a-z\s]*$/;

    if (!entradaTexto.match(regEx)) {
        swal("Oops!", "Recuerda escribir únicamente letras del alfabeto", "error");
    }
    
    //Encriptación de la cadena de texto
    let textoFinal = "";
    for (let vocal of entradaTexto) {
        switch (vocal) {
            case "e":
                textoFinal += vocal.replace("e", "enter");
                break;
            case "i":
                textoFinal += vocal.replace("i", "imes");
                break;
            case "a":
                textoFinal += vocal.replace("a", "ai");
                break;
            case "o":
                textoFinal += vocal.replace("o", "ober");
                break;
            case "u":
                textoFinal += vocal.replace("u", "ufat");
                break;
            default:
                textoFinal += vocal;
        }
    }
    inputText.value = textoFinal;
    
});

inputText.addEventListener("keypress", function(event) {

    // Ejecución de la función cuando el usuario presione la tecla enter después de ingresar el texto
    if (event.key === "Enter") {
        // Cancelación de la acción por defecto, si es necesario
        event.preventDefault();
        // Enlace con la función asociada al botón de encriptar
        encriptarBtn.click();
    }
});

desencriptarBtn.addEventListener("click", function() {

    // Creación del objeto que almacena los nuevos valores
    let nuevosValores = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u"
    }
    
    // Reemplazo con los nuevos valores del objeto
    let textoNormal = inputText.value.replace(/enter|imes|ai|ober|ufat/gi, function(matched) {
        return nuevosValores[matched]
    });
      
    inputText.value = textoNormal; 

});

copiarBtn.addEventListener("click", function() {

    // Selección del campo de texto
    inputText.select();
    inputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Selección del texto en el campo de texto
    navigator.clipboard.writeText(inputText.value);

    toolTip.innerHTML = "Copiado"

});

copiarBtn.addEventListener("mouseout", function() {
    toolTip.innerHTML = "Copiar texto al portapapeles";
});

limpiarBtn.addEventListener("click", function() {
    inputText.value = "";
});

