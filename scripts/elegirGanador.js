function calcularGanador() {
    let animas = 0, basajarau = 0, bruja = 0, buco = 0, caco = 0;
    let cirila = 0, donas = 0, duende = 0, fantasma = 0, gnomo = 0;
    let guixa = 0, ome = 0, sierpe = 0, silban = 0;

    for (let i = 1; i <= 14; i++) {
        const pregunta = document.querySelector(`input[name="pregunta${i}"]:checked`);
        if (pregunta) {
            switch (pregunta.value) {
                case "animas": animas++; break;
                case "basajarau": basajarau++; break;
                case "bruja": bruja++; break;
                case "buco": buco++; break;
                case "caco": caco++; break;
                case "cirila": cirila++; break;
                case "donas": donas++; break;
                case "duende": duende++; break;
                case "fantasma": fantasma++; break;
                case "gnomo": gnomo++; break;
                case "guixa": guixa++; break;
                case "ome": ome++; break;
                case "sierpe": sierpe++; break;
                case "silban": silban++; break;
            }
        }
    }

    let candidatos = {
        animas: animas, basajarau: basajarau, bruja: bruja, buco: buco, caco: caco,
        cirila: cirila, donas: donas, duende: duende, fantasma: fantasma, gnomo: gnomo,
        guixa: guixa, ome: ome, sierpe: sierpe, silban: silban
    };

    let ganador = Object.keys(candidatos).reduce((a, b) => candidatos[a] > candidatos[b] ? a : b);

    let resultado = "";
    let imagenSrc = "";

    switch (ganador) {
        case "animas":
            resultado = "¡Animas es el ganador!";
            imagenSrc = "../images/index/animas-web.png";
            break;
        case "basajarau":
            resultado = "¡Basajarau es el ganador!";
            imagenSrc = "../images/index/basajarau-web.png";
            break;
        case "bruja":
            resultado = "¡bruja de trasmoz son las ganadoras!";
            imagenSrc = "../images/index/bruja-web.png";
            break;
        case "buco":
            resultado = "¡Buco negro es el ganador!";
            imagenSrc = "../images/index/buco-web.png";
            break;
        case "caco":
            resultado = "¡Caco es el ganador!";
            imagenSrc = "../images/index/caco-web.png";
            break;
        case "cirila":
            resultado = "¡Cirila es la ganadora!";
            imagenSrc = "../images/index/cirila-web.png";
            break;
        case "donas":
            resultado = "¡Encantarias son las ganadoras!";
            imagenSrc = "../images/index/donas-web.png";
            break;
        case "duende":
            resultado = "¡diapleron es el ganador!";
            imagenSrc = "../images/index/duende-web.png";
            break;
        case "fantasma":
            resultado = "¡Fantasma es el ganador!";
            imagenSrc = "../images/index/fantasma-web.png";
            break;
        case "gnomo":
            resultado = "¡Gnomo es el ganador!";
            imagenSrc = "../images/index/gnomo-web.png";
            break;
        case "guixa":
            resultado = "¡Guixa es la ganadora!";
            imagenSrc = "../images/index/guixa-web.png";
            break;
        case "ome":
            resultado = "¡Ome granizo es el ganador!";
            imagenSrc = "../images/index/ome-web.png";
            break;
        case "sierpe":
            resultado = "¡Sierpe es el ganador!";
            imagenSrc = "../images/index/sierpe-web.png";
            break;
        case "silban":
            resultado = "¡Silban es el ganador!";
            imagenSrc = "../images/index/silban-web.png";
            break;
    }

    document.getElementById("mensajeGanador").innerText = resultado;
    document.getElementById("imagenGanador").src = imagenSrc;
    document.getElementById("pantallaCompleta").classList.remove('oculto');

    return false;
}
