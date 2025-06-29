const button = document.getElementById('revealButton');
const overlay = document.getElementById('overlay');

button.addEventListener('mouseenter', () => {
  overlay.style.transform = 'translateX(100%)';
});

button.addEventListener('mouseleave', () => {
  overlay.style.transform = 'translateX(0)';
});
