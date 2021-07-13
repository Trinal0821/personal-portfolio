var descriptions = ["I am a student", "I am a software engineer intern", "I am a mentor"];

var counter = 0;
var timer = setInterval(change, 5000);

function change() {
 document.getElementById("changeDescription").innerHTML = descriptions[counter];
  counter++;
  if(counter >= descriptions.length) {
    counter = 0;
  }
}