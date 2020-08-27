var numberOfKeys = document.querySelectorAll(".key").length;

for (var i = 0; i < numberOfKeys; i++) {

  document.querySelectorAll(".key")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

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
      var c3 = new Audio("sound/c3.ogg");
      c3.play();
      break;

    case "w":
      var c_3 = new Audio("sound/c-3.ogg");
      c_3.play();
      break;
    
    case "s":
      var d3 = new Audio("sound/d3.ogg");
      d3.play();
      break;

    case "e":
      var d_3 = new Audio("sound/d-3.ogg");
      d_3.play();
      break;

    case "d":
      var e3 = new Audio("sound/e3.ogg");
      e3.play();
      break;
  
    case "f":
      var f3 = new Audio("sound/f3.ogg");
      f3.play();
      break;
    
    case "t":
      var f_3 = new Audio("sound/f-3.ogg");
      f_3.play();
      break;

    case "g":
      var g3 = new Audio("sound/g3.ogg");
      g3.play();
      break;
   
    case "y":
      var g_3 = new Audio("sound/g-3.ogg");
      g_3.play();
      break;  

    case "h":
      var a3 = new Audio("sound/a3.ogg");
      a3.play();
      break;

    case "u":
      var a_3 = new Audio("sound/a-3.ogg");
      a_3.play();
      break;

    case "j":
      var b3 = new Audio("sound/b3.ogg");
      b3.play();
      break;
     
    case "k":
      var c4 = new Audio("sound/c4.ogg");
      c4.play();
      break;
      
    case "o":
      var c_4 = new Audio("sound/c-4.ogg");
      c_4.play();
      break;

    case "l":
        var d4 = new Audio("sound/d4.ogg");
        d4.play();
        break;

    case "p":
      var d_4 = new Audio("sound/d-4.ogg");
      d_4.play();
      break;
  
    case ";":
        var e4 = new Audio("sound/e4.ogg");
        e4.play();
        break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {
  if(currentKey==';')
  var activeButton = document.querySelector("#\\;");
  else var activeButton = document.querySelector("#" + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
