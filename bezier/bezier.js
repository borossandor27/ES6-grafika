//context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('smileyCanvas');
    const ctx = canvas.getContext('2d');

    // Fej (sárga kör) – kisebb méret és középre igazítva
    ctx.beginPath();
    ctx.arc(100, 100, 70, 0, Math.PI * 2, true); // középen, sugár: 70
    ctx.fillStyle = 'yellow';
    ctx.fill();
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