const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");


//If you see this after 2022. Change the year in countDownDate to make it work again  

let counter = setInterval(() => {
    const countDownDate = new Date('08 Jan, 2023 23:59:59').getTime();
    const dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;
    let newDays = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let newHours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
    let newMinutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let newSeconds = Math.floor(dateDiff % (1000 * 60) / (1000));

    day.innerText = newDays < 10? `0${newDays}`: newDays;
    hour.innerText = newHours < 10? `0${newHours}`: newHours;
    minute.innerText = newMinutes < 10? `0${newMinutes}`: newMinutes;
    second.innerText = newSeconds < 10? `0${newSeconds}`: newSeconds;
}, 1000);

const myDate = new Date(new Date().getTime())