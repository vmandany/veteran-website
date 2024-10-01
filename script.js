document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the display of the mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
