import gsap from 'gsap';
import eventEmitter from './eventListener.js';

export function addHoverEffect() {
    let debounceTimer;

    const svgElements = document.querySelectorAll('.rightCornerMenu');
    const svgWrapper = document.querySelector('.rightCornerWrapper');
    const topLineSvg = document.querySelector('.topLineSvg');
    const leftLineSvg = document.querySelector('.leftLineSvg');
    svgElements.forEach(svgElement => {
        const paths = svgElement.querySelectorAll('path');
        gsap.set(paths, {strokeOpacity: 1});
        svgElement.addEventListener('mouseenter', () => {
            gsap.to(paths[0], {duration: 0.5, attr: {d: "M 17 44 L 17 0 L 100 0"}, strokeWidth: 3});
            gsap.to(paths[1], {duration: 0.5, attr: {d: "M 100 0 L 100 44 L 17 44"}, strokeWidth: 10});
        });
        svgElement.addEventListener('mouseleave', () => {
            gsap.to(paths[0], {duration: 0.5, attr: {d: "M 0 44 L 0 0 L 100 0"}, strokeWidth: 1});
            gsap.to(paths[1], {duration: 0.5, attr: {d: "M 117 0 L 117 44 L 17 44"}, strokeWidth: 5});
        });
    });

    svgWrapper.addEventListener('mouseenter', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            gsap.to(topLineSvg.querySelector('line'), {
                duration: 0.2,
                attr: {x2: "0%", y1: "2.5%"},
                onComplete: (line, wrapper) => eventEmitter.emit('topLineAnimationComplete', line, wrapper),
                onCompleteParams: [leftLineSvg.querySelector('line'), svgWrapper]
            });
        }, 1000);

    });


    svgWrapper.addEventListener('mouseleave', () => {
        clearTimeout(debounceTimer);
        gsap.killTweensOf(svgWrapper);
        gsap.to(svgWrapper, {
            scale: 1,
            duration: 0.2,
            yoyo: false,
            repeat: 0
        });
        gsap.to(topLineSvg.querySelector('line'), {
            duration: 0.2,
            attr: {x2: "100%", y1: "0%"},
            onComplete: () => eventEmitter.emit('topLineReset')
        });
        gsap.to(leftLineSvg.querySelector('line'), {
            duration: 0.2,
            attr: {y1: "0", y2: "0"},
        });
    });

}
