import './styles/index.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const contentSections = gsap.utils.toArray('.content');

gsap.set('.left', {
    x: '-100vw'
})

gsap.set('.right', {
    x: '100vw'
})
contentSections.forEach((section) => {
    const leftChildren = section.querySelectorAll('.left');
    const rightChildren = section.querySelectorAll('.right');

    gsap.to(leftChildren, {
        x: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top 120%',
            end: 'top 30%',

        }
    })

    gsap.to(rightChildren, {
        x: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top 100%',
            end: 'top 30%'
        }
    })
})




