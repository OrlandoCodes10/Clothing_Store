const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) { //need to make sure people could click out of the nav bar burgers//
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) { //when someone clicks on the x(close) button our nav bar will move to the right side//
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}