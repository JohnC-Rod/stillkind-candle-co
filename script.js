const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const launchButton = document.querySelector('.launch-button');
const launchMessage = document.querySelector('.launch-message');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

launchButton.addEventListener('click', () => {
  launchMessage.textContent = 'Launch sign-up will open once our official social page is ready.';
});

document.getElementById('year').textContent = new Date().getFullYear();
