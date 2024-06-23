function readmore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Lasīt vairāk";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Paslēpt";
        more.style.display = "inline";
    }
}
