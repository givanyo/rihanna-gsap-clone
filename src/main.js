import './styles/index.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const contentSections = gsap.utils.toArray('.content');

gsap.set('.left', {
    x: '-80vw',
})

gsap.set('.right', {
    x: '80vw',
})

gsap.set('.appear', {
    opacity: 0,
});

gsap.to('.appear', {
    opacity: 1,
    duration: 0.75,
});

contentSections.forEach((section) => {
    const leftChildren = section.querySelectorAll('.left');
    const rightChildren = section.querySelectorAll('.right');
    const fullImg = section.querySelector('.full-img');

    gsap.to(leftChildren, {
        x: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top 120%',
            end: 'top 30%',

        }
    });

    gsap.to(rightChildren, {
        x: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top 100%',
            end: 'top 30%'
        }
    });

    gsap.to(fullImg, {
        backgroundPositionY: 100,
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top 80%',
            end: '+=200%',
        }
    });
});




