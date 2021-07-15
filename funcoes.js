var display = document.getElementById('display');
var seg = document.getElementById('seg');
var min = document.getElementById('min');
var hora = document.getElementById('hora');
var comecar = document.getElementById('comecar');

var horaAtual;
var minAtual;
var segAtual;
var interval;
var cronSeg

for (let i = 0; i <= 60; i++) {
    hora.innerHTML +='<option value ="'+ i + '"> ' + i + ' </option>'; 
}

for (let i = 0; i <= 60; i++) {
    min.innerHTML +='<option value ="'+ i + '"> ' + i + ' </option>'; 
}

for (let i = 1; i <= 60; i++) {
    seg.innerHTML +='<option value ="'+ i + '"> ' + i + ' </option>'; 
}

comecar.addEventListener('click', function() {
    horaAtual = hora.value;
    minAtual = min.value;
    segAtual = seg.value;

    display.childNodes[1].innerHTML = (horaAtual < 10 ?'0' + horaAtual : horaAtual) + ' : ' + (minAtual < 10 ? '0' + minAtual : minAtual ) + ' : ' + (segAtual < 10 ? '0' + segAtual : segAtual); 
    interval = setInterval(function(){
        segAtual--;
        if (segAtual <= 0) {
            if (minAtual > 0) {
                minAtual--;
                segAtual = 59;
                if (horaAtual > 0) {
                    horaAtual--;
                    minAtual = 59;
                    segAtual = 59;
                }
            } else if(horaAtual > 0 && minAtual == 0) {
                horaAtual--;
                minAtual = 59;
                segAtual = 59;
            } else {
                document.getElementById("sound").play();
                alert("ALARME!!");
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = (horaAtual < 10 ?'0' + horaAtual : horaAtual) + ' : ' + (minAtual < 10 ? '0' + minAtual : minAtual ) + ' : ' + (segAtual < 10 ? '0' + segAtual : segAtual); 
    }, 1000);
})