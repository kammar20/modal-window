const openModal = document.querySelector('.open-modal');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelectorAll('.close-btn');

openModal.addEventListener('click', function () {
  modalContainer.style.display = 'block';
});

for (let btn of closeBtn) {
  btn.addEventListener('click', function () {
    modalContainer.style.display = 'none';
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modalContainer.style.display = 'none';
  }
});

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'HTML') {
    modalContainer.style.display = 'none';
  }
});
