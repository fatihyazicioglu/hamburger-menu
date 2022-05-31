const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-ul');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('show');
})

