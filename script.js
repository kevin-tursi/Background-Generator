var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomButton = document.getElementById('random');

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // css.textContent puts body.style.background from above into the h3 element
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var letters = '1234567890ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColor() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();

    setGradient();
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

randomButton.addEventListener('click', randomColor);