const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const selectPlanButtons = document.querySelectorAll('.plan button');

for (const button of selectPlanButtons) {
  button.addEventListener('click', () => {
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

backdrop.addEventListener('click', () => {
  backdrop.classList.remove('open');
  modal.classList.remove('open');
});

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  closeModal();
});

function closeModal() {
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}

const noButton = modal.querySelector('.modal__action--negative');
noButton.addEventListener('click', () => {
  backdrop.classList.remove('open');
  modal.classList.remove('open');
});

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
