const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const textoDescifrado = document.getElementById("descifrado");

function obtenerValorDesplazamiento() 
{
    const valor = desplazamiento.value.toLowerCase();
    if (/^[a-z]$/.test(valor)) 
    {
        return valor.charCodeAt(0) - 97;
    } else if (/^\d+$/.test(valor)) 
    {
        return parseInt(valor) % 26;
    } else 
    {
        return 0;
    }
}

function cifrado()
{
    const textoIngresado = texto.value;
    const valorDesplazamiento = obtenerValorDesplazamiento();

    textoCifrado.value = textoIngresado.split('').map(c => 
        { 
        let valorEntero = c.charCodeAt(0);
        if(valorEntero >= 65 && valorEntero <= 90)
        { // Letras mayúsculas
            valorEntero = (valorEntero - 65 + valorDesplazamiento) % 26 + 65;
        } else if (valorEntero >= 97 && valorEntero <= 122) 
        { // Letras minúsculas
            valorEntero = (valorEntero - 97 + valorDesplazamiento) % 26 + 97;
        } else if (valorEntero >= 48 && valorEntero <= 57) 
        { // Números
            valorEntero = (valorEntero - 48 + valorDesplazamiento) % 10 + 48;
        }
        let cifrado = String.fromCharCode(valorEntero);
        return cifrado;
    }).join('');
}

function descifrado()
{
    const textoIngresado = textoCifrado.value;
    const valorDesplazamiento = obtenerValorDesplazamiento();

    textoDescifrado.value = textoIngresado.split('').map(c => 
        { 
        let valorEntero = c.charCodeAt(0);
        if(valorEntero >= 65 && valorEntero <= 90)
        { // Letras mayúsculas
            valorEntero = (valorEntero - 65 - valorDesplazamiento + 26) % 26 + 65;
        } else if (valorEntero >= 97 && valorEntero <= 122) 
        { // Letras minúsculas
            valorEntero = (valorEntero - 97 - valorDesplazamiento + 26) % 26 + 97;
        } else if (valorEntero >= 48 && valorEntero <= 57) 
        { // Números
            valorEntero = (valorEntero - 48 - valorDesplazamiento + 10) % 10 + 48;
        }
        let cifrado = String.fromCharCode(valorEntero);
        return cifrado;
    }).join('');
}

texto.addEventListener("keyup", cifrado);
desplazamiento.addEventListener("input", cifrado);
desplazamiento.addEventListener("change", cifrado);
textoCifrado.addEventListener("keyup", descifrado);