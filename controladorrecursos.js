//Recursos
var alimento = 50;
var madera = 50;
var piedra = 50;
var oro = 50;

//Produccion de recursos
var produccionAlimento = 20;
var produccionMadera = 10;
var produccionPiedra = 5;
var produccionOro = 2;

//Edificios
var maderero = 0;
var granja = 0;
var mina = 0;
var cantera = 0;

//Inicializamos los recursos
function inicializarRecursos() {
    document.getElementById('cantidad_alimento').innerHTML = alimento;
    document.getElementById('cantidad_madera').innerHTML = madera;
    document.getElementById('cantidad_piedra').innerHTML = piedra;
    document.getElementById('cantidad_oro').innerHTML = oro;
    setInterval('incrementosPorSegundo()', 1000);
}

//Incremento de recursos
function incrementosPorSegundo() {
    alimento = alimento + produccionAlimento;
    document.getElementById('cantidad_alimento').innerHTML = alimento;
    if (produccionAlimento != 0)
        document.getElementById('aumento_alimento').innerHTML = "+" + produccionAlimento;

    madera = madera + produccionMadera;
    document.getElementById('cantidad_madera').innerHTML = madera;
    if (produccionMadera != 0)
        document.getElementById('aumento_madera').innerHTML = "+" + produccionMadera;

    piedra = piedra + produccionPiedra;
    document.getElementById('cantidad_piedra').innerHTML = piedra;
    if (produccionPiedra != 0)
        document.getElementById('aumento_piedra').innerHTML = "+" + produccionPiedra;

    oro = oro + produccionOro;
    document.getElementById('cantidad_oro').innerHTML = oro;
    if (produccionOro != 0)
        document.getElementById('aumento_oro').innerHTML = "+" + produccionOro;
}

//Incremento de Edificios
function incrementoMaderero() {
    if (madera >= 100 && piedra >= 50) {
        madera = madera - 100;
        piedra = piedra - 50;
        produccionMadera++;
        maderero++;
        document.getElementById('maderero').innerHTML = maderero;
    }
}
function incrementoGranja() {
    if (madera >= 50 && alimento >= 100) {
        madera = madera - 50;
        alimento = alimento - 100;
        produccionAlimento++;
        granja++;
        document.getElementById('granja').innerHTML = granja;
    }
}
function incrementoMina() {
    if (piedra >= 100 && madera >= 50) {
        piedra = piedra - 100;
        madera = madera - 50;
        produccionPiedra++;
        mina++;
        document.getElementById('mina').innerHTML = mina;
    }
}
function incrementoCantera() {
    if (oro >= 100 && alimento >= 100 && madera >= 100) {
        oro = oro - 100;
        alimento = alimento - 100;
        madera = madera - 100;
        produccionOro++;
        cantera++;
        document.getElementById('cantera').innerHTML = cantera;
    }
}

//cambio de colores titulin//
    var colores = ["blue", "red","black", "green","violet","orange","brown",]
    var IndiceColor=0;

    function cambiarColorAutomaticamente(){
        var elemento= document.getElementById("titulo");
        elemento.style.color = colores[IndiceColor];
        IndiceColor= (IndiceColor + 1) % colores.length;
    }

    setInterval(cambiarColorAutomaticamente, 1000);