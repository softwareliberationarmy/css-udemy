const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const selectPlanButtons = document.querySelectorAll('.plan button');

for (const button of selectPlanButtons) {
  button.addEventListener('click', () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  });
}

backdrop.addEventListener('click', () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
});

backdrop.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  closeModal();
});

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

const noButton = modal.querySelector('.modal__action--negative');
noButton.addEventListener('click', () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
});

toggleButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});
