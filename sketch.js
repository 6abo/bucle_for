
let numShapes = 20;
let speed = 0.5;  // Velocidad inicial

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(0, 10);  // Fondo con leve transparencia para efecto de estela
  translate(mouseX, mouseY);  // Mueve el origen a la posición del mouse

  let time = frameCount * speed;  // La velocidad cambia según el clic del mouse

  // Bucle para crear las formas
  for (let i = 0; i < numShapes; i++) {
    let r = map(sin(time + i * 10), -1, 1, 50, 300);  // Radio cambiante
    let size = map(cos(time + i * 20), -1, 1, 20, 100);  // Tamaño variable
    let hue = map(i, 0, numShapes, 0, 360);  // Colores cambiantes en el espectro

    fill(hue, 100, 100);  // Colores brillantes en modo HSB
    push();
    rotate(time + i * 36);  // Rotación dinámica
    ellipse(r, r, size, size);  // Dibuja elípticas
    pop();
  }
}

function mousePressed() {
  speed = 10;  // Aumenta la velocidad cuando el mouse está presionado
}

function mouseReleased() {
  speed = 0.5;  // Restablece la velocidad cuando se suelta el mouse
}


