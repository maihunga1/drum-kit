var numsOfButton = document.querySelectorAll(".drum").length;

for (i = 0; i < numsOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    addSound(buttonInnerHTML);

    addAnimation(buttonInnerHTML);
  });
}

//select button by keyboard
document.addEventListener("keydown", function (event) {
  addSound(event.key);

  addAnimation(event.currentKey);
});

//add sound
function addSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

//add animation
function addAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed"), 100;
  });
}
// function HouseKeeper(yearsOfExperience, name, cleaningRepertorie) {
//   this.name = name;
//   this.yearsOfExperience = yearsOfExperience;
//   this.cleaningRepertorie = cleaningRepertorie;
//   this.clean = function () {
//     alert("Cleaning in progress ...");
//   };
// }

// var houseKeeper1 = new HouseKeeper(12, "Jane", [
//   "bathroom",
//   "lobby",
//   "bedroom",
// ]);

// var houseKeeper2 = new HouseKeeper(12, "James", [
//   "bathroom",
//   "lobby",
//   "bedroom",
// ]);
