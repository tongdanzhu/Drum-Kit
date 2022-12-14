// Button click listener
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    // what character has been clicked
    var drumCode = this.innerHTML;
    playAudio(drumCode);
    buttonAnima(drumCode)
  });
}

// Keyboard listener
document.addEventListener("keydown", function(event){
  var drumCode = event.key;
  playAudio(drumCode);
  buttonAnima(drumCode)
})

// Play Audio
function playAudio(drumCode){
  var audio;
  switch (drumCode) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(drumCode);
  }
}

// Button animation
function buttonAnima(drumCode){
  var activeButton = document.querySelector("." + drumCode);

  // Check valid key
  var drumCodeList = ["w", "a", "s", "d", "j", "k", "l"];
  if (drumCodeList.includes(drumCode)){

    // Add animation
    activeButton.classList.add("pressed");

    // Set timeout and remove animation
    setTimeout(function(){
      document.querySelector("." + drumCode).classList.remove("pressed");
    }, 100);
  }

}
