const debounce  = function(func, wait , immediate) {
    let timeout
    return function (...args) {
        const context = this 
        const later = function () {
            timeout = null
            if(!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}




const target = document.querySelectorAll('[data-anime]')



const animationClass = 'animate'

function animeScroll() {
   const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
   target.forEach(function(element) {
    if((windowTop) > (element.offsetTop)) {
        element.classList.add(animationClass)
    } else {
        element.classList.remove(animationClass)
    }
    
    
   })
    
   
}

animeScroll()


function initeScrollSuave () {

if(target.length) {
window.addEventListener('scroll', debounce (function() {
    animeScroll()
}, 200))
}

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"')

function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    

    const topSection = (section.offsetTop)
    window.scrollTo({
        top: topSection - 80,
        behavior: 'smooth'
   })
}

linksInternos.forEach((link)=> {
    link.addEventListener('click' , scrollToSection)
})
}
initeScrollSuave()


//menu mobile

const btnMobile = document.querySelector('.btn-mobile')

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
      } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
      }
}


btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)