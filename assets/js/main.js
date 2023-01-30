const titleWebbanner = document.querySelector(".content-banner");
const section = document.querySelector('.aba-what-is');
const cards = document.querySelectorAll('.outlined-cards a');

const timeline = gsap.timeline();
timeline.from(titleWebbanner, { x:-1000, duration:3, delay: .5, opacity: 0, ease: 'bounce'});
timeline.from(section, {y:300, duration: 3, ease: 'bounce', opacity: 0}, '<')
timeline.from(cards, {opacity:0, duration:1, stagger: .5 }, '<')