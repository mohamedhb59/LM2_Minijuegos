var matriz = [];
const filas = 10;
const columnas = 10;
/*--------------------------------------------------*/
function inicio() {
  generarBotones();
  for (var i = 0; i < filas; i++) {
    matriz.push([]);
    for (var j = 0; j < columnas; j++) {
      matriz[i].push(0);
    }
  }

  var minas = 10;
  while (minas > 0) {
    var fila = Math.floor(Math.random() * filas);
    var columna = Math.floor(Math.random() * columnas);
    if (matriz[fila][columna] == 0) {
      matriz[fila][columna] = 1;
      minas--;
    }
  }
}

function generarBotones() {
  var html = "";
  for (var i = 0; i < filas; i++) {
    html += "<div>";
    for (var j = 0; j < columnas; j++) {
      html +=
        '<button type="button" onclick="destapar(event.target,' +
        i +
        "," +
        j +
        ')"></button>';
    }
    html += "</div>";
  }
  document.querySelector("#matriz").innerHTML = html;
}

function minaCercana(fila, columna) {
  for (i = fila - 1; i <= fila + 1; i++) {
    for (j = columna - 1; j <= columna + 1; j++) {
      if (
        i >= 0 &&
        j >= 0 &&
        i < filas &&
        j < columnas &&
        (i != fila || j != columna)
      ) {
        if (matriz[i][j] == 1) {
          return true;
        }
      }
    }
  }
  return false;
}

function destapar(button, fila, columna) {
  if (matriz[fila][columna] == 1) {
    button.style.backgroundColor = "red";
    button.disabled = true;
    setTimeout(function () {
      alert("Boom, Perdiste");
    }, 250);
  } else if (minaCercana(fila, columna)) {
    button.style.backgroundColor = "yellow";
    button.disabled = true;
  } else {
    button.style.backgroundColor = "green";
    button.disabled = true;
  }
}
