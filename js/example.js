var tabel =3;
var operatol ='addition'; {
    while ( i < 11) {
        msg += i +' + ' + table + '= ' + ( i + table ) + '<br />';
        i ++;
    }
} else {
     while ( i <11) {
         msg += i + 'x' + table + ' =' + (i *table) + '<br />';
         i++;
     }
}

var el =document.getElementById('blackboard');
    el.innerHTML = msg;
    