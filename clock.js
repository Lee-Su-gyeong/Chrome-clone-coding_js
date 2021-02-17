const clockContainer= document.querySelector(".js-clock");
const clockTitle=clockContainer.querySelector("h1");

function getTime(){
    const date =new Date();
    const M= date.getMinutes();
    const H= date.getHours();
    const S= date.getSeconds();
    clockTitle.innerText=`${H <10 ? `0${H}`:H}:${M <10 ? `0${M}`:M}:${S <10 ? `0${S}`:S}`;

}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();