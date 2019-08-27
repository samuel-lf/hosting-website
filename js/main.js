let menu_hamburguer = document.querySelector('#menu-responsive');
let menu_responsive = document.querySelector('.main-menu-absolute');
let ul_menu_responsive = document.querySelector('#ul_menu_responsive');
let close_menu = document.querySelector('#close_menu');
let body = document.querySelector('body');
let items_menu = ul_menu_responsive.children;

menu_hamburguer.addEventListener('click', () => {
    menu_responsive.classList.add('ativo');
    body.classList.add('overflow-hidden');
})

close_menu.addEventListener('click', () => {
    menu_responsive.classList.remove('ativo');
    body.classList.remove('overflow-hidden');
})

for (let item of items_menu) {
    item.addEventListener('click', () => {
        menu_responsive.classList.remove('ativo');
        body.classList.remove('overflow-hidden');
    })
}