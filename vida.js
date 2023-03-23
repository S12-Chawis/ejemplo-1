let pregunta1
pregunta1 = prompt("eres una perra?")
if (pregunta1 == "si") {
    alert ("Que gay, vaya a misa ehhh")
} else if (pregunta1 == "no") {
    alert ("Chimba chimba, sigue así, yendo a misa, besos")
} else { 
    alert ("Esta perra qué omeeee, tiene que poner si o no ehhh")
    while (true) {
        pregunta1 = prompt("eres una perra?")
        if (pregunta1 == "si") {
        alert ("Que gay, vaya a misa ehhh"); break
    }   else if (pregunta1 == "no") {
        alert ("Chimba chimba, sigue así, yendo a misa, besos"); break
    }   else {
        alert ("Esta perra qué omeeee, tiene que poner si o no ehhh")
    }
    }
}
