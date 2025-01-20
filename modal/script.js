'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const HIDDEN_CLASS = 'hidden';

const toggleVisibility = (element, shouldHide) => {
  element.classList.toggle(HIDDEN_CLASS, shouldHide);
};

const closeModal = () => {
  toggleVisibility(modal, true);
  toggleVisibility(overlay, true);
};

const openModal = () => {
  toggleVisibility(modal, false);
  toggleVisibility(overlay, false);
};

const handleEscapeKey = (e, closeKey = 'Escape') => {
  if (e.key === closeKey && !modal.classList.contains(HIDDEN_CLASS)) {
    closeModal();
  }
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keyup', handleEscapeKey);
