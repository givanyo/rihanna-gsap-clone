import './styles/index.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const contentSections = gsap.utils.toArray('.content');

gsap.set('.left', {
    x: '-80vw',
});

gsap.set('.right', {
    x: '80vw',
});

gsap.set('.appear', {
    opacity: 0,
});

gsap.set('.text-lg', {
    opacity: 0.9,
    scale: 0.8,
});

gsap.to('.appear', {
    opacity: 1,
    duration: 0.75,
});

contentSections.forEach((section) => {
    const overlapUp = section.querySelector('#overlap-up');

    const leftChildren = section.querySelectorAll('.left');
    const rightChildren = section.querySelectorAll('.right');    
    const upChildren = section.querySelector('.up');
    const downChildren = section.querySelector('.down');

    const fullImgPos = section.querySelector('.full-img.position');
    const fullImgScale = section.querySelector('.full-img.scale');
    const textLg = section.querySelector('.text-lg');

    gsap.set(fullImgScale, {
        backgroundSize: '140%',

    });
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



    gsap.to(fullImgPos, {
        backgroundPositionY: 100,
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top 80%',
            end: '+=200%',
        }
    });

    gsap.to(textLg, {
        scale: 1,
        opacity: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: '-20% center',
            end: 'center center',
        }
    });

    gsap.to(fullImgScale, {
        backgroundSize: "100%",
        ease: 'power3.inOut',
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: '10% center',
            end: '60% center',
        }
    });
    gsap.from(overlapUp, {
        y: "-80dvh",
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: '6% center',
            end: '60% center'
        }
    });

    gsap.from(downChildren, {
        y: "80dvh",
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top 100%',
            end: 'top 30%'
        }
    });
    gsap.from(upChildren, {
        y: "-80dvh",
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top 120%',
            end: 'top 30%',

        }
    });
});




