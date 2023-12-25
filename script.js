var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML=this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var drum1=new Audio('sounds/drum1.mp3');
      drum1.play();
      break;

    case "b":
      var drum2 = new Audio('sounds/drum2.mp3');
      drum2.play();
      break;

    case "c":
      var drum3 = new Audio('sounds/drum3.mp3');
      drum3.play();
      break;

    case "d":
      var drum4 = new Audio('sounds/drum4.mp3');
      drum4.play();
      break;

    case "d":
      var drum5 = new Audio('sounds/drum5.mp3');
      drum5.play();
      break;

    case "e":
      var drum6 = new Audio('sounds/drum6.mp3');
      drum6.play();
      break;

    case "f":
      var drum7 = new Audio('sounds/drum7.mp3');
      drum7.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey); 

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}