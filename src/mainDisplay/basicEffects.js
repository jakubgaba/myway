import gsap from 'gsap';
import eventEmitter from './eventListener.js';

export function addHoverEffect() {
    let debounceTimer;
    const svgElements = document.querySelectorAll('.rightCornerMenu');
    const svgWrapper = document.querySelector('.rightCornerWrapper');
    const topLineSvg = document.querySelector('.topLineSvg');
    const leftLineSvg = document.querySelector('.leftLineSvg');


    /**
     * Creating mouseenter and mouseleave effect for each path element of rightCornerMenu.
     * @see {@link addSVGCorner} - Button creation parameters
     * @param {HTMLElement} svgElements - Creating same loop for each rightCornerMenu button created.
     * @param {SVGPathElement} paths - Save path element from each button. Change both paths on mouseenter
     *                                 and change it on mouseleave to initial values.
     */
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

    /**
     * Creating mouseenter with timeout effect for the svgWrapper element.
     * Creating topLineAnimationComplete emitter and is used in eventListener.js.
     * Creating top line and sending left line with wrapper.
     * @see {@link eventEmitter} - Emitters for this class
     * @see {@link addLineToSVGCorner} - SVG line creation parameters
     * @param {HTMLElement} svgWrapper - Creating breathing effect for the svgWrapper element.
     * @param {Function} debounceTimer - Setting up timer 1s to ensure no multiple animations are running.
     * @param {SVGLineElement} topLineSvg- Extracting line selector and changing them
     * @param {SVGLineElement} leftLineSvg- Extracting line selector and sending them as parameters.
     * @Function onComplete - Creates emitter(topLineAnimationComplete) when mouse enters the svgWrapper.
     * @Function onCompleteParams - Sending querySelector('line') [line] and svgWrapper [wrapper] as parameters
     */
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

    /**
     * Deleting all tweens and animations when mouse leaves the svgWrapper element.
     * @param {HTMLElement} svgWrapper - Setting up parameters to initial values.
     * @param {SVGLineElement} leftLineSvg - Extracting line selector and changing back to initial values.
     * @param {SVGLineElement} topLineSvg- Extracting line selector and changing back to initial values.
     * @Function clearTimeout - Clears the timeout for debounceTimer when mouse leaves the svgWrapper element.
     * @Function killTweensOf - Kills all tweens of the svgWrapper element and instances.
     */
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
            attr: {x2: "100%", y1: "0%"}
        });
        gsap.to(leftLineSvg.querySelector('line'), {
            duration: 0.2,
            attr: {y1: "0", y2: "0"}
        });
    });

}
