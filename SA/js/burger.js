let headerMenu = document.querySelector('.header__menu');
let headerBurger = document.querySelector('.header__burger');
let body = document.body


if (headerMenu && headerBurger){
   headerBurger.addEventListener('click', () => {
      headerMenu.classList.toggle('active')
      headerBurger.classList.toggle('active')
      body.classList.toggle('lock')
   })

   headerMenu.querySelectorAll('.header__link').forEach(link => {
      link.addEventListener('click', () => {
         headerMenu.classList.remove('active')
         headerBurger.classList.remove('active')
         body.classList.remove('lock')
      })
   }) 
}