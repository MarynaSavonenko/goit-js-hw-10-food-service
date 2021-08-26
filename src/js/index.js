//IMPORTS//
import menus from './menu.json';
import menuCardTpl from '../templates/menu-card.hbs';
//DATA
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeToggler = document.getElementById('theme-switch-toggle');
//Listeners//
const palleteComtainer = document.querySelector('.js-menu');
const onTogglerChange = themeToggler.addEventListener('change', themeChange);
const menuMarkup = createMenuCards(menus);
palleteComtainer.insertAdjacentHTML('beforeend', menuMarkup);

document.body.classList.add(
  JSON.parse(localStorage.getItem('my-data'))
    ? JSON.parse(localStorage.getItem('my-data'))
    : Theme.LIGHT,
);
if (document.body.classList.contains(Theme.DARK)) {
  themeToggler.checked = true;
}

//function//

function themeChange() {
  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('my-data', JSON.stringify(Theme.DARK));
    return;
  }
  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
  localStorage.setItem('my-data', JSON.stringify(Theme.LIGHT));
}
function createMenuCards(menus) {
  return menus.map(menuCardTpl).join('');
}
