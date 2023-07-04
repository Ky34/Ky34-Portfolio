const btnTheme = document.querySelector('.theme-btn');
const theme = document.querySelector('#theme-link');
const btnIcon = document.querySelector('#btn-icon');
const btnPortfolio = document.querySelector('#btn-portfolio');
const btnSkills = document.querySelector('#btn-skills');

const tabsPortfolio = document.querySelector('#tabs-portfolio');
const tabsSkills = document.querySelector('#tabs-skills');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnDownload = document.querySelector('.profile-btn-download');
const btnCloseModalWindow = document.querySelector('.close-modal-window');

const showModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnTheme.addEventListener('click', function () {
  if (theme.getAttribute('href') == './css/light-theme.css') {
    theme.href = './css/dark-theme.css';
    btnIcon.src = './img/icons/dark-theme-btn-b.svg';
  } else {
    theme.href = './css/light-theme.css';
    btnIcon.src = './img/icons/light-theme-btn-b.svg';
  }
});

btnSkills.addEventListener('click', function () {
  btnSkills.classList.add('tabs-btn-active');
  btnPortfolio.classList.remove('tabs-btn-active');
  tabsPortfolio.classList.add('hidden');
  tabsSkills.classList.remove('hidden');
});

btnPortfolio.addEventListener('click', function () {
  btnSkills.classList.remove('tabs-btn-active');
  btnPortfolio.classList.add('tabs-btn-active');
  tabsPortfolio.classList.remove('hidden');
  tabsSkills.classList.add('hidden');
});

btnDownload.addEventListener('click', function (e) {
  showModalWindow(e);
  document.body.classList.add('no-scroll');
});

btnCloseModalWindow.addEventListener('click', function () {
  closeModalWindow();
  document.body.classList.remove('no-scroll');
});

overlay.addEventListener('click', function () {
  closeModalWindow();
  document.body.classList.remove('no-scroll');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
  document.body.classList.remove('no-scroll');
});
