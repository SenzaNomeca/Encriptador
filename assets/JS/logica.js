let botonOculto = document.querySelector('#botonCopiar');
botonOculto.style.display = 'none';


valoresPorDefecto();

function encriptarTexto(){
    let textoUsuario =  document.querySelector('#palabrasUsuario').value;
    let answerLabel = document.querySelector('#answerLabel');
    let answerImage = document.querySelector('#answerDibujo');
    let promptText = document.querySelector('#answerText');
    let textoEncriptado = '';
    let letra;
    let boton = false;
    
    if (textoUsuario == '' ){
        
        boton = false;
        valoresPorDefecto();
        
        
    }else{
        boton = true;
        for (let i = 0; i < textoUsuario.length; i++){
            letra = textoUsuario[i];
            if (letra == 'a') {
                textoEncriptado += 'ai';
            } else if (letra == 'e') {
                textoEncriptado += 'enter';
            } else if (letra == 'i') {
                textoEncriptado += 'imes';
            } else if (letra == 'o') {
                textoEncriptado += 'ober';
            } else if (letra == 'u') {
                textoEncriptado += 'ufat';
            } else {
                textoEncriptado += letra;
            }
            
        }
        modificarCSS();
        asignarTextoElemento('#answerLabel', textoEncriptado);
        
    }
    

    mostrarBoton(boton);
    limpiarCaja();
    return;
    
};

function copiar() {
    let copyText = document.getElementById('answerLabel');
    let range = document.createRange();
    let selection = window.getSelection();

    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);

    
    document.execCommand('copy');
        
}

function limpiarCaja(){
    document.querySelector('#palabrasUsuario'). value = '';
}


function mostrarBoton(param){
    
    if(param === true){
        botonOculto.style.display = 'block';
    }else{
        botonOculto.style.display = 'none';
    }
}
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function desencriptarTexto() {
    let textoADesencriptar = document.querySelector('#palabrasUsuario').value;
    let textoDesencriptado = '';
    let i = 0;
    let boton = false;

    if(textoADesencriptar == ''){
        boton = false;
        valoresPorDefecto();
    }else{
        boton = true;
        while (i < textoADesencriptar.length) {
            let letra = textoADesencriptar[i];
            
            // Comprobamos si es una secuencia encriptada
            if (letra == 'a' && textoADesencriptar.slice(i, i + 2) == 'ai') {
                textoDesencriptado += 'a';
                i += 2;
            } else if (letra == 'e' && textoADesencriptar.slice(i, i + 5) == 'enter') {
                textoDesencriptado += 'e';
                i += 5;
            } else if (letra == 'i' && textoADesencriptar.slice(i, i + 4) == 'imes') {
                textoDesencriptado += 'i';
                i += 4;
            } else if (letra == 'o' && textoADesencriptar.slice(i, i + 4) == 'ober') {
                textoDesencriptado += 'o';
                i += 4;
            } else if (letra == 'u' && textoADesencriptar.slice(i, i + 4) == 'ufat') {
                textoDesencriptado += 'u';
                i += 4;
            } else {
                textoDesencriptado += letra;
                i++;
            }
        }
        
        modificarCSS();
        asignarTextoElemento('#answerLabel', textoDesencriptado);
    }
    
    mostrarBoton(boton);
    limpiarCaja();
    return
    
}

function modificarCSS(){
    answerDibujo.style.display = 'none';
    answerText.style.display = 'none';
    answerLabel.style.fontWeight = '400'; 
    contenedorDeRespuesta.style.justifyContent = 'space-between';
    answerLabel.style.textAlign = 'left';

}

function valoresPorDefecto(){
    asignarTextoElemento('#answerText', 'Ingresa el texto que desees encriptar');
    asignarTextoElemento('#answerLabel', 'Ningun mensaje fue encontrado');
    answerDibujo.style.display = 'block';
    answerText.style.display = 'block';
    answerLabel.style.fontWeight = '700'; 
    contenedorDeRespuesta.style.justifyContent = 'center';
    answerLabel.style.textAlign = 'center';
}