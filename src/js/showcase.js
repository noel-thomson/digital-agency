const wrapper = document.querySelector('#showcase');
const showcase = document.querySelectorAll('.showcase-item');
const colors = {
  blue: '#e8f0fe',
  grey: '#eaeaea',
};
const colorsArr = [colors.blue, colors.grey];
let bgColor = colorsArr[num];
let num = 0;

const showcaseNext = () => {
  const active = document.querySelector('.active');
  active.classList.remove('active');
  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add('active');
  } else {
    showcase[0].classList.add('active');
  }
  num++;
  if (num >= colorsArr.length) {
    num = 0;
  }
  wrapper.style.background = colorsArr[num];
};
const nextInterval = setInterval(showcaseNext, 3500);
