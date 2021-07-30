'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i += 1)
  btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
  // console.log(e);
  console.log(e.key);
  //^ どのキーが押されたのか、ログされる/書き込まれる。
  if (e.key === 'C') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
