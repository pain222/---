const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchors =>{
   anchors.addEventListener('click', event =>{
      event.preventDefault();
      
      const blogID = anchors.getAttribute('href').substring(1)
      
      document.getElementById(blogID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
})
