const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const menuSections = document.getElementsByClassName('navLinks')[0];

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menuSections.style.display = 'inline-block';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menuSections.style.display = 'none';
    }
});