// faq
$('.ask-faqs a').on('click', function() {
    $(this).next(('.ask-faqs ul ul')).slideToggle();
});


// animations
const titleWebbanner = document.querySelector(".content-banner");
const section = document.querySelector('.aba-what-is');
const cards = document.querySelectorAll('.outlined-cards a');
const sectionProducts = document.querySelector('.aba-our-products');

const timeline = gsap.timeline();
timeline.from(titleWebbanner, { x:-1000, duration:3, delay: .5, opacity: 0, ease: 'bounce'});
timeline.from(section, {y:300, duration: 3, ease: 'bounce', opacity: 0}, '<')
timeline.from(cards, {opacity:0, duration:1, stagger: .5 }, '<')
// timeline.from(sectionProducts, { y: 300, duration: 3, ease: 'bounce', start: 'top bottom' }, '<');
 
let tween = gsap.from(".aba-our-products", {y:-300, duration: 3, opacity: 0, ease: 'bounce'}, '<'),
st = ScrollTrigger.create({
    trigger: ".aba-our-products",
    start: "top center",
    end: "bottom",
    animation: tween
});

anima = gsap.from(".aba-best", {y:-300,duration:3,opacity:0,ease:"power4"}, '<'),
st2 = ScrollTrigger.create({
    trigger: '.aba-best',
    start: "top center",
    end: "bottom",
    animation: anima
})