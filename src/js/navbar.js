// open and close
const navbar = document.querySelector('#navbar');
const mobileToggle = document.querySelector('.top-nav__mobile-toggle');
const navLinks = document.querySelectorAll('.top-nav__link');

mobileToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// close mobile menu after clicking link
for (let navLink of navLinks) {
  navLink.addEventListener('click', () => {
    if (header.classList.contains('open')) {
      header.classList.toggle('open');
    }
  });
}

let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (window.scrollY === 0) {
    document.getElementById('navbar').classList.remove('white');
  } else if (prevScrollPos > currentScrollPos) {
    document.getElementById('navbar').classList.remove('hide');
    document.getElementById('navbar').classList.add('white');
  } else {
    if (!navbar.classList.contains('open')) {
      document.getElementById('navbar').classList.add('hide');
    }
  }
  prevScrollPos = currentScrollPos;
};
