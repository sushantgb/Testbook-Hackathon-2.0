
//receiving the array of drum kit

var drumBeats = document.querySelectorAll(".drum");
console.log(drumBeats);  //for debugging reference

//function when drum is played by clicking the buttons

for (let i = 0; i < drumBeats.length; i++) {

    //adding event to all elements of drum class

    drumBeats[i].addEventListener("click", () => {
        var keyValue = drumBeats[i].innerHTML;
        console.log("key: " + keyValue);
        playSound(keyValue); //calling play sound funct
        animationButtons(keyValue); //calling animation
    });
}

//function when when drum is played by keyboard

document.addEventListener("keypress", (event) => {
    var keyValue =  event.key;  //recieving the pressed key by event
    playSound(keyValue);  //calling play sound on keypress
    animationButtons(keyValue);  //calling animation
    console.log("keyselect: " + event.key); //for debugging reference
});

//function to play sound on the case of selected key

function playSound(keyValue) {
    switch (keyValue) {
        case "w":
            var aud1 = new Audio("Sounds/high-tom.mp3");
            aud1.play();
            break;

        case "a":
            var aud2 = new Audio("Sounds/medium-tom.mp3");
            aud2.play();
            break;

        case "s":
            var aud3 = new Audio("Sounds/floor-tom.mp3");
            aud3.play();
            break;

        case "x":
            var aud4 = new Audio("Sounds/snare-drum.mp3");
            aud4.play();
            break;

        case "d":
            var aud5 = new Audio("Sounds/bass-drum.mp3");
            aud5.play();
            break;

        case "j":
            var aud6 = new Audio("Sounds/crash.mp3");
            aud6.play();
            break;

        case "k":
            var aud7 = new Audio("Sounds/ride.mp3");
            aud7.play();
            break;

        case "l":
            var aud8 = new Audio("Sounds/hi-hats.mp3");
            aud8.play();
            break;

        default: console.log("wrong key");
    }
}

//function to add and remove the animation class on the pressed button 

function animationButtons(keyValue) {
    var pressedKey = document.querySelector("." + keyValue);
    //adding the animation
    pressedKey.classList.add("animation-buttons");
    //removing the animation by setting time of 100 ms or 0.1 s
    setTimeout(() => {
        pressedKey.classList.remove("animation-buttons");
    }, 100)
}