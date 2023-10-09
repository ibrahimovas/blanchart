
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);


new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Вы не ввели имя',
    tel: 'Вы не ввели телефон',
  },
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
});

const headerBtnLoop = document.querySelector('.loop');
const headerFormOpen = document.querySelector('.header__form');
const headerBtnLoopClose = document.querySelector('.header__loop-close');

headerBtnLoop.addEventListener('click', () => {
  headerFormOpen.classList.add('is-active');
});

headerBtnLoopClose.addEventListener('click', (e) => {
  e.preventDefault();
  headerFormOpen.classList.remove('is-active');
});
