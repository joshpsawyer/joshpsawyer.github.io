document.querySelector('#close-mobile-menu').addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.remove('mobile-menu-active');
}); 

document.querySelector('#open-mobile-menu').addEventListener('click', () => {
    document.querySelector('#mobile-menu').classList.add('mobile-menu-active');
}); 