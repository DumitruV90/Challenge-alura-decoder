
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

const inputText = document.getElementById("input-text");
const encriptarBtn = document.getElementById("btn-encriptar");
const desencriptarBtn = document.getElementById("btn-desencriptar");
const copiarBtn = document.getElementById("btn-copiar");
const limpiarBtn = document.getElementById("btn-limpiar");
const toolTip = document.getElementById("myTooltip");



encriptarBtn.addEventListener("click", function() {

    //Retiro de acentos o caracteres especiales de la cadena de texto y conversión a minúsculas
    let entradaTexto = inputText.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); 

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

