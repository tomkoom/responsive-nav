let nav = document.querySelector('.nav'),
    vMenu = document.querySelector('.visible-menu'),
    hMenu = document.querySelector('.hidden-menu'),
    burger = document.querySelector('.burger'),
    burgerCount = document.querySelector('.burger-count'),
    breaks = [];

function updateNav() {
    // get nav width
    let navWidth = burger.classList.contains('hid') ? nav.offsetWidth : nav.offsetWidth - burger.offsetWidth;
    let vMenuWidth = vMenu.offsetWidth;

    if (vMenuWidth > navWidth) {
        breaks.push(vMenuWidth);
        hMenu.prepend(vMenu.lastElementChild);
        burger.classList.remove('hid');
        burgerCount.innerText = breaks.length;
        updateNav();

    } else {
        if (navWidth > breaks[breaks.length - 1]) {
            breaks.pop();
            vMenu.append(hMenu.firstElementChild);
            burgerCount.innerText = breaks.length;
        }
        if (breaks.length < 1) {
            burger.classList.add('hid');
            hMenu.classList.remove('active');
        }
    }
}

burger.addEventListener('click', function () {
    hMenu.classList.toggle('active');
    burger.classList.toggle('active');
})

window.addEventListener('resize', updateNav);
document.addEventListener('DOMContentLoaded', updateNav);