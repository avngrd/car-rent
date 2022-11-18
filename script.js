const watchCars = document.querySelector(".main-button");
const carsCatalog = document.querySelector(".cars-order");
const reserveButtons = document.querySelectorAll(".reserve-button");
const priceCheck = document.querySelector(".foot");
const inputName = document.getElementById("name");
const inputPhone = document.getElementById("phone");
const inputCar = document.getElementById("car");
const priceButton = document.querySelector(".foot-price");

let scrollToCars = () => {
    carsCatalog.scrollIntoView({behavior:"smooth"});
};
watchCars.addEventListener("click", scrollToCars);

let reserveButtonsScroll = () => {
    let scrollToCall = () => {
        priceCheck.scrollIntoView({behavior:"smooth"});
    };

    for(let i = 0; i < reserveButtons.length; i++){
        reserveButtons[i].addEventListener("click", scrollToCall);
    };
};

let inputPriceChecker = () => {
    if(inputName.value === ""){
        alert("Заполните поле имя");
    }else if(inputPhone.value === ""){
        alert("Заполните поле телефон");
    }else if(inputCar.value === ""){
        alert("Заполните поле автомобиль");
    }else{
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!")
    }

};

priceButton.addEventListener("click", inputPriceChecker);


let moveBackGround = () => {};

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.rolls');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
});
    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
})
});

reserveButtonsScroll();