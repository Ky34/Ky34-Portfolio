const btnTheme = document.querySelector('.theme-btn');
const theme = document.querySelector('#theme-link');
const btnIcon = document.querySelector('#btn-icon');

const iconGit = document.querySelector('#icon-git');
const iconTwitter = document.querySelector('#icon-twitter');
const iconLinkedin = document.querySelector('#icon-linkedin');
const iconYoutube = document.querySelector('#icon-youtube');

btnTheme.addEventListener("click", function () {
  if (theme.getAttribute("href") == "./css/light-theme.css"){
    theme.href = "./css/dark-theme.css";
    btnIcon.src = "./img/icons/dark-theme-btn-b.svg";
    iconGit.src = "./img/icons/social-icons/github-d.svg";
    iconTwitter.src = "./img/icons/social-icons/twitter-d.svg";
    iconLinkedin.src = "./img/icons/social-icons/linkedin-d.svg";
    iconYoutube.src = "./img/icons/social-icons/youtube-d.svg";
  } else {
    theme.href = "./css/light-theme.css";
    btnIcon.src = "./img/icons/light-theme-btn-b.svg";
    iconGit.src = "./img/icons/social-icons/github-l.svg";
    iconTwitter.src = "./img/icons/social-icons/twitter-l.svg";
    iconLinkedin.src = "./img/icons/social-icons/linkedin-l.svg";
    iconYoutube.src = "./img/icons/social-icons/youtube-l.svg";
  }
})