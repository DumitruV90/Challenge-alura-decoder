const inputText = document.getElementById("input-text");
const encriptarBtn = document.getElementById("btn-encriptar");
const desencriptarBtn = document.getElementById("btn-desencriptar");
const copiarBtn = document.getElementById("btn-copiar");
const limpiarBtn = document.getElementById("btn-limpiar");
const toolTip = document.getElementById("myTooltip");


encriptarBtn.addEventListener("click", function() {

    // A la cadena de texto ingresada por el usuario se le retiran los acentos, y es convertida a minúsculas
    let entradaTexto = inputText.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); 

    // Únicamente son válidas las letras del alfabeto. 
    let regEx = /^[a-z][a-z\s]*$/;

    if (!entradaTexto.match(regEx)) {
        swal("Oops!", "Recuerda escribir únicamente letras del alfabeto", "error");
    }
    // Encriptación de la cadena de texto
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

    // Si el usuario presiona la tecla 'enter' la función encriptar es ejecutada
    if (event.key === "Enter") {
        // La acción por defecto es cancelada, si es necesario
        event.preventDefault();
        encriptarBtn.click();
    }
});

desencriptarBtn.addEventListener("click", function() {

    // Los nuevos valores correspondientes al texto desencriptado son almacenados en un objeto
    let nuevosValores = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u"
    }
    // La cadena de texto es desencriptada con los nuevos valores del objeto
    let textoNormal = inputText.value.replace(/enter|imes|ai|ober|ufat/gi, function(matched) {
        return nuevosValores[matched]
    });
    inputText.value = textoNormal; 
});

copiarBtn.addEventListener("click", function() {

    // Selección del campo de texto
    inputText.select();
    inputText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Selección del valor en el campo de texto
    navigator.clipboard.writeText(inputText.value);
    toolTip.innerHTML = "Copiado"
});

copiarBtn.addEventListener("mouseout", function() {
    toolTip.innerHTML = "Copiar texto al portapapeles";
});

limpiarBtn.addEventListener("click", function() {
    inputText.value = "";
});

