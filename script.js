
function Ver_Hora() {
    var mihora = new Date();
    var horas = mihora.getHours().toString();
    var minutos = mihora.getMinutes().toString();
    if (minutos.length == 1) minutos = "0" + minutos;
    var segundos = mihora.getSeconds().toString();
    if (segundos.length == 1) segundos = "0" + segundos;
    document.form[0].mireloj.value = horas + ":" + minutos + " " + segundos;
    var r = setInterval("Ver_Hora()", 500);
}

 