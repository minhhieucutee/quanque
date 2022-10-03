var score =75;
var msg = '';

function congratulate () {
    msg += 'C ongratlations !';
}

if ( score >=50) {
    congratulate();
    msg += 'Proceef to the next round.';
}
var el  =document.getElementById('answer');
el.innerHTML =msg;