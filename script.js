

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos  = document.getElementById('segundos')

const relogio = setInterval(function time(){

    let dateToday = new Date() /*Pegar a data atual*/ 
 
    let hr = dateToday.getHours()          /*Pegar a hora atual*/ 
    let min = dateToday.getMinutes()     /*Pegar a minuto atual*/ 
    let seg = dateToday.getSeconds()    /*Pegar a segundo atual*/ 

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg



})