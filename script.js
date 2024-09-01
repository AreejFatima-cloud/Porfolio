
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".element", {
        strings: ["","Front-end Developer.", "WordPress Developer.","Elementor Pro Expert.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 100,
        backdelay: 2000,
        loop: true,
    });
});
const menuIcon = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    // Toggle the cross icon
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');

    // Toggle the visibility of the navbar
    navbar.classList.toggle('active');
}

