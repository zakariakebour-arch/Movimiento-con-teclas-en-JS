const bola = document.querySelector("#bola");
let x = 0;
let y = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        y += 20;
        bola.style.boxShadow = `0 -20px 50px 0 gainsboro`;
    } else if (e.key === "ArrowUp") {
        y -= 20;
        bola.style.boxShadow = `0 20px 50px 0 gainsboro`;
    } else if (e.key === "ArrowRight") {
        x += 20;
        bola.style.boxShadow = `-20px 0 50px gainsboro`;
    } else if (e.key === "ArrowLeft") {
        x -= 20;
        bola.style.boxShadow = `20px 0 50px gainsboro`;
    }
    bola.style.transform = `translate(${x}px, ${y}px)`;
});

// Generare aqui contenedores dentro de la bola para que se parezca a una luna
//Por ejemplo creamos ocho contenedores dentro
for(let i=0;i<6;i++){
    let posicionX_aleatoria = Math.random() * (bola.clientWidth - 10);
    let posicionY_aleatoria = Math.random() * (bola.clientHeight - 10);
    const bolas = document.createElement("div");
    // Le aplicamos estilo a los contenedores creados
    bolas.style.width = `10px`;
    bolas.style.height = `10px`;
    bolas.style.border = `2px solid #8e8e8e`;
bolas.style.background = ` #b5b5b5`;
    bolas.style.borderRadius = `50%`;
    bolas.style.position = `absolute`;
    // Posiciones aleatorias de las bolas
    bolas.style.top = `${posicionY_aleatoria}px`;
    bolas.style.left = `${posicionX_aleatoria}px`;
    bola.appendChild(bolas);
}
