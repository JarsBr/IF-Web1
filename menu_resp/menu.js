function createMenu(menuItems, linkLogoMenu, linkHamburger) {
  const header = document.createElement('header');
  header.classList.add('header');

  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const logoLink = document.createElement('a');
  logoLink.href = '';
  logoLink.classList.add('logo');

  const logoImg = document.createElement('img');
  logoImg.src = linkLogoMenu;
  logoImg.alt = '';
  logoLink.appendChild(logoImg);

  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.classList.add('hamburger');

  const hamburgerImg = document.createElement('img');
  hamburgerImg.src = linkHamburger;
  hamburgerImg.alt = '';
  hamburgerBtn.appendChild(hamburgerImg);

  const ul = document.createElement('ul');
  ul.classList.add('nav-list');



  menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.text;
    if (item.target) {
      a.target = item.target;
    }
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(logoLink);
  nav.appendChild(hamburgerBtn);
  nav.appendChild(ul);
  header.appendChild(nav);

  // Inserindo o menu no elemento com a classe 'menu-container'
  const menuContainer = document.querySelector('.menu-container');
  menuContainer.appendChild(header);
}



const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

document.addEventListener("DOMContentLoaded", function () {
  createMenu();
});