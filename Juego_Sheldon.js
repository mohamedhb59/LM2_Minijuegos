function usuarioGana(eleccionPC, seleccionUsuario) {
           
    if ((seleccionUsuario === 0 && (eleccionPC === 2 || eleccionPC === 3)) ||
        (seleccionUsuario === 1 && (eleccionPC === 0 || eleccionPC === 4)) ||
        (seleccionUsuario === 2 && (eleccionPC === 1 || eleccionPC === 3)) ||
        (seleccionUsuario === 3 && (eleccionPC === 1 || eleccionPC === 4)) ||
        (seleccionUsuario === 4 && (eleccionPC === 0 || eleccionPC === 2))) {
        return 1; 
    } else if (eleccionPC === seleccionUsuario) {
        return 0; 
    } else {
        return 2; 
    }
}

console.log("Bienvenido a piedra-papel-tijeras-lagarto-spock");
console.log("¿Cuál es tu jugada? ¿Piedra, papel, tijeras, lagarto o spock?");
while(true){
    var opciones = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    var eleccionPC =  Math.floor(Math.random() * opciones.length);
    var eleccionUsuario = prompt("¿Cuál es tu jugada?");
    if(eleccionUsuario === null || eleccionUsuario.toLowerCase() === "salir"){
        console.log("Fin de la partida");
        break;
    }
    var seleccionUsuario = opciones.indexOf(eleccionUsuario);
    if(seleccionUsuario === -1){
        console.log("No entiendo tu jugada");
        continue;
    }
    var resultado = usuarioGana(eleccionPC, seleccionUsuario);
    switch(resultado){
        case 1:
            console.log("Enhorabuena. Tu " + opciones[seleccionUsuario] + " gana a " + opciones[eleccionPC]);
            break;
        case 2:
            console.log("Lo siento. Tu " + opciones[seleccionUsuario] + " pierde contra " + opciones[eleccionPC]);
            break;
        case 0:
            console.log("Empate a " + opciones[eleccionPC]);
            break;  
    }
    console.log("¿Cuál es tu nueva jugada? ¿Piedra, papel, tijeras, lagarto o spock?");
}