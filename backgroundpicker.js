var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function backgroundpicker(){
	body.style.background = " linear-gradient(to right ," + color1.value + "," + color2.value + ")";
	css.textContent = "background : " + body.style.background +";";
}
var copyEmailBtn = document.querySelector('.inputcopy');
copyEmailBtn.addEventListener('click', function(event) {
  var emailLink = document.querySelector('.myInput');
  var range = document.createRange();
  range.selectNode(emailLink);
  window.getSelection().addRange(range);

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy email command was ' + msg);
  } catch(err) {
    console.log('Oops, unable to copy');
  }
  window.getSelection().removeAllRanges();
});
color1.addEventListener("input", backgroundpicker);
color2.addEventListener("input", backgroundpicker);