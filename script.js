// const menuToggle = document.querySelector('.menu-toggle');
// const menu = document.querySelector('.menu');

// menuToggle.addEventListener('click', () => {
//   menuToggle.classList.toggle('active');
//   menu.classList.toggle('active');
// });

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close the menu when a menu item is clicked
menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.classList.remove('active');
  }
});