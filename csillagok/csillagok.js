const canvas = document.getElementById("hatter");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const kezdopontX = canvas.width / 2;
const kezdopontY = canvas.height / 2;

const csillagok = [];

const csillagSzam = 50;
const sebesseg = 0.05;

function init() {
  for (let i = 0; i < csillagSzam; i++) {
    // Véletlenszerű pozíció a vásznon
    let x = Math.random() * canvas.width*2;
    let y = Math.random() * canvas.height*2;
    csillagok.push({ x, y });
  }
}

function rajzol() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  csillagok.forEach(csillag => {
    // Csillag kirajzolása
    ctx.beginPath();
    ctx.arc(csillag.x, csillag.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });
}

function frissit() {
  csillagok.forEach(csillag => {
    // Távolodás a középponttól
    let dx = csillag.x - kezdopontX;
    let dy = csillag.y - kezdopontY;

    csillag.x += dx * sebesseg;
    csillag.y += dy * sebesseg;

    // Ha kimegy a vászonról, visszaállítás a középpont környékére
    if (
      csillag.x < 0 || csillag.x > canvas.width ||
      csillag.y < 0 || csillag.y > canvas.height
    ) {
      csillag.x = kezdopontX + (Math.random() - 0.5) * 50;
      csillag.y = kezdopontY + (Math.random() - 0.5) * 50;
    }
  });
}

init();
rajzol();

setInterval(() => {
  frissit();
  rajzol();
}, 100); // 100 ms = 0,1 s
