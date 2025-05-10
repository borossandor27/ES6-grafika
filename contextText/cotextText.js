const kepernyo_szelesseg = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
const kepemyo_magassag = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("textForm");
    const feliratVaszon = document.getElementById("feliratVaszon");
    feliratVaszon.style.border = "1px solid #cccccc"; // keret a vászon körül
    const ctx = feliratVaszon.getContext("2d");

    const feliratSzovegeBeviteliMezo = document.getElementById("feliratSzovege");

    const rajzolSzoveget = (szoveg) => {
        // Vászon törlése
        ctx.clearRect(0, 0, feliratVaszon.width, feliratVaszon.height);

        // Szöveg stílusa
        const fontListElement = document.getElementById("szovegBetuTipus");
        const font = fontListElement.options[fontListElement.selectedIndex].value;
        ctx.font = `${document.getElementById("szovegMeret").value || 20}px ${font|| "Arial"}`;
        ctx.fillStyle = document.getElementById("szovegSzin").value || "black";
        ctx.textAlign = "center"; // vízszintesen középre
        ctx.textBaseline = "middle"; // függőlegesen középre

        // Szöveg kirajzolása középre
        ctx.fillText(szoveg, feliratVaszon.width / 2, feliratVaszon.height / 2);
        document.getElementById("textWidth").innerHTML = `szöveg szélessége: ${ctx.measureText(szoveg).width} magassága: ${parseInt(ctx.font)}`; 
    };

    // Induláskor is rajzoljuk
    rajzolSzoveget(feliratSzovegeBeviteliMezo.value);

    // Bármely mező változására újrarajzol
    form.querySelectorAll("input, select").forEach(input => {
        input.addEventListener("input", rajzolSzoveget.bind(null, feliratSzovegeBeviteliMezo.value));
    });
});
