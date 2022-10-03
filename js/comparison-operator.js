var pass =50;
var score = 90;

var hasdPassed =score >= pass;

var el = document.getElementById('answer');
el.textContent = 'Level passed :' +hasdPassed;
