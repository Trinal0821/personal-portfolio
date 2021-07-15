var descriptions = [ "I'm a student", "I'm a software engineer intern", "I'm a mentor"];
var counter = 0;
change();
var timer = setInterval(change, 5000);

function change() {
 document.getElementById("changeDescription").innerHTML = descriptions[counter];
  counter++;
  if(counter >= descriptions.length) {
    counter = 0;
  }
}