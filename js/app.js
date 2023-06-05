gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
    
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    gsap.fromTo('.header', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.header',
            start: 'center',
            end: '280',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

    itemsL.forEach(item => {
        gsap.fromTo(item, { x: -100, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

    itemsR.forEach(item => {
        gsap.fromTo(item, { x: 100, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '100',
                scrub: true
            }
        })
    })

}

const wrapper = document.querySelector('.wrapper-s');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})
