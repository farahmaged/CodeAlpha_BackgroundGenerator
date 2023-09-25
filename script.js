function generate() {
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var color3 = document.getElementById("color3").value;

    var angle = Math.round(Math.random() * 360);

    var gradient = `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;

    document.getElementById("container").style.background = gradient;
    document.getElementById("output").innerHTML = gradient;
}

window.onload = generate;
