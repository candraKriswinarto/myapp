
// Toggle Menu Show/hide
let humIcon = document.querySelector('.hum-icon');
let mobileNav = document.querySelector('.main-nav-mobile');
humIcon.addEventListener('click', function() {
    if(mobileNav.style.display == "block") {
        mobileNav.style.display = "none";
        console.log("Work!");
    } else {
        mobileNav.style.display = "block";
        console.log("Pendo le");
    }
});



// Hide navbar when user scroll
let bgNav = document.querySelector('.bg-nav');
// let navColA = document.querySelectorAll('.main-nav li a');

window.onscroll = function() {
    "use strict"
    if (document.documentElement.scrollTop >= 50) {
        bgNav.classList.add("nav-colored");
        bgNav.classList.remove("nav-transparent");
        // console.log("change");
    }
    else {
        bgNav.classList.add("nav-transparent");
        bgNav.classList.remove("nav-colored")
    }
};

