const menuToggle = document.querySelector('.toggle')
const home = document.querySelector('.showcase')
menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active')
    home.classList.toggle('active')
})

$('.slide').hiSlide();
