/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* If you do not require the indicator activated by scrolling sections. 
   Delete the main tag code in HTML and the scroll sections code in 
   JavaScript.

   And uncomment the active link code in JavaScript 👇.
*/

/*=============== ACTIVE LINK ===============*/
// const navlink = document.querySelectorAll('.nav__link')

// function activeLink(){
//     navlink.forEach((item) => item.classList.remove('active-link'))
//     this.classList.add('active-link')
// }

// navlink.forEach((item) => item.addEventListener('click', activeLink))