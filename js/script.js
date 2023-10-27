trazos = document.querySelectorAll("#conectar .trazo");
final = document.getElementById("final")
contador = 1;
var pulsado1, pulsado2;
guardaren1 = true;

function pulsado(puntoID) {
    if (guardaren1) {
        pulsado1 = puntoID
        guardaren1 = false
    } else {
        pulsado2 = puntoID
        guardaren1 = true
    }
    console.log(pulsado1 + " " + pulsado2);
    if (pulsado1 == contador && pulsado2 == (contador+1)) {
        trazos[contador-1].style.visibility = "visible"
        contador++
        pulsado1 = pulsado2
        pulsado2 = undefined
        guardaren1 = false
        if (contador == (trazos.length+1)) {
            // alert(final)
            final.classList.add("visible")
            confettiEffect()
        }
    }
}