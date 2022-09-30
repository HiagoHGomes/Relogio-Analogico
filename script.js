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