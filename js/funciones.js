window.onload = function () {
    //en esta variable letras recojo lo que se escribe en el input del html
    var letras = document.getElementById("letra");

    //cuando se pulsa una tecla se ejecuta la funcion traducir
    letras.addEventListener("keyup", traducir, false);

    //la funcion traducir:
    function traducir() {
        var cadena = letras.value;
        var posicion = cadena.length - 1;
        var codigoUnicode = cadena.charCodeAt(posicion);
        var chino = unescape("%u" + codigoUnicode + "e8");
        cadena = cadena.substring(0, cadena.length - 1);
        cadena = cadena + chino;
        letras.value = cadena;

    }

    //creo variables para guardar en ellas los eventos registrados
    //los eventos registrados se obtienen gracias a las funciones: type, keycode y String.fromCharCode
    var eventoType;
    var eventoKeyCode;
    var eventoCharCode;
    var p1, p2, p3, p4;
    var cajon = document.getElementById("caja");

    function getEvtType(evento) {
        //guardo en las variables los eventos registrados
        eventoType = evento.type;
        eventoKeyCode=evento.keyCode;
        eventoCharCode=String.fromCharCode(eventoKeyCode);

        //los muestro en el HTML creando nodos de texto y agregándoselos 
        //a la section con el id caja que he creado en el index.html
        //lo hago en el javascript para que me muestre el texto por cada tecla que se pulse
        //y no se sobrescriba la informacion
        p1 = document.createElement("p");
        var texto1 = document.createTextNode("----------------------------------------------------");
        p1.appendChild(texto1);
        cajon.appendChild(p1);

        p2 = document.createElement("p");
        var texto2 = document.createTextNode("Tipo de evento: "+ eventoType);
        p2.appendChild(texto2);
        cajon.appendChild(p2);
        
        p3 = document.createElement("p");
        var texto3 = document.createTextNode("Propiedad de KeyCode: "+ eventoKeyCode);
        p3.appendChild(texto3);
        cajon.appendChild(p3);

        p4 = document.createElement("p");
        var texto4 = document.createTextNode("Caracter pulsado: "+ eventoCharCode);
        p4.appendChild(texto4);
        cajon.appendChild(p4);

    }

    // Evento que llama a la funcion getEvtType para escribir los registros
    //cada vez que se pulsa una tecla
    document.addEventListener("keyup", getEvtType, false);


}