//Moving Animation to Happen
const container = document.querySelector('.container');
const crud = document.querySelector('.crud');
//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');

//Moving Event Listener
container.addEventListener('mousemove', e => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    crud.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener('mouseenter', e => {
    crud.style.transition = 'none';
    sneaker.style.transform = `translateZ(200px) rotateZ(-45deg)`;
    title.style.transform = `translateZ(150px)`;
    description.style.transform = `translateZ(125px)`;
    sizes.style.transform = `translateZ(100px)`;
    purchase.style.transform = `translateZ(75px)`;
});

//Animate Out
container.addEventListener('mouseleave', e => {
    crud.style.transition = 'all 0.5s ease';
    crud.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
    title.style.transform = `translateZ(0px)`;
    description.style.transform = `translateZ(0px)`;
    sizes.style.transform = `translateZ(0px)`;
    purchase.style.transform = `translateZ(0px)`;
});