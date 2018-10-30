var fila=0
var columna=0
function newfila () {
  var newfila= Number(prompt("introduce una fila"));
  if (newfila<1) {
    console.log("el valor introducido esta fuera de lo perimitido, introduzca un valor entre 1 y 6");
    return fila="error"
  }else if (newfila>6) {
    console.log("el valor introducido esta fuera de lo perimitido, introduzca un valor entre 1 y 6");
    return fila="error"
  }else {
    //return newfila=fila
    return   console.log("Fila "+newfila);
  }
}

function newcolumna () {
  var newcolumna=Number (prompt("introduce una columna"));
  if (newcolumna<1) {
    console.log("el valor introducido esta fuera de lo perimitido, introduzca un valor entre 1 y 6");
    return columna="error"
  }else if (newcolumna>6) {
    console.log("el valor introducido esta fuera de lo perimitido, introduzca un valor entre 1 y 6");
    return columna="error"
  }else {
    //return newcolumna=columna
    return   console.log("Columna "+newcolumna);
  }
}
