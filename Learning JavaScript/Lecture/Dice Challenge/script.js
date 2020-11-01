var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomImagesSource = "images/dice" + randomNumber1 + ".png";

randomImagesSource2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0].setAttribute('src', randomImagesSource);

document.querySelectorAll("img")[1].setAttribute('src', randomImagesSource2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🎉 Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) { 
document.querySelector("h1").innerText = "🎉 Player 2 Wins!"
}
else{
    document.querySelector("h1").innerText = "Draw!" 
}