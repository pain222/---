const sliderBody = document.querySelector('.slider__body')
const leftArrow = document.querySelector('.slider__arrow_left')  
const rigthArrow = document.querySelector('.slider__arrow_rigth')
const sliderBtn = document.querySelector('.slider__btn')
const sliderItems = document.querySelectorAll('.slider__item')
const dots = document.querySelectorAll('.dot')
const width = screen.width

let position = width > 991.98 ? -400 : -1300
let dotIndex = 4
let itemInxde = 13
let flag = false 

const nextSlide = () => {
   if ( position > (-(dots.length - 1) * 100) && width > 991.98){
      position -= 100
      dotIndex++
   } else if (position > (-(sliderItems.length - 1) * 100) && width < 991.98){
      position -= 100
      itemInxde++
   }
   sliderBody.style.left = position + '%'
   activeSlide(dotIndex)
}

const pervSlide = () => {
   if (position !== 0 && width > 991.98) {
      position += 100
      dotIndex--
   } else if (position !== 0 && width < 991.98){
      position += 100
      itemInxde--
   }
   sliderBody.style.left = position + '%'
   activeSlide(dotIndex)
}

const activeSlide = (index) => {
   for(let dot of dots){
      dot.classList.remove('active')
   }
   
   dots[index].classList.add('active')
}

rigthArrow.addEventListener('click', nextSlide)
leftArrow.addEventListener('click', pervSlide)

if (width > 991.98) {
   dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
         position = -100 * index
         sliderBody.style.left = position + '%'
         dotIndex = index
         activeSlide(dotIndex)
      })
   })
}

sliderBtn.addEventListener('click', () => {
   sliderBtn.classList.toggle('active')
})

setInterval(() => {
   if (width > 991.98){
      if (dotIndex === 8){
         flag = true
      } else if (dotIndex === 0){
         flag = false
      }
   }
   if (width < 991.98){
      if (itemInxde === 26){
         flag = true
      } else if (itemInxde === 0){
         flag = false
      }
   }

   if ((flag) && (sliderBtn.classList[1] === 'active')){
      pervSlide()
   } else if ((!flag) && (sliderBtn.classList[1] === 'active')){
      nextSlide()
   }

}, 4500)