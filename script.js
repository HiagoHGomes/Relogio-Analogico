let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date(); //Pegar data completa
    let hour = now.getHours(); //Pegar as horas
    let minute = now.getMinutes(); //Pegar minutos
    let second = now.getSeconds(); //Pegar segundos
    let horaLocal = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    digitalElement.innerHTML = horaLocal; //Relogio Digital;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
};

function fixZero(time) {
    return time < 10? `0${time}` : time; //If simplificado;
} //Para adicionar um 0 quando a hora, minuto ou segundo for menor do que 10;


setInterval(updateClock, 1000);
updateClock();

let now = new Date(); //Pegar data completa
let hour = now.getHours(); //Pegar as horas

if (hour >=0 && hour <6) {
    //boa madrugada
    document.querySelector('body').style.background = '#0d0e12'
    document.querySelector('h3').innerHTML="Boa madrugada!";

}else if(hour >=6 && hour <12){
    //bom dia
    document.querySelector('body').style.background = '#7d92b1'
    document.querySelector('h3').innerHTML="Bom dia!";
}else if (hour>=12 && hour <18){
    //boa tarde
    document.querySelector('body').style.background = '#ff6002'
    document.querySelector('h3').innerHTML="Boa tarde!";
}else{
    //boa noite
    document.querySelector('body').style.backgroundColor = '#000000'
    document.querySelector('body').style.backgroundImage = 'url(images/noite.jpg)'
    document.querySelector('h3').innerHTML="Boa noite!";
}


