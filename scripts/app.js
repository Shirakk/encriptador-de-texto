const encriptacion = document.querySelector('#enc');
const desencriptacion = document.querySelector('#des');
const copy = document.querySelector('#copiar');

var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

encriptacion.addEventListener( 'click', function() {encriptar(traduccion);} );
desencriptacion.addEventListener( 'click', function() {desencriptar(traduccion);} );
copy.addEventListener( 'click', function() {clipboard();} );

/*
    La función encriptar recibe un objeto con las traducciones de las vocales a encriptar.
    Funciona de la siguiente manera:
    - Obtiene el texto ingresado por el usuario.
    - Verifica que el texto no sea vacío y que no contenga caracteres que no sean letras minúsculas o espacios.
    - Si el texto es válido, recorre cada letra del texto y si es una vocal, la reemplaza por su traducción.
    - Si la letra no es una vocal, la deja igual.
    - Muestra el texto encriptado en el textarea de salida.
    - Si el texto no es válido, muestra un mensaje de advertencia.

    @param traduccion: objeto con las traducciones de las vocales a encriptar.
    return: void
*/
function encriptar(traduccion){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    const texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");

    if (texto != ""){
        var out = ""

        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
            if(texto[i] == 'a'){
                out += traduccion["a"] ;
            }
            else if(texto[i] == 'e'){
                out += traduccion["e"];
            }
            else if(texto[i] == 'i'){
                out += traduccion["i"]; 
            }
            else if(texto[i] == 'o'){
                out += traduccion["o"]; 
            }
            else if(texto[i] == 'u'){
                out += traduccion["u"]; 
            }
            else{
                out += texto[i];
            }
        }

        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto_out.innerHTML = out;
    }

    return;

}

/*
    La función desencriptar recibe un objeto con las traducciones de las vocales a desencriptar.
    Funciona de la siguiente manera:
    - Obtiene el texto ingresado por el usuario.
    - Verifica que el texto no sea vacío y que no contenga caracteres que no sean letras minúsculas o espacios.
    - Si el texto es válido, recorre cada letra del texto y si es una vocal encriptada, la reemplaza por su traducción.
    - Si la letra no es una vocal encriptada, la deja igual.
    - Muestra el texto desencriptado en el textarea de salida.
    - Si el texto no es válido, muestra un mensaje de advertencia.

    @param traduccion: objeto con las traducciones de las vocales a desencriptar.
    return: void
*/
function desencriptar(traduccion){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");
    
    if (texto != ""){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
        texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
        texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
        texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
        texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
        texto_out.innerHTML = texto;
    }
    return;
}

/*
    La función clipboard copia el texto en el textarea de salida al portapapeles.
    return: void
*/
function clipboard(){
    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.value);
}
