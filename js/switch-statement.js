var msg ;
var level = 2;

switch ( level) {
    case 1:
        msg ='Good luck on the first test ';
        break ;
    case 2:
        msg = 'second of three -keep going!';
        break;
    case 3:
        msg ='Final round ,alomost there !';
    default:
        msg ='Good luck!';
        break;
}

var el = document.getElementById('answer');
el.textContent =msg;
