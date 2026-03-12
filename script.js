function verificar() {

    let nombre = document.getElementById("nombre").value
    let lugar = document.getElementById("lugar").value
    let fecha = document.getElementById("fecha").value
    let color = document.getElementById("color").value

    if (
        nombre.trim().toLowerCase() == "michelle" &&
        lugar.trim().toLowerCase() == "iglesia" &&
        fecha.trim() == "10" &&
        color.trim().toLowerCase() == "negro"
    ) { 

        document.getElementById("login").style.display = "none"
        document.getElementById("contenido").style.display = "block"

    }
    else {

        alert("Respuestas incorrectas ❤️")

    }

}


function abrirCarta() {

    let sobre = document.getElementById("sobre")

    sobre.classList.toggle("open")

}


function enviarWhats() {

    let mensaje = document.getElementById("mensaje").value

    let numero = "593999182327"

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje)

    window.open(url)

}


function crearCorazones() {

    let heart = document.createElement("div")

    heart.classList.add("heart")

    heart.innerHTML = "❤️"

    heart.style.left = Math.random() * 100 + "vw"

    heart.style.fontSize = (Math.random() * 20 + 10) + "px"

    document.body.appendChild(heart)

    setTimeout(() => {

        heart.remove()

    }, 5000)

}

setInterval(crearCorazones, 300)



function contador() {

    let inicio = new Date("2026-01-10")

    let hoy = new Date()

    let dias = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24))

    document.getElementById("contador").innerHTML = "Llevamos " + dias + " días juntos ❤️"

}

contador()