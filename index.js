/*jshint esversion: 6*/

//MOBILE NAV
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});


//TABS
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'));
    tabs.forEach(item => item.classList.remove('has-text-weight-bold'));
    tab.classList.add('is-active');
    tab.classList.add('has-text-weight-bold');

    const target = tab.dataset.target;
    tabContentBoxes.forEach(box => {
      if(box.getAttribute('id') === target){
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    });
  });
});

//MODAL
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close');

signupButton.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

modalCloseBtn.addEventListener('click', () => {
  modal.classList.remove('is-active');
});