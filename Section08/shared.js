const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

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

const noButton = modal.querySelector('.modal__action--negative');
noButton.addEventListener('click', () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
});
