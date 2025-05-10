//context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

document.addEventListener("DOMContentLoaded", function () {
    kepernyo_szelesseg = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    kepemyo_magassag = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    const canvas = document.getElementById('smileyCanvas');
    // a canvas-t az oldal közepére igazítjuk
    canvas.style.position = 'absolute';
    canvas.style.left = (kepernyo_szelesseg - canvas.width) / 2 + 'px';
    canvas.style.top = (kepemyo_magassag - canvas.height) / 2 + 'px';
    canvas.style.border = '1px solid #cccccc'; // keret a canvas körül
    // Rajzolási kontextus beállítása, 2D-s rajzolás 
    const ctx = canvas.getContext('2d');

    // Fej (sárga kör) – kisebb méret és középre igazítva
    ctx.beginPath(); // új útvonal kezdete
    ctx.arc(100, 100, 70, 0, Math.PI * 2, true); // középen, sugár: 70
    ctx.fillStyle = 'yellow';
    ctx.fill(); // a megrajzolt terület kitöltése
    ctx.lineWidth = 4; // vonalvastagság
    ctx.stroke();

    // Bal szem
    ctx.beginPath();
    ctx.arc(70, 80, 8, 0, Math.PI * 2, true);
    ctx.fillStyle = 'black';
    ctx.fill();

    // Jobb szem
    ctx.beginPath();
    ctx.arc(130, 80, 8, 0, Math.PI * 2, true);
    ctx.fillStyle = 'black';
    ctx.fill();

    // Száj (mosolygó ív)
    ctx.beginPath();
    ctx.arc(100, 110, 35, 0, Math.PI, false); // félkör ív
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.stroke();
});