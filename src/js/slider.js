const slides = document.querySelectorAll('.slide');

const slideNext = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
};
const slideInterval = setInterval(slideNext, 3000);
