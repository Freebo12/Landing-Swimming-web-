const modalController = ({ modal, btnOpen, btnClose }) => {
  const btnElement = document.querySelectorAll(btnOpen);
  const modalElement = document.querySelector(modal);
  const bodyElement = document.querySelector('body');

  modalElement.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

  const modalCloseDec = event => {
    const target = event.target;

    if (target === modalElement || target.closest(btnClose)) {
      modalElement.style.opacity = 0;
      bodyElement.style.overflow = 'auto';

      setTimeout(() => {
        modalElement.style.visibility = 'hidden';
      }, 300);
    }
  };

  const modalOpenDecs = () => {
    modalElement.style.visibility = 'visible';
    modalElement.style.opacity = 1;
    bodyElement.style.overflow = 'hidden';
  };

  btnElement.forEach(btn => {
    btn.addEventListener('click', modalOpenDecs);
  });

  modalElement.addEventListener('click', modalCloseDec);
};
modalController({
  modal: '.modal-desc',
  btnOpen: '.btn-desc',
  btnClose: '.btn-close-desc',
});

modalController({
  modal: '.modal-schedule',
  btnOpen: '.btn-sc',
  btnClose: '.btn-close-desc',
});

modalController({
  modal: '.modal-quippe',
  btnOpen: '.btn-eq',
  btnClose: '.btn-close-desc',
});

modalController({
  modal: '.modal-price',
  btnOpen: '.btn-price',
  btnClose: '.btn-close-desc',
});
